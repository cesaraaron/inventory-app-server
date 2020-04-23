import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import {
  Context,
  getUserId,
  UserPermission,
  getUserWithId,
  updateProductsQuantity,
} from '../utils'
import { CartProduct, Product } from '../generated/prisma'

const login = async (_, { phoneNumber, password }, ctx, _1) => {
  const user = await ctx.db.query.user({ where: { phoneNumber } })

  if (!user) {
    throw new Error(
      `La cuenta con el numero: "${phoneNumber}" no existe. Por favor verifica el numero y vuelve a intentarlo`
    )
  }

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    throw new Error('La contraseña que ingresaste es incorrecta')
  }

  return {
    token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
    user,
  }
}

const createUser = async (_, args, ctx: Context, info) => {
  const { name, phoneNumber, password, permissions, notifications } = args
  const userId = await getUserId(ctx)
  const user = await getUserWithId(userId, ctx, '{ isAdmin client {id} }')
  const { id: clientId } = user.client

  if (!clientId) {
    throw new Error('Invalid client id')
  }

  if (!user.isAdmin) {
    throw new UserPermission()
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  return ctx.db.mutation.createUser(
    {
      data: {
        phoneNumber,
        name,
        notifications: notifications || {
          create: {
            fireWhen: 5,
          },
        },
        permissions: {
          set: permissions,
        },
        password: hashedPassword,
        client: { connect: { id: clientId } },
      },
    },
    info
  )
}

const updateUser = async (_, args, ctx: Context, info) => {
  const {
    userId,
    name,
    phoneNumber,
    password,
    permissions,
    notifications,
  } = args
  const userIdFromHeader = await getUserId(ctx)
  const user = await getUserWithId(userIdFromHeader, ctx, '{ isAdmin }')

  if (!user.isAdmin) {
    throw new UserPermission()
  }

  if (password && password.length < 6) {
    throw new Error('La contraseña debe tener 6 o mas caracteres.')
  }

  const userToUpdate = await ctx.db.query.user({ where: { id: userId } })

  const newName = name || userToUpdate.name
  const newPhone = phoneNumber || userToUpdate.phoneNumber
  const newPassword = password
    ? await bcrypt.hash(password, 10)
    : userToUpdate.password

  return ctx.db.mutation.updateUser(
    {
      where: { id: userId },
      data: {
        permissions: { set: permissions },
        notifications: {
          update: notifications,
        },
        phoneNumber: newPhone,
        name: newName,
        password: newPassword,
      },
    },
    info
  )
}

const deleteUser = async (_, { userId }, ctx: Context, info) => {
  const userIdFromHeader = await getUserId(ctx)
  const user = await getUserWithId(userIdFromHeader, ctx, '{ isAdmin }')

  if (!user.isAdmin) {
    throw new UserPermission()
  }

  return ctx.db.mutation.deleteUser({ where: { id: userId } }, info)
}

const createProduct = async (
  _,
  { name, price, quantity, notifications, barCodeData },
  ctx: Context,
  info
) => {
  const userId = await getUserId(ctx)
  const {
    isAdmin,
    permissions,
    client: { id: clientId },
  } = await getUserWithId(userId, ctx, '{ isAdmin permissions client {id} }')

  if (!isAdmin && !permissions.includes('CREATE_PRODUCTS')) {
    throw new Error('Este usuario no tiene permisos para editar productos.')
  }

  return ctx.db.mutation.createProduct(
    {
      data: {
        name,
        price,
        quantity,
        notifications,
        barCodeData,
        user: { connect: { id: userId } },
        client: { connect: { id: clientId } },
      },
    },
    info
  )
}

// TODO: validate the fields of the product before trying to update it
const updateProduct = async (
  _,
  { name, price, quantity, productId, notifications, barCodeData },
  ctx: Context,
  info
) => {
  const userId = await getUserId(ctx)
  const user = await getUserWithId(userId, ctx, '{ isAdmin permissions }')

  if (!user.isAdmin && !user.permissions.includes('UPDATE_PRODUCTS')) {
    throw new Error('Este usuario no tiene permisos para editar productos.')
  }

  return ctx.db.mutation.updateProduct(
    {
      where: { id: productId },
      data: {
        name,
        price,
        barCodeData,
        notifications,
        quantity,
      },
    },
    info
  )
}

const deleteProduct = async (_, { productId }, ctx: Context, info) => {
  const userId = await getUserId(ctx)
  const user = await getUserWithId(userId, ctx, '{ isAdmin permissions }')

  if (!user.isAdmin && !user.permissions.includes('DELETE_PRODUCTS')) {
    throw new Error('Este usuario no tiene permisos para eliminar productos')
  }

  return ctx.db.mutation.deleteProduct(
    {
      where: { id: productId },
    },
    info
  )
}

const createSale = async (_, args, ctx: Context, info) => {
  const { cartProducts } = args as {
    cartProducts: CartProduct[]
  }
  const userId = await getUserId(ctx)
  const user = await getUserWithId(
    userId,
    ctx,
    '{ isAdmin permissions client {id} }'
  )

  if (!user.isAdmin && !user.permissions.includes('CREATE_SALES')) {
    throw new Error('Este usuario no tiene permisos para añadir ventas')
  }

  const updateProducts = await updateProductsQuantity(cartProducts, ctx)

  return ctx.db.mutation
    .createSale(
      {
        data: {
          products: { create: cartProducts },
          soldBy: { connect: { id: userId } },
          client: { connect: { id: user.client.id } },
        },
      },
      info
    )
    .then(async sale => {
      const productsToUpdate: Promise<Product>[] = []

      updateProducts.forEach(({ id, quantity }) => {
        productsToUpdate.push(
          ctx.db.mutation.updateProduct({
            data: {
              quantity,
            },
            where: { id },
          })
        )
      })

      await Promise.all(productsToUpdate)

      return sale
    })
}

const deleteSale = async (_, { saleId }, ctx: Context, info) => {
  const userId = await getUserId(ctx)
  const user = await getUserWithId(userId, ctx, '{ isAdmin permissions }')

  if (!user.isAdmin && !user.permissions.includes('DELETE_SALES')) {
    throw new Error('Este usuario no tiene permisos para eliminar ventas')
  }

  return ctx.db.mutation.deleteSale(
    {
      where: { id: saleId },
    },
    info
  )
}

const createLog = async (_, args, ctx: Context, info) => {
  const userId = await getUserId(ctx)
  const {
    client: { id: clientId },
  } = await getUserWithId(userId, ctx, '{ client { id } }')

  return ctx.db.mutation.createLog(
    {
      data: {
        message: args.message,
        type: args.type,
        user: { connect: { id: userId } },
        client: { connect: { id: clientId } },
      },
    },
    info
  )
}

const saveDeviceToken = async (_, { token }, ctx: Context, info) => {
  const userId = await getUserId(ctx)

  const {
    notifications: { devices },
  } = await getUserWithId(userId, ctx, '{ notifications {devices} }')

  return ctx.db.mutation.updateUser(
    {
      where: { id: userId },
      data: {
        notifications: {
          update: {
            devices: {
              set: [...devices.filter(t => t !== token), token],
            },
          },
        },
      },
    },
    info
  )
}

const removeDeviceToken = async (_, { token }, ctx: Context, info) => {
  const userId = await getUserId(ctx)

  const {
    notifications: { devices },
  } = await getUserWithId(userId, ctx, '{ notifications {devices} }')

  return ctx.db.mutation.updateUser(
    {
      where: { id: userId },
      data: {
        notifications: {
          update: {
            devices: {
              set: devices.filter(t => t !== token),
            },
          },
        },
      },
    },
    info
  )
}

const updateNotis = async (_, { fireWhen }, ctx: Context, info) => {
  const userId = await getUserId(ctx)

  return ctx.db.mutation.updateUser(
    {
      where: { id: userId },
      data: {
        notifications: {
          update: {
            fireWhen,
          },
        },
      },
    },
    info
  )
}

// const createService = async (_, { name, price }, ctx: Context, info) => {
//   const userId = await getUserId(ctx)

//   return ctx.db.mutation.createService(
//     {
//       data: {
//         name,
//         price,
//         user: { connect: { id: userId } },
//       },
//     },
//     info
//   )
// }

// const updateService = async (_, { serviceId, name, price }, ctx: Context, info) => {
//   const userId = await getUserId(ctx)
//   const user = await getUserWithId(userId, ctx, '{ isAdmin permissions }')

//   if (!user.isAdmin && !user.permissions.includes('EDIT_SERVICE')) {
//     throw new Error('Este usuario no tiene permisos para editar servicios.')
//   }

//   return ctx.db.mutation.updateService(
//     {
//       where: { id: serviceId },
//       data: {
//         name,
//         price,
//       },
//     },
//     info
//   )
// }

export const Mutation = {
  login,
  createProduct,
  updateProduct,
  deleteProduct,
  createSale,
  deleteSale,
  createUser,
  updateUser,
  deleteUser,
  createLog,
  saveDeviceToken,
  removeDeviceToken,
  updateNotis,
  // createService,
}
