import * as jwt from 'jsonwebtoken'
import { Prisma, User, Product, CartProduct } from './generated/prisma'

export interface Context {
  db: Prisma
  request: any
}

export function getUserId(ctx: Context): string {
  const Authorization = ctx.request.get('Authorization')

  if (!Authorization) {
    throw new AuthError()
  }

  const token = Authorization.replace('Bearer ', '')

  if (!token) {
    throw new AuthError()
  }

  console.log('token:', token)
  const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
    userId: string
  }

  if (!userId) {
    throw new AuthError()
  }

  return userId
}

export const updateProductsQuantity = async (
  cartProducts: CartProduct[],
  ctx: Context
): Promise<Product[]> => {
  const cartProductIds = cartProducts.map(p => p.productId)

  const products = await ctx.db.query.products({
    where: { id_in: cartProductIds },
  })

  const newProducts: Product[] = []

  products.forEach(({ id, quantity, ...rest }) => {
    const cartProduct = cartProducts.find(p => p.productId === id)
    const newQuantity = quantity - cartProduct.quantitySold

    if (newQuantity >= 0) {
      newProducts.push({ ...rest, id, quantity: newQuantity })
      return
    }

    throw new Error(
      `El producto: ${
        cartProduct.name
      } solo tiene ${quantity} disponible. Usted esta intentado agregar ${
        cartProduct.quantitySold
      }`
    )
  })
  return newProducts
}

export type PartialProduct = {
  id: string
  name: string
  quantity: number
}

export type NotificationData = {
  fireWhenProductIds?: string[]
}


export function getUserWithId(
  id: string,
  ctx: Context,
  info = `{id createdAt updatedAt name lastName phoneNumber permissions isAdmin client {id}}`
): Promise<User> {
  return ctx.db.query.user({ where: { id } }, info)
}

export class AuthError extends Error {
  constructor() {
    super('Acceso denegado')
  }
}

export class UserPermission extends Error {
  constructor() {
    super('Este usuario no tiene permisos para realizar esta operacion')
  }
}
