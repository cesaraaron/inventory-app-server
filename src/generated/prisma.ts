import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    products: <T = Array<Product | null>>(args: { where?: ProductWhereInput | null, orderBy?: ProductOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    services: <T = Array<Service | null>>(args: { where?: ServiceWhereInput | null, orderBy?: ServiceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sales: <T = Array<Sale | null>>(args: { where?: SaleWhereInput | null, orderBy?: SaleOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    logs: <T = Array<Log | null>>(args: { where?: LogWhereInput | null, orderBy?: LogOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notificationses: <T = Array<Notifications | null>>(args: { where?: NotificationsWhereInput | null, orderBy?: NotificationsOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cartProducts: <T = Array<CartProduct | null>>(args: { where?: CartProductWhereInput | null, orderBy?: CartProductOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clients: <T = Array<Client | null>>(args: { where?: ClientWhereInput | null, orderBy?: ClientOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    product: <T = Product | null>(args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    service: <T = Service | null>(args: { where: ServiceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    sale: <T = Sale | null>(args: { where: SaleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    log: <T = Log | null>(args: { where: LogWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    notifications: <T = Notifications | null>(args: { where: NotificationsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    cartProduct: <T = CartProduct | null>(args: { where: CartProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    client: <T = Client | null>(args: { where: ClientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    productsConnection: <T = ProductConnection>(args: { where?: ProductWhereInput | null, orderBy?: ProductOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    servicesConnection: <T = ServiceConnection>(args: { where?: ServiceWhereInput | null, orderBy?: ServiceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    salesConnection: <T = SaleConnection>(args: { where?: SaleWhereInput | null, orderBy?: SaleOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    logsConnection: <T = LogConnection>(args: { where?: LogWhereInput | null, orderBy?: LogOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notificationsesConnection: <T = NotificationsConnection>(args: { where?: NotificationsWhereInput | null, orderBy?: NotificationsOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cartProductsConnection: <T = CartProductConnection>(args: { where?: CartProductWhereInput | null, orderBy?: CartProductOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clientsConnection: <T = ClientConnection>(args: { where?: ClientWhereInput | null, orderBy?: ClientOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createProduct: <T = Product>(args: { data: ProductCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createService: <T = Service>(args: { data: ServiceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSale: <T = Sale>(args: { data: SaleCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLog: <T = Log>(args: { data: LogCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNotifications: <T = Notifications>(args: { data: NotificationsCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCartProduct: <T = CartProduct>(args: { data: CartProductCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createClient: <T = Client>(args: { data: ClientCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProduct: <T = Product | null>(args: { data: ProductUpdateInput, where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateService: <T = Service | null>(args: { data: ServiceUpdateInput, where: ServiceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateSale: <T = Sale | null>(args: { data: SaleUpdateInput, where: SaleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateLog: <T = Log | null>(args: { data: LogUpdateInput, where: LogWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateNotifications: <T = Notifications | null>(args: { data: NotificationsUpdateInput, where: NotificationsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateCartProduct: <T = CartProduct | null>(args: { data: CartProductUpdateInput, where: CartProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateClient: <T = Client | null>(args: { data: ClientUpdateInput, where: ClientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteProduct: <T = Product | null>(args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteService: <T = Service | null>(args: { where: ServiceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteSale: <T = Sale | null>(args: { where: SaleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteLog: <T = Log | null>(args: { where: LogWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteNotifications: <T = Notifications | null>(args: { where: NotificationsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteCartProduct: <T = CartProduct | null>(args: { where: CartProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteClient: <T = Client | null>(args: { where: ClientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertProduct: <T = Product>(args: { where: ProductWhereUniqueInput, create: ProductCreateInput, update: ProductUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertService: <T = Service>(args: { where: ServiceWhereUniqueInput, create: ServiceCreateInput, update: ServiceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSale: <T = Sale>(args: { where: SaleWhereUniqueInput, create: SaleCreateInput, update: SaleUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLog: <T = Log>(args: { where: LogWhereUniqueInput, create: LogCreateInput, update: LogUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNotifications: <T = Notifications>(args: { where: NotificationsWhereUniqueInput, create: NotificationsCreateInput, update: NotificationsUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCartProduct: <T = CartProduct>(args: { where: CartProductWhereUniqueInput, create: CartProductCreateInput, update: CartProductUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertClient: <T = Client>(args: { where: ClientWhereUniqueInput, create: ClientCreateInput, update: ClientUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProducts: <T = BatchPayload>(args: { data: ProductUpdateManyMutationInput, where?: ProductWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyServices: <T = BatchPayload>(args: { data: ServiceUpdateManyMutationInput, where?: ServiceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLogs: <T = BatchPayload>(args: { data: LogUpdateManyMutationInput, where?: LogWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNotificationses: <T = BatchPayload>(args: { data: NotificationsUpdateManyMutationInput, where?: NotificationsWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCartProducts: <T = BatchPayload>(args: { data: CartProductUpdateManyMutationInput, where?: CartProductWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyClients: <T = BatchPayload>(args: { data: ClientUpdateManyMutationInput, where?: ClientWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProducts: <T = BatchPayload>(args: { where?: ProductWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyServices: <T = BatchPayload>(args: { where?: ServiceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySales: <T = BatchPayload>(args: { where?: SaleWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLogs: <T = BatchPayload>(args: { where?: LogWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNotificationses: <T = BatchPayload>(args: { where?: NotificationsWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCartProducts: <T = BatchPayload>(args: { where?: CartProductWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyClients: <T = BatchPayload>(args: { where?: ClientWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    product: <T = ProductSubscriptionPayload | null>(args: { where?: ProductSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    service: <T = ServiceSubscriptionPayload | null>(args: { where?: ServiceSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    sale: <T = SaleSubscriptionPayload | null>(args: { where?: SaleSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    log: <T = LogSubscriptionPayload | null>(args: { where?: LogSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    notifications: <T = NotificationsSubscriptionPayload | null>(args: { where?: NotificationsSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    cartProduct: <T = CartProductSubscriptionPayload | null>(args: { where?: CartProductSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    client: <T = ClientSubscriptionPayload | null>(args: { where?: ClientSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Product: (where?: ProductWhereInput) => Promise<boolean>
  Service: (where?: ServiceWhereInput) => Promise<boolean>
  Sale: (where?: SaleWhereInput) => Promise<boolean>
  Log: (where?: LogWhereInput) => Promise<boolean>
  Notifications: (where?: NotificationsWhereInput) => Promise<boolean>
  CartProduct: (where?: CartProductWhereInput) => Promise<boolean>
  Client: (where?: ClientWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateCartProduct {
  count: Int!
}

type AggregateClient {
  count: Int!
}

type AggregateLog {
  count: Int!
}

type AggregateNotifications {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateSale {
  count: Int!
}

type AggregateService {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type CartProduct implements Node {
  id: ID!
  productId: ID!
  name: String!
  price: Float!
  quantitySold: Int!
}

"""A connection to a list of items."""
type CartProductConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CartProductEdge]!
  aggregate: AggregateCartProduct!
}

input CartProductCreateInput {
  id: ID
  productId: ID!
  name: String!
  price: Float!
  quantitySold: Int!
}

input CartProductCreateManyInput {
  create: [CartProductCreateInput!]
  connect: [CartProductWhereUniqueInput!]
}

"""An edge in a connection."""
type CartProductEdge {
  """The item at the end of the edge."""
  node: CartProduct!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CartProductOrderByInput {
  id_ASC
  id_DESC
  productId_ASC
  productId_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
  quantitySold_ASC
  quantitySold_DESC
}

type CartProductPreviousValues {
  id: ID!
  productId: ID!
  name: String!
  price: Float!
  quantitySold: Int!
}

input CartProductScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [CartProductScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [CartProductScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CartProductScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  productId: ID

  """All values that are not equal to given value."""
  productId_not: ID

  """All values that are contained in given list."""
  productId_in: [ID!]

  """All values that are not contained in given list."""
  productId_not_in: [ID!]

  """All values less than the given value."""
  productId_lt: ID

  """All values less than or equal the given value."""
  productId_lte: ID

  """All values greater than the given value."""
  productId_gt: ID

  """All values greater than or equal the given value."""
  productId_gte: ID

  """All values containing the given string."""
  productId_contains: ID

  """All values not containing the given string."""
  productId_not_contains: ID

  """All values starting with the given string."""
  productId_starts_with: ID

  """All values not starting with the given string."""
  productId_not_starts_with: ID

  """All values ending with the given string."""
  productId_ends_with: ID

  """All values not ending with the given string."""
  productId_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  quantitySold: Int

  """All values that are not equal to given value."""
  quantitySold_not: Int

  """All values that are contained in given list."""
  quantitySold_in: [Int!]

  """All values that are not contained in given list."""
  quantitySold_not_in: [Int!]

  """All values less than the given value."""
  quantitySold_lt: Int

  """All values less than or equal the given value."""
  quantitySold_lte: Int

  """All values greater than the given value."""
  quantitySold_gt: Int

  """All values greater than or equal the given value."""
  quantitySold_gte: Int
}

type CartProductSubscriptionPayload {
  mutation: MutationType!
  node: CartProduct
  updatedFields: [String!]
  previousValues: CartProductPreviousValues
}

input CartProductSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CartProductSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CartProductSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CartProductSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CartProductWhereInput
}

input CartProductUpdateDataInput {
  productId: ID
  name: String
  price: Float
  quantitySold: Int
}

input CartProductUpdateInput {
  productId: ID
  name: String
  price: Float
  quantitySold: Int
}

input CartProductUpdateManyDataInput {
  productId: ID
  name: String
  price: Float
  quantitySold: Int
}

input CartProductUpdateManyInput {
  create: [CartProductCreateInput!]
  connect: [CartProductWhereUniqueInput!]
  set: [CartProductWhereUniqueInput!]
  disconnect: [CartProductWhereUniqueInput!]
  delete: [CartProductWhereUniqueInput!]
  update: [CartProductUpdateWithWhereUniqueNestedInput!]
  updateMany: [CartProductUpdateManyWithWhereNestedInput!]
  deleteMany: [CartProductScalarWhereInput!]
  upsert: [CartProductUpsertWithWhereUniqueNestedInput!]
}

input CartProductUpdateManyMutationInput {
  productId: ID
  name: String
  price: Float
  quantitySold: Int
}

input CartProductUpdateManyWithWhereNestedInput {
  where: CartProductScalarWhereInput!
  data: CartProductUpdateManyDataInput!
}

input CartProductUpdateWithWhereUniqueNestedInput {
  where: CartProductWhereUniqueInput!
  data: CartProductUpdateDataInput!
}

input CartProductUpsertWithWhereUniqueNestedInput {
  where: CartProductWhereUniqueInput!
  update: CartProductUpdateDataInput!
  create: CartProductCreateInput!
}

input CartProductWhereInput {
  """Logical AND on all given filters."""
  AND: [CartProductWhereInput!]

  """Logical OR on all given filters."""
  OR: [CartProductWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CartProductWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  productId: ID

  """All values that are not equal to given value."""
  productId_not: ID

  """All values that are contained in given list."""
  productId_in: [ID!]

  """All values that are not contained in given list."""
  productId_not_in: [ID!]

  """All values less than the given value."""
  productId_lt: ID

  """All values less than or equal the given value."""
  productId_lte: ID

  """All values greater than the given value."""
  productId_gt: ID

  """All values greater than or equal the given value."""
  productId_gte: ID

  """All values containing the given string."""
  productId_contains: ID

  """All values not containing the given string."""
  productId_not_contains: ID

  """All values starting with the given string."""
  productId_starts_with: ID

  """All values not starting with the given string."""
  productId_not_starts_with: ID

  """All values ending with the given string."""
  productId_ends_with: ID

  """All values not ending with the given string."""
  productId_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  quantitySold: Int

  """All values that are not equal to given value."""
  quantitySold_not: Int

  """All values that are contained in given list."""
  quantitySold_in: [Int!]

  """All values that are not contained in given list."""
  quantitySold_not_in: [Int!]

  """All values less than the given value."""
  quantitySold_lt: Int

  """All values less than or equal the given value."""
  quantitySold_lte: Int

  """All values greater than the given value."""
  quantitySold_gt: Int

  """All values greater than or equal the given value."""
  quantitySold_gte: Int
}

input CartProductWhereUniqueInput {
  id: ID
}

type Client implements Node {
  id: ID!
  name: String!
  lastName: String
  email: String
  phoneNumber: String!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  sales(where: SaleWhereInput, orderBy: SaleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sale!]
  logs(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Log!]
}

"""A connection to a list of items."""
type ClientConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ClientEdge]!
  aggregate: AggregateClient!
}

input ClientCreateInput {
  id: ID
  name: String!
  lastName: String
  email: String
  phoneNumber: String!
  users: UserCreateManyWithoutClientInput
  products: ProductCreateManyWithoutClientInput
  sales: SaleCreateManyWithoutClientInput
  logs: LogCreateManyWithoutClientInput
}

input ClientCreateOneInput {
  create: ClientCreateInput
  connect: ClientWhereUniqueInput
}

input ClientCreateOneWithoutLogsInput {
  create: ClientCreateWithoutLogsInput
  connect: ClientWhereUniqueInput
}

input ClientCreateOneWithoutProductsInput {
  create: ClientCreateWithoutProductsInput
  connect: ClientWhereUniqueInput
}

input ClientCreateOneWithoutSalesInput {
  create: ClientCreateWithoutSalesInput
  connect: ClientWhereUniqueInput
}

input ClientCreateOneWithoutUsersInput {
  create: ClientCreateWithoutUsersInput
  connect: ClientWhereUniqueInput
}

input ClientCreateWithoutLogsInput {
  id: ID
  name: String!
  lastName: String
  email: String
  phoneNumber: String!
  users: UserCreateManyWithoutClientInput
  products: ProductCreateManyWithoutClientInput
  sales: SaleCreateManyWithoutClientInput
}

input ClientCreateWithoutProductsInput {
  id: ID
  name: String!
  lastName: String
  email: String
  phoneNumber: String!
  users: UserCreateManyWithoutClientInput
  sales: SaleCreateManyWithoutClientInput
  logs: LogCreateManyWithoutClientInput
}

input ClientCreateWithoutSalesInput {
  id: ID
  name: String!
  lastName: String
  email: String
  phoneNumber: String!
  users: UserCreateManyWithoutClientInput
  products: ProductCreateManyWithoutClientInput
  logs: LogCreateManyWithoutClientInput
}

input ClientCreateWithoutUsersInput {
  id: ID
  name: String!
  lastName: String
  email: String
  phoneNumber: String!
  products: ProductCreateManyWithoutClientInput
  sales: SaleCreateManyWithoutClientInput
  logs: LogCreateManyWithoutClientInput
}

"""An edge in a connection."""
type ClientEdge {
  """The item at the end of the edge."""
  node: Client!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ClientOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  phoneNumber_ASC
  phoneNumber_DESC
}

type ClientPreviousValues {
  id: ID!
  name: String!
  lastName: String
  email: String
  phoneNumber: String!
}

type ClientSubscriptionPayload {
  mutation: MutationType!
  node: Client
  updatedFields: [String!]
  previousValues: ClientPreviousValues
}

input ClientSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ClientSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClientSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClientSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ClientWhereInput
}

input ClientUpdateDataInput {
  name: String
  lastName: String
  email: String
  phoneNumber: String
  users: UserUpdateManyWithoutClientInput
  products: ProductUpdateManyWithoutClientInput
  sales: SaleUpdateManyWithoutClientInput
  logs: LogUpdateManyWithoutClientInput
}

input ClientUpdateInput {
  name: String
  lastName: String
  email: String
  phoneNumber: String
  users: UserUpdateManyWithoutClientInput
  products: ProductUpdateManyWithoutClientInput
  sales: SaleUpdateManyWithoutClientInput
  logs: LogUpdateManyWithoutClientInput
}

input ClientUpdateManyMutationInput {
  name: String
  lastName: String
  email: String
  phoneNumber: String
}

input ClientUpdateOneRequiredInput {
  create: ClientCreateInput
  connect: ClientWhereUniqueInput
  update: ClientUpdateDataInput
  upsert: ClientUpsertNestedInput
}

input ClientUpdateOneRequiredWithoutLogsInput {
  create: ClientCreateWithoutLogsInput
  connect: ClientWhereUniqueInput
  update: ClientUpdateWithoutLogsDataInput
  upsert: ClientUpsertWithoutLogsInput
}

input ClientUpdateOneRequiredWithoutProductsInput {
  create: ClientCreateWithoutProductsInput
  connect: ClientWhereUniqueInput
  update: ClientUpdateWithoutProductsDataInput
  upsert: ClientUpsertWithoutProductsInput
}

input ClientUpdateOneRequiredWithoutSalesInput {
  create: ClientCreateWithoutSalesInput
  connect: ClientWhereUniqueInput
  update: ClientUpdateWithoutSalesDataInput
  upsert: ClientUpsertWithoutSalesInput
}

input ClientUpdateOneRequiredWithoutUsersInput {
  create: ClientCreateWithoutUsersInput
  connect: ClientWhereUniqueInput
  update: ClientUpdateWithoutUsersDataInput
  upsert: ClientUpsertWithoutUsersInput
}

input ClientUpdateWithoutLogsDataInput {
  name: String
  lastName: String
  email: String
  phoneNumber: String
  users: UserUpdateManyWithoutClientInput
  products: ProductUpdateManyWithoutClientInput
  sales: SaleUpdateManyWithoutClientInput
}

input ClientUpdateWithoutProductsDataInput {
  name: String
  lastName: String
  email: String
  phoneNumber: String
  users: UserUpdateManyWithoutClientInput
  sales: SaleUpdateManyWithoutClientInput
  logs: LogUpdateManyWithoutClientInput
}

input ClientUpdateWithoutSalesDataInput {
  name: String
  lastName: String
  email: String
  phoneNumber: String
  users: UserUpdateManyWithoutClientInput
  products: ProductUpdateManyWithoutClientInput
  logs: LogUpdateManyWithoutClientInput
}

input ClientUpdateWithoutUsersDataInput {
  name: String
  lastName: String
  email: String
  phoneNumber: String
  products: ProductUpdateManyWithoutClientInput
  sales: SaleUpdateManyWithoutClientInput
  logs: LogUpdateManyWithoutClientInput
}

input ClientUpsertNestedInput {
  update: ClientUpdateDataInput!
  create: ClientCreateInput!
}

input ClientUpsertWithoutLogsInput {
  update: ClientUpdateWithoutLogsDataInput!
  create: ClientCreateWithoutLogsInput!
}

input ClientUpsertWithoutProductsInput {
  update: ClientUpdateWithoutProductsDataInput!
  create: ClientCreateWithoutProductsInput!
}

input ClientUpsertWithoutSalesInput {
  update: ClientUpdateWithoutSalesDataInput!
  create: ClientCreateWithoutSalesInput!
}

input ClientUpsertWithoutUsersInput {
  update: ClientUpdateWithoutUsersDataInput!
  create: ClientCreateWithoutUsersInput!
}

input ClientWhereInput {
  """Logical AND on all given filters."""
  AND: [ClientWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClientWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClientWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  phoneNumber: String

  """All values that are not equal to given value."""
  phoneNumber_not: String

  """All values that are contained in given list."""
  phoneNumber_in: [String!]

  """All values that are not contained in given list."""
  phoneNumber_not_in: [String!]

  """All values less than the given value."""
  phoneNumber_lt: String

  """All values less than or equal the given value."""
  phoneNumber_lte: String

  """All values greater than the given value."""
  phoneNumber_gt: String

  """All values greater than or equal the given value."""
  phoneNumber_gte: String

  """All values containing the given string."""
  phoneNumber_contains: String

  """All values not containing the given string."""
  phoneNumber_not_contains: String

  """All values starting with the given string."""
  phoneNumber_starts_with: String

  """All values not starting with the given string."""
  phoneNumber_not_starts_with: String

  """All values ending with the given string."""
  phoneNumber_ends_with: String

  """All values not ending with the given string."""
  phoneNumber_not_ends_with: String
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  sales_every: SaleWhereInput
  sales_some: SaleWhereInput
  sales_none: SaleWhereInput
  logs_every: LogWhereInput
  logs_some: LogWhereInput
  logs_none: LogWhereInput
}

input ClientWhereUniqueInput {
  id: ID
  email: String
  phoneNumber: String
}

scalar DateTime

type Log implements Node {
  id: ID!
  message: String!
  type: LogType!
  createdAt: DateTime!
  user: User!
  client: Client!
}

"""A connection to a list of items."""
type LogConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LogEdge]!
  aggregate: AggregateLog!
}

input LogCreateInput {
  id: ID
  message: String!
  type: LogType!
  user: UserCreateOneInput!
  client: ClientCreateOneWithoutLogsInput!
}

input LogCreateManyWithoutClientInput {
  create: [LogCreateWithoutClientInput!]
  connect: [LogWhereUniqueInput!]
}

input LogCreateWithoutClientInput {
  id: ID
  message: String!
  type: LogType!
  user: UserCreateOneInput!
}

"""An edge in a connection."""
type LogEdge {
  """The item at the end of the edge."""
  node: Log!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LogOrderByInput {
  id_ASC
  id_DESC
  message_ASC
  message_DESC
  type_ASC
  type_DESC
  createdAt_ASC
  createdAt_DESC
}

type LogPreviousValues {
  id: ID!
  message: String!
  type: LogType!
  createdAt: DateTime!
}

input LogScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [LogScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [LogScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LogScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  message: String

  """All values that are not equal to given value."""
  message_not: String

  """All values that are contained in given list."""
  message_in: [String!]

  """All values that are not contained in given list."""
  message_not_in: [String!]

  """All values less than the given value."""
  message_lt: String

  """All values less than or equal the given value."""
  message_lte: String

  """All values greater than the given value."""
  message_gt: String

  """All values greater than or equal the given value."""
  message_gte: String

  """All values containing the given string."""
  message_contains: String

  """All values not containing the given string."""
  message_not_contains: String

  """All values starting with the given string."""
  message_starts_with: String

  """All values not starting with the given string."""
  message_not_starts_with: String

  """All values ending with the given string."""
  message_ends_with: String

  """All values not ending with the given string."""
  message_not_ends_with: String
  type: LogType

  """All values that are not equal to given value."""
  type_not: LogType

  """All values that are contained in given list."""
  type_in: [LogType!]

  """All values that are not contained in given list."""
  type_not_in: [LogType!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
}

type LogSubscriptionPayload {
  mutation: MutationType!
  node: Log
  updatedFields: [String!]
  previousValues: LogPreviousValues
}

input LogSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LogSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LogSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LogSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LogWhereInput
}

enum LogType {
  ERROR
}

input LogUpdateInput {
  message: String
  type: LogType
  user: UserUpdateOneRequiredInput
  client: ClientUpdateOneRequiredWithoutLogsInput
}

input LogUpdateManyDataInput {
  message: String
  type: LogType
}

input LogUpdateManyMutationInput {
  message: String
  type: LogType
}

input LogUpdateManyWithoutClientInput {
  create: [LogCreateWithoutClientInput!]
  connect: [LogWhereUniqueInput!]
  set: [LogWhereUniqueInput!]
  disconnect: [LogWhereUniqueInput!]
  delete: [LogWhereUniqueInput!]
  update: [LogUpdateWithWhereUniqueWithoutClientInput!]
  updateMany: [LogUpdateManyWithWhereNestedInput!]
  deleteMany: [LogScalarWhereInput!]
  upsert: [LogUpsertWithWhereUniqueWithoutClientInput!]
}

input LogUpdateManyWithWhereNestedInput {
  where: LogScalarWhereInput!
  data: LogUpdateManyDataInput!
}

input LogUpdateWithoutClientDataInput {
  message: String
  type: LogType
  user: UserUpdateOneRequiredInput
}

input LogUpdateWithWhereUniqueWithoutClientInput {
  where: LogWhereUniqueInput!
  data: LogUpdateWithoutClientDataInput!
}

input LogUpsertWithWhereUniqueWithoutClientInput {
  where: LogWhereUniqueInput!
  update: LogUpdateWithoutClientDataInput!
  create: LogCreateWithoutClientInput!
}

input LogWhereInput {
  """Logical AND on all given filters."""
  AND: [LogWhereInput!]

  """Logical OR on all given filters."""
  OR: [LogWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LogWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  message: String

  """All values that are not equal to given value."""
  message_not: String

  """All values that are contained in given list."""
  message_in: [String!]

  """All values that are not contained in given list."""
  message_not_in: [String!]

  """All values less than the given value."""
  message_lt: String

  """All values less than or equal the given value."""
  message_lte: String

  """All values greater than the given value."""
  message_gt: String

  """All values greater than or equal the given value."""
  message_gte: String

  """All values containing the given string."""
  message_contains: String

  """All values not containing the given string."""
  message_not_contains: String

  """All values starting with the given string."""
  message_starts_with: String

  """All values not starting with the given string."""
  message_not_starts_with: String

  """All values ending with the given string."""
  message_ends_with: String

  """All values not ending with the given string."""
  message_not_ends_with: String
  type: LogType

  """All values that are not equal to given value."""
  type_not: LogType

  """All values that are contained in given list."""
  type_in: [LogType!]

  """All values that are not contained in given list."""
  type_not_in: [LogType!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  user: UserWhereInput
  client: ClientWhereInput
}

input LogWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createProduct(data: ProductCreateInput!): Product!
  createService(data: ServiceCreateInput!): Service!
  createSale(data: SaleCreateInput!): Sale!
  createLog(data: LogCreateInput!): Log!
  createNotifications(data: NotificationsCreateInput!): Notifications!
  createCartProduct(data: CartProductCreateInput!): CartProduct!
  createClient(data: ClientCreateInput!): Client!
  createUser(data: UserCreateInput!): User!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateService(data: ServiceUpdateInput!, where: ServiceWhereUniqueInput!): Service
  updateSale(data: SaleUpdateInput!, where: SaleWhereUniqueInput!): Sale
  updateLog(data: LogUpdateInput!, where: LogWhereUniqueInput!): Log
  updateNotifications(data: NotificationsUpdateInput!, where: NotificationsWhereUniqueInput!): Notifications
  updateCartProduct(data: CartProductUpdateInput!, where: CartProductWhereUniqueInput!): CartProduct
  updateClient(data: ClientUpdateInput!, where: ClientWhereUniqueInput!): Client
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteService(where: ServiceWhereUniqueInput!): Service
  deleteSale(where: SaleWhereUniqueInput!): Sale
  deleteLog(where: LogWhereUniqueInput!): Log
  deleteNotifications(where: NotificationsWhereUniqueInput!): Notifications
  deleteCartProduct(where: CartProductWhereUniqueInput!): CartProduct
  deleteClient(where: ClientWhereUniqueInput!): Client
  deleteUser(where: UserWhereUniqueInput!): User
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  upsertService(where: ServiceWhereUniqueInput!, create: ServiceCreateInput!, update: ServiceUpdateInput!): Service!
  upsertSale(where: SaleWhereUniqueInput!, create: SaleCreateInput!, update: SaleUpdateInput!): Sale!
  upsertLog(where: LogWhereUniqueInput!, create: LogCreateInput!, update: LogUpdateInput!): Log!
  upsertNotifications(where: NotificationsWhereUniqueInput!, create: NotificationsCreateInput!, update: NotificationsUpdateInput!): Notifications!
  upsertCartProduct(where: CartProductWhereUniqueInput!, create: CartProductCreateInput!, update: CartProductUpdateInput!): CartProduct!
  upsertClient(where: ClientWhereUniqueInput!, create: ClientCreateInput!, update: ClientUpdateInput!): Client!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  updateManyServices(data: ServiceUpdateManyMutationInput!, where: ServiceWhereInput): BatchPayload!
  updateManyLogs(data: LogUpdateManyMutationInput!, where: LogWhereInput): BatchPayload!
  updateManyNotificationses(data: NotificationsUpdateManyMutationInput!, where: NotificationsWhereInput): BatchPayload!
  updateManyCartProducts(data: CartProductUpdateManyMutationInput!, where: CartProductWhereInput): BatchPayload!
  updateManyClients(data: ClientUpdateManyMutationInput!, where: ClientWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  deleteManyServices(where: ServiceWhereInput): BatchPayload!
  deleteManySales(where: SaleWhereInput): BatchPayload!
  deleteManyLogs(where: LogWhereInput): BatchPayload!
  deleteManyNotificationses(where: NotificationsWhereInput): BatchPayload!
  deleteManyCartProducts(where: CartProductWhereInput): BatchPayload!
  deleteManyClients(where: ClientWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Notifications implements Node {
  id: ID!
  fireWhen: Int!
  devices: [String!]!
}

"""A connection to a list of items."""
type NotificationsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NotificationsEdge]!
  aggregate: AggregateNotifications!
}

input NotificationsCreatedevicesInput {
  set: [String!]
}

input NotificationsCreateInput {
  id: ID
  fireWhen: Int
  devices: NotificationsCreatedevicesInput
}

input NotificationsCreateOneInput {
  create: NotificationsCreateInput
  connect: NotificationsWhereUniqueInput
}

"""An edge in a connection."""
type NotificationsEdge {
  """The item at the end of the edge."""
  node: Notifications!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NotificationsOrderByInput {
  id_ASC
  id_DESC
  fireWhen_ASC
  fireWhen_DESC
}

type NotificationsPreviousValues {
  id: ID!
  fireWhen: Int!
  devices: [String!]!
}

type NotificationsSubscriptionPayload {
  mutation: MutationType!
  node: Notifications
  updatedFields: [String!]
  previousValues: NotificationsPreviousValues
}

input NotificationsSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NotificationsSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationsSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NotificationsSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NotificationsWhereInput
}

input NotificationsUpdateDataInput {
  fireWhen: Int
  devices: NotificationsUpdatedevicesInput
}

input NotificationsUpdatedevicesInput {
  set: [String!]
}

input NotificationsUpdateInput {
  fireWhen: Int
  devices: NotificationsUpdatedevicesInput
}

input NotificationsUpdateManyMutationInput {
  fireWhen: Int
  devices: NotificationsUpdatedevicesInput
}

input NotificationsUpdateOneRequiredInput {
  create: NotificationsCreateInput
  connect: NotificationsWhereUniqueInput
  update: NotificationsUpdateDataInput
  upsert: NotificationsUpsertNestedInput
}

input NotificationsUpsertNestedInput {
  update: NotificationsUpdateDataInput!
  create: NotificationsCreateInput!
}

input NotificationsWhereInput {
  """Logical AND on all given filters."""
  AND: [NotificationsWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationsWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NotificationsWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  fireWhen: Int

  """All values that are not equal to given value."""
  fireWhen_not: Int

  """All values that are contained in given list."""
  fireWhen_in: [Int!]

  """All values that are not contained in given list."""
  fireWhen_not_in: [Int!]

  """All values less than the given value."""
  fireWhen_lt: Int

  """All values less than or equal the given value."""
  fireWhen_lte: Int

  """All values greater than the given value."""
  fireWhen_gt: Int

  """All values greater than or equal the given value."""
  fireWhen_gte: Int
}

input NotificationsWhereUniqueInput {
  id: ID
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Product implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  price: Float!
  notifications: Boolean!
  quantity: Int!
  user: User!
  barCodeData: String
  client: Client!
}

"""A connection to a list of items."""
type ProductConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  id: ID
  name: String!
  price: Float!
  notifications: Boolean!
  quantity: Int!
  barCodeData: String
  user: UserCreateOneInput!
  client: ClientCreateOneWithoutProductsInput!
}

input ProductCreateManyWithoutClientInput {
  create: [ProductCreateWithoutClientInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateWithoutClientInput {
  id: ID
  name: String!
  price: Float!
  notifications: Boolean!
  quantity: Int!
  barCodeData: String
  user: UserCreateOneInput!
}

"""An edge in a connection."""
type ProductEdge {
  """The item at the end of the edge."""
  node: Product!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
  notifications_ASC
  notifications_DESC
  quantity_ASC
  quantity_DESC
  barCodeData_ASC
  barCodeData_DESC
}

type ProductPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  price: Float!
  notifications: Boolean!
  quantity: Int!
  barCodeData: String
}

input ProductScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  notifications: Boolean

  """All values that are not equal to given value."""
  notifications_not: Boolean
  quantity: Int

  """All values that are not equal to given value."""
  quantity_not: Int

  """All values that are contained in given list."""
  quantity_in: [Int!]

  """All values that are not contained in given list."""
  quantity_not_in: [Int!]

  """All values less than the given value."""
  quantity_lt: Int

  """All values less than or equal the given value."""
  quantity_lte: Int

  """All values greater than the given value."""
  quantity_gt: Int

  """All values greater than or equal the given value."""
  quantity_gte: Int
  barCodeData: String

  """All values that are not equal to given value."""
  barCodeData_not: String

  """All values that are contained in given list."""
  barCodeData_in: [String!]

  """All values that are not contained in given list."""
  barCodeData_not_in: [String!]

  """All values less than the given value."""
  barCodeData_lt: String

  """All values less than or equal the given value."""
  barCodeData_lte: String

  """All values greater than the given value."""
  barCodeData_gt: String

  """All values greater than or equal the given value."""
  barCodeData_gte: String

  """All values containing the given string."""
  barCodeData_contains: String

  """All values not containing the given string."""
  barCodeData_not_contains: String

  """All values starting with the given string."""
  barCodeData_starts_with: String

  """All values not starting with the given string."""
  barCodeData_not_starts_with: String

  """All values ending with the given string."""
  barCodeData_ends_with: String

  """All values not ending with the given string."""
  barCodeData_not_ends_with: String
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
}

input ProductUpdateInput {
  name: String
  price: Float
  notifications: Boolean
  quantity: Int
  barCodeData: String
  user: UserUpdateOneRequiredInput
  client: ClientUpdateOneRequiredWithoutProductsInput
}

input ProductUpdateManyDataInput {
  name: String
  price: Float
  notifications: Boolean
  quantity: Int
  barCodeData: String
}

input ProductUpdateManyMutationInput {
  name: String
  price: Float
  notifications: Boolean
  quantity: Int
  barCodeData: String
}

input ProductUpdateManyWithoutClientInput {
  create: [ProductCreateWithoutClientInput!]
  connect: [ProductWhereUniqueInput!]
  set: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutClientInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
  deleteMany: [ProductScalarWhereInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutClientInput!]
}

input ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput!
  data: ProductUpdateManyDataInput!
}

input ProductUpdateWithoutClientDataInput {
  name: String
  price: Float
  notifications: Boolean
  quantity: Int
  barCodeData: String
  user: UserUpdateOneRequiredInput
}

input ProductUpdateWithWhereUniqueWithoutClientInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutClientDataInput!
}

input ProductUpsertWithWhereUniqueWithoutClientInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutClientDataInput!
  create: ProductCreateWithoutClientInput!
}

input ProductWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  notifications: Boolean

  """All values that are not equal to given value."""
  notifications_not: Boolean
  quantity: Int

  """All values that are not equal to given value."""
  quantity_not: Int

  """All values that are contained in given list."""
  quantity_in: [Int!]

  """All values that are not contained in given list."""
  quantity_not_in: [Int!]

  """All values less than the given value."""
  quantity_lt: Int

  """All values less than or equal the given value."""
  quantity_lte: Int

  """All values greater than the given value."""
  quantity_gt: Int

  """All values greater than or equal the given value."""
  quantity_gte: Int
  barCodeData: String

  """All values that are not equal to given value."""
  barCodeData_not: String

  """All values that are contained in given list."""
  barCodeData_in: [String!]

  """All values that are not contained in given list."""
  barCodeData_not_in: [String!]

  """All values less than the given value."""
  barCodeData_lt: String

  """All values less than or equal the given value."""
  barCodeData_lte: String

  """All values greater than the given value."""
  barCodeData_gt: String

  """All values greater than or equal the given value."""
  barCodeData_gte: String

  """All values containing the given string."""
  barCodeData_contains: String

  """All values not containing the given string."""
  barCodeData_not_contains: String

  """All values starting with the given string."""
  barCodeData_starts_with: String

  """All values not starting with the given string."""
  barCodeData_not_starts_with: String

  """All values ending with the given string."""
  barCodeData_ends_with: String

  """All values not ending with the given string."""
  barCodeData_not_ends_with: String
  user: UserWhereInput
  client: ClientWhereInput
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  services(where: ServiceWhereInput, orderBy: ServiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Service]!
  sales(where: SaleWhereInput, orderBy: SaleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sale]!
  logs(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Log]!
  notificationses(where: NotificationsWhereInput, orderBy: NotificationsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notifications]!
  cartProducts(where: CartProductWhereInput, orderBy: CartProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartProduct]!
  clients(where: ClientWhereInput, orderBy: ClientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Client]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  product(where: ProductWhereUniqueInput!): Product
  service(where: ServiceWhereUniqueInput!): Service
  sale(where: SaleWhereUniqueInput!): Sale
  log(where: LogWhereUniqueInput!): Log
  notifications(where: NotificationsWhereUniqueInput!): Notifications
  cartProduct(where: CartProductWhereUniqueInput!): CartProduct
  client(where: ClientWhereUniqueInput!): Client
  user(where: UserWhereUniqueInput!): User
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  servicesConnection(where: ServiceWhereInput, orderBy: ServiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ServiceConnection!
  salesConnection(where: SaleWhereInput, orderBy: SaleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SaleConnection!
  logsConnection(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LogConnection!
  notificationsesConnection(where: NotificationsWhereInput, orderBy: NotificationsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationsConnection!
  cartProductsConnection(where: CartProductWhereInput, orderBy: CartProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartProductConnection!
  clientsConnection(where: ClientWhereInput, orderBy: ClientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClientConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Sale implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  products(where: CartProductWhereInput, orderBy: CartProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartProduct!]
  soldBy: User!
  client: Client!
}

"""A connection to a list of items."""
type SaleConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SaleEdge]!
  aggregate: AggregateSale!
}

input SaleCreateInput {
  id: ID
  products: CartProductCreateManyInput
  soldBy: UserCreateOneWithoutSalesInput!
  client: ClientCreateOneWithoutSalesInput!
}

input SaleCreateManyWithoutClientInput {
  create: [SaleCreateWithoutClientInput!]
  connect: [SaleWhereUniqueInput!]
}

input SaleCreateManyWithoutSoldByInput {
  create: [SaleCreateWithoutSoldByInput!]
  connect: [SaleWhereUniqueInput!]
}

input SaleCreateWithoutClientInput {
  id: ID
  products: CartProductCreateManyInput
  soldBy: UserCreateOneWithoutSalesInput!
}

input SaleCreateWithoutSoldByInput {
  id: ID
  products: CartProductCreateManyInput
  client: ClientCreateOneWithoutSalesInput!
}

"""An edge in a connection."""
type SaleEdge {
  """The item at the end of the edge."""
  node: Sale!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SaleOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SalePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input SaleScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [SaleScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [SaleScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SaleScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type SaleSubscriptionPayload {
  mutation: MutationType!
  node: Sale
  updatedFields: [String!]
  previousValues: SalePreviousValues
}

input SaleSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SaleSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SaleSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SaleSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SaleWhereInput
}

input SaleUpdateInput {
  products: CartProductUpdateManyInput
  soldBy: UserUpdateOneRequiredWithoutSalesInput
  client: ClientUpdateOneRequiredWithoutSalesInput
}

input SaleUpdateManyWithoutClientInput {
  create: [SaleCreateWithoutClientInput!]
  connect: [SaleWhereUniqueInput!]
  set: [SaleWhereUniqueInput!]
  disconnect: [SaleWhereUniqueInput!]
  delete: [SaleWhereUniqueInput!]
  update: [SaleUpdateWithWhereUniqueWithoutClientInput!]
  deleteMany: [SaleScalarWhereInput!]
  upsert: [SaleUpsertWithWhereUniqueWithoutClientInput!]
}

input SaleUpdateManyWithoutSoldByInput {
  create: [SaleCreateWithoutSoldByInput!]
  connect: [SaleWhereUniqueInput!]
  set: [SaleWhereUniqueInput!]
  disconnect: [SaleWhereUniqueInput!]
  delete: [SaleWhereUniqueInput!]
  update: [SaleUpdateWithWhereUniqueWithoutSoldByInput!]
  deleteMany: [SaleScalarWhereInput!]
  upsert: [SaleUpsertWithWhereUniqueWithoutSoldByInput!]
}

input SaleUpdateWithoutClientDataInput {
  products: CartProductUpdateManyInput
  soldBy: UserUpdateOneRequiredWithoutSalesInput
}

input SaleUpdateWithoutSoldByDataInput {
  products: CartProductUpdateManyInput
  client: ClientUpdateOneRequiredWithoutSalesInput
}

input SaleUpdateWithWhereUniqueWithoutClientInput {
  where: SaleWhereUniqueInput!
  data: SaleUpdateWithoutClientDataInput!
}

input SaleUpdateWithWhereUniqueWithoutSoldByInput {
  where: SaleWhereUniqueInput!
  data: SaleUpdateWithoutSoldByDataInput!
}

input SaleUpsertWithWhereUniqueWithoutClientInput {
  where: SaleWhereUniqueInput!
  update: SaleUpdateWithoutClientDataInput!
  create: SaleCreateWithoutClientInput!
}

input SaleUpsertWithWhereUniqueWithoutSoldByInput {
  where: SaleWhereUniqueInput!
  update: SaleUpdateWithoutSoldByDataInput!
  create: SaleCreateWithoutSoldByInput!
}

input SaleWhereInput {
  """Logical AND on all given filters."""
  AND: [SaleWhereInput!]

  """Logical OR on all given filters."""
  OR: [SaleWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SaleWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  products_every: CartProductWhereInput
  products_some: CartProductWhereInput
  products_none: CartProductWhereInput
  soldBy: UserWhereInput
  client: ClientWhereInput
}

input SaleWhereUniqueInput {
  id: ID
}

type Service implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  price: Float!
  user: User!
  client: Client!
}

"""A connection to a list of items."""
type ServiceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ServiceEdge]!
  aggregate: AggregateService!
}

input ServiceCreateInput {
  id: ID
  name: String!
  price: Float!
  user: UserCreateOneInput!
  client: ClientCreateOneInput!
}

"""An edge in a connection."""
type ServiceEdge {
  """The item at the end of the edge."""
  node: Service!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ServiceOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
}

type ServicePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  price: Float!
}

type ServiceSubscriptionPayload {
  mutation: MutationType!
  node: Service
  updatedFields: [String!]
  previousValues: ServicePreviousValues
}

input ServiceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ServiceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ServiceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ServiceSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ServiceWhereInput
}

input ServiceUpdateInput {
  name: String
  price: Float
  user: UserUpdateOneRequiredInput
  client: ClientUpdateOneRequiredInput
}

input ServiceUpdateManyMutationInput {
  name: String
  price: Float
}

input ServiceWhereInput {
  """Logical AND on all given filters."""
  AND: [ServiceWhereInput!]

  """Logical OR on all given filters."""
  OR: [ServiceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ServiceWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  user: UserWhereInput
  client: ClientWhereInput
}

input ServiceWhereUniqueInput {
  id: ID
}

type Subscription {
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  service(where: ServiceSubscriptionWhereInput): ServiceSubscriptionPayload
  sale(where: SaleSubscriptionWhereInput): SaleSubscriptionPayload
  log(where: LogSubscriptionWhereInput): LogSubscriptionPayload
  notifications(where: NotificationsSubscriptionWhereInput): NotificationsSubscriptionPayload
  cartProduct(where: CartProductSubscriptionWhereInput): CartProductSubscriptionPayload
  client(where: ClientSubscriptionWhereInput): ClientSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  lastName: String
  notifications: Notifications!
  phoneNumber: String!
  password: String!
  permissions: [UserPermissions!]!
  isAdmin: Boolean!
  client: Client!
  sales(where: SaleWhereInput, orderBy: SaleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sale!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  lastName: String
  phoneNumber: String!
  password: String!
  isAdmin: Boolean
  permissions: UserCreatepermissionsInput
  notifications: NotificationsCreateOneInput!
  client: ClientCreateOneWithoutUsersInput!
  sales: SaleCreateManyWithoutSoldByInput
}

input UserCreateManyWithoutClientInput {
  create: [UserCreateWithoutClientInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutSalesInput {
  create: UserCreateWithoutSalesInput
  connect: UserWhereUniqueInput
}

input UserCreatepermissionsInput {
  set: [UserPermissions!]
}

input UserCreateWithoutClientInput {
  id: ID
  name: String!
  lastName: String
  phoneNumber: String!
  password: String!
  isAdmin: Boolean
  permissions: UserCreatepermissionsInput
  notifications: NotificationsCreateOneInput!
  sales: SaleCreateManyWithoutSoldByInput
}

input UserCreateWithoutSalesInput {
  id: ID
  name: String!
  lastName: String
  phoneNumber: String!
  password: String!
  isAdmin: Boolean
  permissions: UserCreatepermissionsInput
  notifications: NotificationsCreateOneInput!
  client: ClientCreateOneWithoutUsersInput!
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  lastName_ASC
  lastName_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  password_ASC
  password_DESC
  isAdmin_ASC
  isAdmin_DESC
}

enum UserPermissions {
  CREATE_PRODUCTS
  UPDATE_PRODUCTS
  DELETE_PRODUCTS
  CREATE_SALES
  DELETE_SALES
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  lastName: String
  phoneNumber: String!
  password: String!
  permissions: [UserPermissions!]!
  isAdmin: Boolean!
}

input UserScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [UserScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  phoneNumber: String

  """All values that are not equal to given value."""
  phoneNumber_not: String

  """All values that are contained in given list."""
  phoneNumber_in: [String!]

  """All values that are not contained in given list."""
  phoneNumber_not_in: [String!]

  """All values less than the given value."""
  phoneNumber_lt: String

  """All values less than or equal the given value."""
  phoneNumber_lte: String

  """All values greater than the given value."""
  phoneNumber_gt: String

  """All values greater than or equal the given value."""
  phoneNumber_gte: String

  """All values containing the given string."""
  phoneNumber_contains: String

  """All values not containing the given string."""
  phoneNumber_not_contains: String

  """All values starting with the given string."""
  phoneNumber_starts_with: String

  """All values not starting with the given string."""
  phoneNumber_not_starts_with: String

  """All values ending with the given string."""
  phoneNumber_ends_with: String

  """All values not ending with the given string."""
  phoneNumber_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  isAdmin: Boolean

  """All values that are not equal to given value."""
  isAdmin_not: Boolean
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  name: String
  lastName: String
  phoneNumber: String
  password: String
  isAdmin: Boolean
  permissions: UserUpdatepermissionsInput
  notifications: NotificationsUpdateOneRequiredInput
  client: ClientUpdateOneRequiredWithoutUsersInput
  sales: SaleUpdateManyWithoutSoldByInput
}

input UserUpdateInput {
  name: String
  lastName: String
  phoneNumber: String
  password: String
  isAdmin: Boolean
  permissions: UserUpdatepermissionsInput
  notifications: NotificationsUpdateOneRequiredInput
  client: ClientUpdateOneRequiredWithoutUsersInput
  sales: SaleUpdateManyWithoutSoldByInput
}

input UserUpdateManyDataInput {
  name: String
  lastName: String
  phoneNumber: String
  password: String
  isAdmin: Boolean
  permissions: UserUpdatepermissionsInput
}

input UserUpdateManyMutationInput {
  name: String
  lastName: String
  phoneNumber: String
  password: String
  isAdmin: Boolean
  permissions: UserUpdatepermissionsInput
}

input UserUpdateManyWithoutClientInput {
  create: [UserCreateWithoutClientInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutClientInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
  deleteMany: [UserScalarWhereInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutClientInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneRequiredWithoutSalesInput {
  create: UserCreateWithoutSalesInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutSalesDataInput
  upsert: UserUpsertWithoutSalesInput
}

input UserUpdatepermissionsInput {
  set: [UserPermissions!]
}

input UserUpdateWithoutClientDataInput {
  name: String
  lastName: String
  phoneNumber: String
  password: String
  isAdmin: Boolean
  permissions: UserUpdatepermissionsInput
  notifications: NotificationsUpdateOneRequiredInput
  sales: SaleUpdateManyWithoutSoldByInput
}

input UserUpdateWithoutSalesDataInput {
  name: String
  lastName: String
  phoneNumber: String
  password: String
  isAdmin: Boolean
  permissions: UserUpdatepermissionsInput
  notifications: NotificationsUpdateOneRequiredInput
  client: ClientUpdateOneRequiredWithoutUsersInput
}

input UserUpdateWithWhereUniqueWithoutClientInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutClientDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutSalesInput {
  update: UserUpdateWithoutSalesDataInput!
  create: UserCreateWithoutSalesInput!
}

input UserUpsertWithWhereUniqueWithoutClientInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutClientDataInput!
  create: UserCreateWithoutClientInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  phoneNumber: String

  """All values that are not equal to given value."""
  phoneNumber_not: String

  """All values that are contained in given list."""
  phoneNumber_in: [String!]

  """All values that are not contained in given list."""
  phoneNumber_not_in: [String!]

  """All values less than the given value."""
  phoneNumber_lt: String

  """All values less than or equal the given value."""
  phoneNumber_lte: String

  """All values greater than the given value."""
  phoneNumber_gt: String

  """All values greater than or equal the given value."""
  phoneNumber_gte: String

  """All values containing the given string."""
  phoneNumber_contains: String

  """All values not containing the given string."""
  phoneNumber_not_contains: String

  """All values starting with the given string."""
  phoneNumber_starts_with: String

  """All values not starting with the given string."""
  phoneNumber_not_starts_with: String

  """All values ending with the given string."""
  phoneNumber_ends_with: String

  """All values not ending with the given string."""
  phoneNumber_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  isAdmin: Boolean

  """All values that are not equal to given value."""
  isAdmin_not: Boolean
  notifications: NotificationsWhereInput
  client: ClientWhereInput
  sales_every: SaleWhereInput
  sales_some: SaleWhereInput
  sales_none: SaleWhereInput
}

input UserWhereUniqueInput {
  id: ID
  phoneNumber: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type CartProductOrderByInput =   'id_ASC' |
  'id_DESC' |
  'productId_ASC' |
  'productId_DESC' |
  'name_ASC' |
  'name_DESC' |
  'price_ASC' |
  'price_DESC' |
  'quantitySold_ASC' |
  'quantitySold_DESC'

export type ClientOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'email_ASC' |
  'email_DESC' |
  'phoneNumber_ASC' |
  'phoneNumber_DESC'

export type LogOrderByInput =   'id_ASC' |
  'id_DESC' |
  'message_ASC' |
  'message_DESC' |
  'type_ASC' |
  'type_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LogType =   'ERROR'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type NotificationsOrderByInput =   'id_ASC' |
  'id_DESC' |
  'fireWhen_ASC' |
  'fireWhen_DESC'

export type ProductOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'price_ASC' |
  'price_DESC' |
  'notifications_ASC' |
  'notifications_DESC' |
  'quantity_ASC' |
  'quantity_DESC' |
  'barCodeData_ASC' |
  'barCodeData_DESC'

export type SaleOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type ServiceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'price_ASC' |
  'price_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'phoneNumber_ASC' |
  'phoneNumber_DESC' |
  'password_ASC' |
  'password_DESC' |
  'isAdmin_ASC' |
  'isAdmin_DESC'

export type UserPermissions =   'CREATE_PRODUCTS' |
  'UPDATE_PRODUCTS' |
  'DELETE_PRODUCTS' |
  'CREATE_SALES' |
  'DELETE_SALES'

export interface CartProductCreateInput {
  id?: ID_Input | null
  productId: ID_Output
  name: String
  price: Float
  quantitySold: Int
}

export interface CartProductCreateManyInput {
  create?: CartProductCreateInput[] | CartProductCreateInput | null
  connect?: CartProductWhereUniqueInput[] | CartProductWhereUniqueInput | null
}

export interface CartProductScalarWhereInput {
  AND?: CartProductScalarWhereInput[] | CartProductScalarWhereInput | null
  OR?: CartProductScalarWhereInput[] | CartProductScalarWhereInput | null
  NOT?: CartProductScalarWhereInput[] | CartProductScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  productId?: ID_Input | null
  productId_not?: ID_Input | null
  productId_in?: ID_Output[] | ID_Output | null
  productId_not_in?: ID_Output[] | ID_Output | null
  productId_lt?: ID_Input | null
  productId_lte?: ID_Input | null
  productId_gt?: ID_Input | null
  productId_gte?: ID_Input | null
  productId_contains?: ID_Input | null
  productId_not_contains?: ID_Input | null
  productId_starts_with?: ID_Input | null
  productId_not_starts_with?: ID_Input | null
  productId_ends_with?: ID_Input | null
  productId_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  price?: Float | null
  price_not?: Float | null
  price_in?: Float[] | Float | null
  price_not_in?: Float[] | Float | null
  price_lt?: Float | null
  price_lte?: Float | null
  price_gt?: Float | null
  price_gte?: Float | null
  quantitySold?: Int | null
  quantitySold_not?: Int | null
  quantitySold_in?: Int[] | Int | null
  quantitySold_not_in?: Int[] | Int | null
  quantitySold_lt?: Int | null
  quantitySold_lte?: Int | null
  quantitySold_gt?: Int | null
  quantitySold_gte?: Int | null
}

export interface CartProductSubscriptionWhereInput {
  AND?: CartProductSubscriptionWhereInput[] | CartProductSubscriptionWhereInput | null
  OR?: CartProductSubscriptionWhereInput[] | CartProductSubscriptionWhereInput | null
  NOT?: CartProductSubscriptionWhereInput[] | CartProductSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: CartProductWhereInput | null
}

export interface CartProductUpdateDataInput {
  productId?: ID_Input | null
  name?: String | null
  price?: Float | null
  quantitySold?: Int | null
}

export interface CartProductUpdateInput {
  productId?: ID_Input | null
  name?: String | null
  price?: Float | null
  quantitySold?: Int | null
}

export interface CartProductUpdateManyDataInput {
  productId?: ID_Input | null
  name?: String | null
  price?: Float | null
  quantitySold?: Int | null
}

export interface CartProductUpdateManyInput {
  create?: CartProductCreateInput[] | CartProductCreateInput | null
  connect?: CartProductWhereUniqueInput[] | CartProductWhereUniqueInput | null
  set?: CartProductWhereUniqueInput[] | CartProductWhereUniqueInput | null
  disconnect?: CartProductWhereUniqueInput[] | CartProductWhereUniqueInput | null
  delete?: CartProductWhereUniqueInput[] | CartProductWhereUniqueInput | null
  update?: CartProductUpdateWithWhereUniqueNestedInput[] | CartProductUpdateWithWhereUniqueNestedInput | null
  updateMany?: CartProductUpdateManyWithWhereNestedInput[] | CartProductUpdateManyWithWhereNestedInput | null
  deleteMany?: CartProductScalarWhereInput[] | CartProductScalarWhereInput | null
  upsert?: CartProductUpsertWithWhereUniqueNestedInput[] | CartProductUpsertWithWhereUniqueNestedInput | null
}

export interface CartProductUpdateManyMutationInput {
  productId?: ID_Input | null
  name?: String | null
  price?: Float | null
  quantitySold?: Int | null
}

export interface CartProductUpdateManyWithWhereNestedInput {
  where: CartProductScalarWhereInput
  data: CartProductUpdateManyDataInput
}

export interface CartProductUpdateWithWhereUniqueNestedInput {
  where: CartProductWhereUniqueInput
  data: CartProductUpdateDataInput
}

export interface CartProductUpsertWithWhereUniqueNestedInput {
  where: CartProductWhereUniqueInput
  update: CartProductUpdateDataInput
  create: CartProductCreateInput
}

export interface CartProductWhereInput {
  AND?: CartProductWhereInput[] | CartProductWhereInput | null
  OR?: CartProductWhereInput[] | CartProductWhereInput | null
  NOT?: CartProductWhereInput[] | CartProductWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  productId?: ID_Input | null
  productId_not?: ID_Input | null
  productId_in?: ID_Output[] | ID_Output | null
  productId_not_in?: ID_Output[] | ID_Output | null
  productId_lt?: ID_Input | null
  productId_lte?: ID_Input | null
  productId_gt?: ID_Input | null
  productId_gte?: ID_Input | null
  productId_contains?: ID_Input | null
  productId_not_contains?: ID_Input | null
  productId_starts_with?: ID_Input | null
  productId_not_starts_with?: ID_Input | null
  productId_ends_with?: ID_Input | null
  productId_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  price?: Float | null
  price_not?: Float | null
  price_in?: Float[] | Float | null
  price_not_in?: Float[] | Float | null
  price_lt?: Float | null
  price_lte?: Float | null
  price_gt?: Float | null
  price_gte?: Float | null
  quantitySold?: Int | null
  quantitySold_not?: Int | null
  quantitySold_in?: Int[] | Int | null
  quantitySold_not_in?: Int[] | Int | null
  quantitySold_lt?: Int | null
  quantitySold_lte?: Int | null
  quantitySold_gt?: Int | null
  quantitySold_gte?: Int | null
}

export interface CartProductWhereUniqueInput {
  id?: ID_Input | null
}

export interface ClientCreateInput {
  id?: ID_Input | null
  name: String
  lastName?: String | null
  email?: String | null
  phoneNumber: String
  users?: UserCreateManyWithoutClientInput | null
  products?: ProductCreateManyWithoutClientInput | null
  sales?: SaleCreateManyWithoutClientInput | null
  logs?: LogCreateManyWithoutClientInput | null
}

export interface ClientCreateOneInput {
  create?: ClientCreateInput | null
  connect?: ClientWhereUniqueInput | null
}

export interface ClientCreateOneWithoutLogsInput {
  create?: ClientCreateWithoutLogsInput | null
  connect?: ClientWhereUniqueInput | null
}

export interface ClientCreateOneWithoutProductsInput {
  create?: ClientCreateWithoutProductsInput | null
  connect?: ClientWhereUniqueInput | null
}

export interface ClientCreateOneWithoutSalesInput {
  create?: ClientCreateWithoutSalesInput | null
  connect?: ClientWhereUniqueInput | null
}

export interface ClientCreateOneWithoutUsersInput {
  create?: ClientCreateWithoutUsersInput | null
  connect?: ClientWhereUniqueInput | null
}

export interface ClientCreateWithoutLogsInput {
  id?: ID_Input | null
  name: String
  lastName?: String | null
  email?: String | null
  phoneNumber: String
  users?: UserCreateManyWithoutClientInput | null
  products?: ProductCreateManyWithoutClientInput | null
  sales?: SaleCreateManyWithoutClientInput | null
}

export interface ClientCreateWithoutProductsInput {
  id?: ID_Input | null
  name: String
  lastName?: String | null
  email?: String | null
  phoneNumber: String
  users?: UserCreateManyWithoutClientInput | null
  sales?: SaleCreateManyWithoutClientInput | null
  logs?: LogCreateManyWithoutClientInput | null
}

export interface ClientCreateWithoutSalesInput {
  id?: ID_Input | null
  name: String
  lastName?: String | null
  email?: String | null
  phoneNumber: String
  users?: UserCreateManyWithoutClientInput | null
  products?: ProductCreateManyWithoutClientInput | null
  logs?: LogCreateManyWithoutClientInput | null
}

export interface ClientCreateWithoutUsersInput {
  id?: ID_Input | null
  name: String
  lastName?: String | null
  email?: String | null
  phoneNumber: String
  products?: ProductCreateManyWithoutClientInput | null
  sales?: SaleCreateManyWithoutClientInput | null
  logs?: LogCreateManyWithoutClientInput | null
}

export interface ClientSubscriptionWhereInput {
  AND?: ClientSubscriptionWhereInput[] | ClientSubscriptionWhereInput | null
  OR?: ClientSubscriptionWhereInput[] | ClientSubscriptionWhereInput | null
  NOT?: ClientSubscriptionWhereInput[] | ClientSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ClientWhereInput | null
}

export interface ClientUpdateDataInput {
  name?: String | null
  lastName?: String | null
  email?: String | null
  phoneNumber?: String | null
  users?: UserUpdateManyWithoutClientInput | null
  products?: ProductUpdateManyWithoutClientInput | null
  sales?: SaleUpdateManyWithoutClientInput | null
  logs?: LogUpdateManyWithoutClientInput | null
}

export interface ClientUpdateInput {
  name?: String | null
  lastName?: String | null
  email?: String | null
  phoneNumber?: String | null
  users?: UserUpdateManyWithoutClientInput | null
  products?: ProductUpdateManyWithoutClientInput | null
  sales?: SaleUpdateManyWithoutClientInput | null
  logs?: LogUpdateManyWithoutClientInput | null
}

export interface ClientUpdateManyMutationInput {
  name?: String | null
  lastName?: String | null
  email?: String | null
  phoneNumber?: String | null
}

export interface ClientUpdateOneRequiredInput {
  create?: ClientCreateInput | null
  connect?: ClientWhereUniqueInput | null
  update?: ClientUpdateDataInput | null
  upsert?: ClientUpsertNestedInput | null
}

export interface ClientUpdateOneRequiredWithoutLogsInput {
  create?: ClientCreateWithoutLogsInput | null
  connect?: ClientWhereUniqueInput | null
  update?: ClientUpdateWithoutLogsDataInput | null
  upsert?: ClientUpsertWithoutLogsInput | null
}

export interface ClientUpdateOneRequiredWithoutProductsInput {
  create?: ClientCreateWithoutProductsInput | null
  connect?: ClientWhereUniqueInput | null
  update?: ClientUpdateWithoutProductsDataInput | null
  upsert?: ClientUpsertWithoutProductsInput | null
}

export interface ClientUpdateOneRequiredWithoutSalesInput {
  create?: ClientCreateWithoutSalesInput | null
  connect?: ClientWhereUniqueInput | null
  update?: ClientUpdateWithoutSalesDataInput | null
  upsert?: ClientUpsertWithoutSalesInput | null
}

export interface ClientUpdateOneRequiredWithoutUsersInput {
  create?: ClientCreateWithoutUsersInput | null
  connect?: ClientWhereUniqueInput | null
  update?: ClientUpdateWithoutUsersDataInput | null
  upsert?: ClientUpsertWithoutUsersInput | null
}

export interface ClientUpdateWithoutLogsDataInput {
  name?: String | null
  lastName?: String | null
  email?: String | null
  phoneNumber?: String | null
  users?: UserUpdateManyWithoutClientInput | null
  products?: ProductUpdateManyWithoutClientInput | null
  sales?: SaleUpdateManyWithoutClientInput | null
}

export interface ClientUpdateWithoutProductsDataInput {
  name?: String | null
  lastName?: String | null
  email?: String | null
  phoneNumber?: String | null
  users?: UserUpdateManyWithoutClientInput | null
  sales?: SaleUpdateManyWithoutClientInput | null
  logs?: LogUpdateManyWithoutClientInput | null
}

export interface ClientUpdateWithoutSalesDataInput {
  name?: String | null
  lastName?: String | null
  email?: String | null
  phoneNumber?: String | null
  users?: UserUpdateManyWithoutClientInput | null
  products?: ProductUpdateManyWithoutClientInput | null
  logs?: LogUpdateManyWithoutClientInput | null
}

export interface ClientUpdateWithoutUsersDataInput {
  name?: String | null
  lastName?: String | null
  email?: String | null
  phoneNumber?: String | null
  products?: ProductUpdateManyWithoutClientInput | null
  sales?: SaleUpdateManyWithoutClientInput | null
  logs?: LogUpdateManyWithoutClientInput | null
}

export interface ClientUpsertNestedInput {
  update: ClientUpdateDataInput
  create: ClientCreateInput
}

export interface ClientUpsertWithoutLogsInput {
  update: ClientUpdateWithoutLogsDataInput
  create: ClientCreateWithoutLogsInput
}

export interface ClientUpsertWithoutProductsInput {
  update: ClientUpdateWithoutProductsDataInput
  create: ClientCreateWithoutProductsInput
}

export interface ClientUpsertWithoutSalesInput {
  update: ClientUpdateWithoutSalesDataInput
  create: ClientCreateWithoutSalesInput
}

export interface ClientUpsertWithoutUsersInput {
  update: ClientUpdateWithoutUsersDataInput
  create: ClientCreateWithoutUsersInput
}

export interface ClientWhereInput {
  AND?: ClientWhereInput[] | ClientWhereInput | null
  OR?: ClientWhereInput[] | ClientWhereInput | null
  NOT?: ClientWhereInput[] | ClientWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  lastName?: String | null
  lastName_not?: String | null
  lastName_in?: String[] | String | null
  lastName_not_in?: String[] | String | null
  lastName_lt?: String | null
  lastName_lte?: String | null
  lastName_gt?: String | null
  lastName_gte?: String | null
  lastName_contains?: String | null
  lastName_not_contains?: String | null
  lastName_starts_with?: String | null
  lastName_not_starts_with?: String | null
  lastName_ends_with?: String | null
  lastName_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  phoneNumber?: String | null
  phoneNumber_not?: String | null
  phoneNumber_in?: String[] | String | null
  phoneNumber_not_in?: String[] | String | null
  phoneNumber_lt?: String | null
  phoneNumber_lte?: String | null
  phoneNumber_gt?: String | null
  phoneNumber_gte?: String | null
  phoneNumber_contains?: String | null
  phoneNumber_not_contains?: String | null
  phoneNumber_starts_with?: String | null
  phoneNumber_not_starts_with?: String | null
  phoneNumber_ends_with?: String | null
  phoneNumber_not_ends_with?: String | null
  users_every?: UserWhereInput | null
  users_some?: UserWhereInput | null
  users_none?: UserWhereInput | null
  products_every?: ProductWhereInput | null
  products_some?: ProductWhereInput | null
  products_none?: ProductWhereInput | null
  sales_every?: SaleWhereInput | null
  sales_some?: SaleWhereInput | null
  sales_none?: SaleWhereInput | null
  logs_every?: LogWhereInput | null
  logs_some?: LogWhereInput | null
  logs_none?: LogWhereInput | null
}

export interface ClientWhereUniqueInput {
  id?: ID_Input | null
  email?: String | null
  phoneNumber?: String | null
}

export interface LogCreateInput {
  id?: ID_Input | null
  message: String
  type: LogType
  user: UserCreateOneInput
  client: ClientCreateOneWithoutLogsInput
}

export interface LogCreateManyWithoutClientInput {
  create?: LogCreateWithoutClientInput[] | LogCreateWithoutClientInput | null
  connect?: LogWhereUniqueInput[] | LogWhereUniqueInput | null
}

export interface LogCreateWithoutClientInput {
  id?: ID_Input | null
  message: String
  type: LogType
  user: UserCreateOneInput
}

export interface LogScalarWhereInput {
  AND?: LogScalarWhereInput[] | LogScalarWhereInput | null
  OR?: LogScalarWhereInput[] | LogScalarWhereInput | null
  NOT?: LogScalarWhereInput[] | LogScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  message?: String | null
  message_not?: String | null
  message_in?: String[] | String | null
  message_not_in?: String[] | String | null
  message_lt?: String | null
  message_lte?: String | null
  message_gt?: String | null
  message_gte?: String | null
  message_contains?: String | null
  message_not_contains?: String | null
  message_starts_with?: String | null
  message_not_starts_with?: String | null
  message_ends_with?: String | null
  message_not_ends_with?: String | null
  type?: LogType | null
  type_not?: LogType | null
  type_in?: LogType[] | LogType | null
  type_not_in?: LogType[] | LogType | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
}

export interface LogSubscriptionWhereInput {
  AND?: LogSubscriptionWhereInput[] | LogSubscriptionWhereInput | null
  OR?: LogSubscriptionWhereInput[] | LogSubscriptionWhereInput | null
  NOT?: LogSubscriptionWhereInput[] | LogSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: LogWhereInput | null
}

export interface LogUpdateInput {
  message?: String | null
  type?: LogType | null
  user?: UserUpdateOneRequiredInput | null
  client?: ClientUpdateOneRequiredWithoutLogsInput | null
}

export interface LogUpdateManyDataInput {
  message?: String | null
  type?: LogType | null
}

export interface LogUpdateManyMutationInput {
  message?: String | null
  type?: LogType | null
}

export interface LogUpdateManyWithoutClientInput {
  create?: LogCreateWithoutClientInput[] | LogCreateWithoutClientInput | null
  connect?: LogWhereUniqueInput[] | LogWhereUniqueInput | null
  set?: LogWhereUniqueInput[] | LogWhereUniqueInput | null
  disconnect?: LogWhereUniqueInput[] | LogWhereUniqueInput | null
  delete?: LogWhereUniqueInput[] | LogWhereUniqueInput | null
  update?: LogUpdateWithWhereUniqueWithoutClientInput[] | LogUpdateWithWhereUniqueWithoutClientInput | null
  updateMany?: LogUpdateManyWithWhereNestedInput[] | LogUpdateManyWithWhereNestedInput | null
  deleteMany?: LogScalarWhereInput[] | LogScalarWhereInput | null
  upsert?: LogUpsertWithWhereUniqueWithoutClientInput[] | LogUpsertWithWhereUniqueWithoutClientInput | null
}

export interface LogUpdateManyWithWhereNestedInput {
  where: LogScalarWhereInput
  data: LogUpdateManyDataInput
}

export interface LogUpdateWithoutClientDataInput {
  message?: String | null
  type?: LogType | null
  user?: UserUpdateOneRequiredInput | null
}

export interface LogUpdateWithWhereUniqueWithoutClientInput {
  where: LogWhereUniqueInput
  data: LogUpdateWithoutClientDataInput
}

export interface LogUpsertWithWhereUniqueWithoutClientInput {
  where: LogWhereUniqueInput
  update: LogUpdateWithoutClientDataInput
  create: LogCreateWithoutClientInput
}

export interface LogWhereInput {
  AND?: LogWhereInput[] | LogWhereInput | null
  OR?: LogWhereInput[] | LogWhereInput | null
  NOT?: LogWhereInput[] | LogWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  message?: String | null
  message_not?: String | null
  message_in?: String[] | String | null
  message_not_in?: String[] | String | null
  message_lt?: String | null
  message_lte?: String | null
  message_gt?: String | null
  message_gte?: String | null
  message_contains?: String | null
  message_not_contains?: String | null
  message_starts_with?: String | null
  message_not_starts_with?: String | null
  message_ends_with?: String | null
  message_not_ends_with?: String | null
  type?: LogType | null
  type_not?: LogType | null
  type_in?: LogType[] | LogType | null
  type_not_in?: LogType[] | LogType | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  user?: UserWhereInput | null
  client?: ClientWhereInput | null
}

export interface LogWhereUniqueInput {
  id?: ID_Input | null
}

export interface NotificationsCreatedevicesInput {
  set?: String[] | String | null
}

export interface NotificationsCreateInput {
  id?: ID_Input | null
  fireWhen?: Int | null
  devices?: NotificationsCreatedevicesInput | null
}

export interface NotificationsCreateOneInput {
  create?: NotificationsCreateInput | null
  connect?: NotificationsWhereUniqueInput | null
}

export interface NotificationsSubscriptionWhereInput {
  AND?: NotificationsSubscriptionWhereInput[] | NotificationsSubscriptionWhereInput | null
  OR?: NotificationsSubscriptionWhereInput[] | NotificationsSubscriptionWhereInput | null
  NOT?: NotificationsSubscriptionWhereInput[] | NotificationsSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: NotificationsWhereInput | null
}

export interface NotificationsUpdateDataInput {
  fireWhen?: Int | null
  devices?: NotificationsUpdatedevicesInput | null
}

export interface NotificationsUpdatedevicesInput {
  set?: String[] | String | null
}

export interface NotificationsUpdateInput {
  fireWhen?: Int | null
  devices?: NotificationsUpdatedevicesInput | null
}

export interface NotificationsUpdateManyMutationInput {
  fireWhen?: Int | null
  devices?: NotificationsUpdatedevicesInput | null
}

export interface NotificationsUpdateOneRequiredInput {
  create?: NotificationsCreateInput | null
  connect?: NotificationsWhereUniqueInput | null
  update?: NotificationsUpdateDataInput | null
  upsert?: NotificationsUpsertNestedInput | null
}

export interface NotificationsUpsertNestedInput {
  update: NotificationsUpdateDataInput
  create: NotificationsCreateInput
}

export interface NotificationsWhereInput {
  AND?: NotificationsWhereInput[] | NotificationsWhereInput | null
  OR?: NotificationsWhereInput[] | NotificationsWhereInput | null
  NOT?: NotificationsWhereInput[] | NotificationsWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  fireWhen?: Int | null
  fireWhen_not?: Int | null
  fireWhen_in?: Int[] | Int | null
  fireWhen_not_in?: Int[] | Int | null
  fireWhen_lt?: Int | null
  fireWhen_lte?: Int | null
  fireWhen_gt?: Int | null
  fireWhen_gte?: Int | null
}

export interface NotificationsWhereUniqueInput {
  id?: ID_Input | null
}

export interface ProductCreateInput {
  id?: ID_Input | null
  name: String
  price: Float
  notifications: Boolean
  quantity: Int
  barCodeData?: String | null
  user: UserCreateOneInput
  client: ClientCreateOneWithoutProductsInput
}

export interface ProductCreateManyWithoutClientInput {
  create?: ProductCreateWithoutClientInput[] | ProductCreateWithoutClientInput | null
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput | null
}

export interface ProductCreateWithoutClientInput {
  id?: ID_Input | null
  name: String
  price: Float
  notifications: Boolean
  quantity: Int
  barCodeData?: String | null
  user: UserCreateOneInput
}

export interface ProductScalarWhereInput {
  AND?: ProductScalarWhereInput[] | ProductScalarWhereInput | null
  OR?: ProductScalarWhereInput[] | ProductScalarWhereInput | null
  NOT?: ProductScalarWhereInput[] | ProductScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  price?: Float | null
  price_not?: Float | null
  price_in?: Float[] | Float | null
  price_not_in?: Float[] | Float | null
  price_lt?: Float | null
  price_lte?: Float | null
  price_gt?: Float | null
  price_gte?: Float | null
  notifications?: Boolean | null
  notifications_not?: Boolean | null
  quantity?: Int | null
  quantity_not?: Int | null
  quantity_in?: Int[] | Int | null
  quantity_not_in?: Int[] | Int | null
  quantity_lt?: Int | null
  quantity_lte?: Int | null
  quantity_gt?: Int | null
  quantity_gte?: Int | null
  barCodeData?: String | null
  barCodeData_not?: String | null
  barCodeData_in?: String[] | String | null
  barCodeData_not_in?: String[] | String | null
  barCodeData_lt?: String | null
  barCodeData_lte?: String | null
  barCodeData_gt?: String | null
  barCodeData_gte?: String | null
  barCodeData_contains?: String | null
  barCodeData_not_contains?: String | null
  barCodeData_starts_with?: String | null
  barCodeData_not_starts_with?: String | null
  barCodeData_ends_with?: String | null
  barCodeData_not_ends_with?: String | null
}

export interface ProductSubscriptionWhereInput {
  AND?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput | null
  OR?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput | null
  NOT?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ProductWhereInput | null
}

export interface ProductUpdateInput {
  name?: String | null
  price?: Float | null
  notifications?: Boolean | null
  quantity?: Int | null
  barCodeData?: String | null
  user?: UserUpdateOneRequiredInput | null
  client?: ClientUpdateOneRequiredWithoutProductsInput | null
}

export interface ProductUpdateManyDataInput {
  name?: String | null
  price?: Float | null
  notifications?: Boolean | null
  quantity?: Int | null
  barCodeData?: String | null
}

export interface ProductUpdateManyMutationInput {
  name?: String | null
  price?: Float | null
  notifications?: Boolean | null
  quantity?: Int | null
  barCodeData?: String | null
}

export interface ProductUpdateManyWithoutClientInput {
  create?: ProductCreateWithoutClientInput[] | ProductCreateWithoutClientInput | null
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput | null
  set?: ProductWhereUniqueInput[] | ProductWhereUniqueInput | null
  disconnect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput | null
  delete?: ProductWhereUniqueInput[] | ProductWhereUniqueInput | null
  update?: ProductUpdateWithWhereUniqueWithoutClientInput[] | ProductUpdateWithWhereUniqueWithoutClientInput | null
  updateMany?: ProductUpdateManyWithWhereNestedInput[] | ProductUpdateManyWithWhereNestedInput | null
  deleteMany?: ProductScalarWhereInput[] | ProductScalarWhereInput | null
  upsert?: ProductUpsertWithWhereUniqueWithoutClientInput[] | ProductUpsertWithWhereUniqueWithoutClientInput | null
}

export interface ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput
  data: ProductUpdateManyDataInput
}

export interface ProductUpdateWithoutClientDataInput {
  name?: String | null
  price?: Float | null
  notifications?: Boolean | null
  quantity?: Int | null
  barCodeData?: String | null
  user?: UserUpdateOneRequiredInput | null
}

export interface ProductUpdateWithWhereUniqueWithoutClientInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateWithoutClientDataInput
}

export interface ProductUpsertWithWhereUniqueWithoutClientInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateWithoutClientDataInput
  create: ProductCreateWithoutClientInput
}

export interface ProductWhereInput {
  AND?: ProductWhereInput[] | ProductWhereInput | null
  OR?: ProductWhereInput[] | ProductWhereInput | null
  NOT?: ProductWhereInput[] | ProductWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  price?: Float | null
  price_not?: Float | null
  price_in?: Float[] | Float | null
  price_not_in?: Float[] | Float | null
  price_lt?: Float | null
  price_lte?: Float | null
  price_gt?: Float | null
  price_gte?: Float | null
  notifications?: Boolean | null
  notifications_not?: Boolean | null
  quantity?: Int | null
  quantity_not?: Int | null
  quantity_in?: Int[] | Int | null
  quantity_not_in?: Int[] | Int | null
  quantity_lt?: Int | null
  quantity_lte?: Int | null
  quantity_gt?: Int | null
  quantity_gte?: Int | null
  barCodeData?: String | null
  barCodeData_not?: String | null
  barCodeData_in?: String[] | String | null
  barCodeData_not_in?: String[] | String | null
  barCodeData_lt?: String | null
  barCodeData_lte?: String | null
  barCodeData_gt?: String | null
  barCodeData_gte?: String | null
  barCodeData_contains?: String | null
  barCodeData_not_contains?: String | null
  barCodeData_starts_with?: String | null
  barCodeData_not_starts_with?: String | null
  barCodeData_ends_with?: String | null
  barCodeData_not_ends_with?: String | null
  user?: UserWhereInput | null
  client?: ClientWhereInput | null
}

export interface ProductWhereUniqueInput {
  id?: ID_Input | null
}

export interface SaleCreateInput {
  id?: ID_Input | null
  products?: CartProductCreateManyInput | null
  soldBy: UserCreateOneWithoutSalesInput
  client: ClientCreateOneWithoutSalesInput
}

export interface SaleCreateManyWithoutClientInput {
  create?: SaleCreateWithoutClientInput[] | SaleCreateWithoutClientInput | null
  connect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput | null
}

export interface SaleCreateManyWithoutSoldByInput {
  create?: SaleCreateWithoutSoldByInput[] | SaleCreateWithoutSoldByInput | null
  connect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput | null
}

export interface SaleCreateWithoutClientInput {
  id?: ID_Input | null
  products?: CartProductCreateManyInput | null
  soldBy: UserCreateOneWithoutSalesInput
}

export interface SaleCreateWithoutSoldByInput {
  id?: ID_Input | null
  products?: CartProductCreateManyInput | null
  client: ClientCreateOneWithoutSalesInput
}

export interface SaleScalarWhereInput {
  AND?: SaleScalarWhereInput[] | SaleScalarWhereInput | null
  OR?: SaleScalarWhereInput[] | SaleScalarWhereInput | null
  NOT?: SaleScalarWhereInput[] | SaleScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface SaleSubscriptionWhereInput {
  AND?: SaleSubscriptionWhereInput[] | SaleSubscriptionWhereInput | null
  OR?: SaleSubscriptionWhereInput[] | SaleSubscriptionWhereInput | null
  NOT?: SaleSubscriptionWhereInput[] | SaleSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: SaleWhereInput | null
}

export interface SaleUpdateInput {
  products?: CartProductUpdateManyInput | null
  soldBy?: UserUpdateOneRequiredWithoutSalesInput | null
  client?: ClientUpdateOneRequiredWithoutSalesInput | null
}

export interface SaleUpdateManyWithoutClientInput {
  create?: SaleCreateWithoutClientInput[] | SaleCreateWithoutClientInput | null
  connect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput | null
  set?: SaleWhereUniqueInput[] | SaleWhereUniqueInput | null
  disconnect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput | null
  delete?: SaleWhereUniqueInput[] | SaleWhereUniqueInput | null
  update?: SaleUpdateWithWhereUniqueWithoutClientInput[] | SaleUpdateWithWhereUniqueWithoutClientInput | null
  deleteMany?: SaleScalarWhereInput[] | SaleScalarWhereInput | null
  upsert?: SaleUpsertWithWhereUniqueWithoutClientInput[] | SaleUpsertWithWhereUniqueWithoutClientInput | null
}

export interface SaleUpdateManyWithoutSoldByInput {
  create?: SaleCreateWithoutSoldByInput[] | SaleCreateWithoutSoldByInput | null
  connect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput | null
  set?: SaleWhereUniqueInput[] | SaleWhereUniqueInput | null
  disconnect?: SaleWhereUniqueInput[] | SaleWhereUniqueInput | null
  delete?: SaleWhereUniqueInput[] | SaleWhereUniqueInput | null
  update?: SaleUpdateWithWhereUniqueWithoutSoldByInput[] | SaleUpdateWithWhereUniqueWithoutSoldByInput | null
  deleteMany?: SaleScalarWhereInput[] | SaleScalarWhereInput | null
  upsert?: SaleUpsertWithWhereUniqueWithoutSoldByInput[] | SaleUpsertWithWhereUniqueWithoutSoldByInput | null
}

export interface SaleUpdateWithoutClientDataInput {
  products?: CartProductUpdateManyInput | null
  soldBy?: UserUpdateOneRequiredWithoutSalesInput | null
}

export interface SaleUpdateWithoutSoldByDataInput {
  products?: CartProductUpdateManyInput | null
  client?: ClientUpdateOneRequiredWithoutSalesInput | null
}

export interface SaleUpdateWithWhereUniqueWithoutClientInput {
  where: SaleWhereUniqueInput
  data: SaleUpdateWithoutClientDataInput
}

export interface SaleUpdateWithWhereUniqueWithoutSoldByInput {
  where: SaleWhereUniqueInput
  data: SaleUpdateWithoutSoldByDataInput
}

export interface SaleUpsertWithWhereUniqueWithoutClientInput {
  where: SaleWhereUniqueInput
  update: SaleUpdateWithoutClientDataInput
  create: SaleCreateWithoutClientInput
}

export interface SaleUpsertWithWhereUniqueWithoutSoldByInput {
  where: SaleWhereUniqueInput
  update: SaleUpdateWithoutSoldByDataInput
  create: SaleCreateWithoutSoldByInput
}

export interface SaleWhereInput {
  AND?: SaleWhereInput[] | SaleWhereInput | null
  OR?: SaleWhereInput[] | SaleWhereInput | null
  NOT?: SaleWhereInput[] | SaleWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  products_every?: CartProductWhereInput | null
  products_some?: CartProductWhereInput | null
  products_none?: CartProductWhereInput | null
  soldBy?: UserWhereInput | null
  client?: ClientWhereInput | null
}

export interface SaleWhereUniqueInput {
  id?: ID_Input | null
}

export interface ServiceCreateInput {
  id?: ID_Input | null
  name: String
  price: Float
  user: UserCreateOneInput
  client: ClientCreateOneInput
}

export interface ServiceSubscriptionWhereInput {
  AND?: ServiceSubscriptionWhereInput[] | ServiceSubscriptionWhereInput | null
  OR?: ServiceSubscriptionWhereInput[] | ServiceSubscriptionWhereInput | null
  NOT?: ServiceSubscriptionWhereInput[] | ServiceSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ServiceWhereInput | null
}

export interface ServiceUpdateInput {
  name?: String | null
  price?: Float | null
  user?: UserUpdateOneRequiredInput | null
  client?: ClientUpdateOneRequiredInput | null
}

export interface ServiceUpdateManyMutationInput {
  name?: String | null
  price?: Float | null
}

export interface ServiceWhereInput {
  AND?: ServiceWhereInput[] | ServiceWhereInput | null
  OR?: ServiceWhereInput[] | ServiceWhereInput | null
  NOT?: ServiceWhereInput[] | ServiceWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  price?: Float | null
  price_not?: Float | null
  price_in?: Float[] | Float | null
  price_not_in?: Float[] | Float | null
  price_lt?: Float | null
  price_lte?: Float | null
  price_gt?: Float | null
  price_gte?: Float | null
  user?: UserWhereInput | null
  client?: ClientWhereInput | null
}

export interface ServiceWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserCreateInput {
  id?: ID_Input | null
  name: String
  lastName?: String | null
  phoneNumber: String
  password: String
  isAdmin?: Boolean | null
  permissions?: UserCreatepermissionsInput | null
  notifications: NotificationsCreateOneInput
  client: ClientCreateOneWithoutUsersInput
  sales?: SaleCreateManyWithoutSoldByInput | null
}

export interface UserCreateManyWithoutClientInput {
  create?: UserCreateWithoutClientInput[] | UserCreateWithoutClientInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutSalesInput {
  create?: UserCreateWithoutSalesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreatepermissionsInput {
  set?: UserPermissions[] | UserPermissions | null
}

export interface UserCreateWithoutClientInput {
  id?: ID_Input | null
  name: String
  lastName?: String | null
  phoneNumber: String
  password: String
  isAdmin?: Boolean | null
  permissions?: UserCreatepermissionsInput | null
  notifications: NotificationsCreateOneInput
  sales?: SaleCreateManyWithoutSoldByInput | null
}

export interface UserCreateWithoutSalesInput {
  id?: ID_Input | null
  name: String
  lastName?: String | null
  phoneNumber: String
  password: String
  isAdmin?: Boolean | null
  permissions?: UserCreatepermissionsInput | null
  notifications: NotificationsCreateOneInput
  client: ClientCreateOneWithoutUsersInput
}

export interface UserScalarWhereInput {
  AND?: UserScalarWhereInput[] | UserScalarWhereInput | null
  OR?: UserScalarWhereInput[] | UserScalarWhereInput | null
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  lastName?: String | null
  lastName_not?: String | null
  lastName_in?: String[] | String | null
  lastName_not_in?: String[] | String | null
  lastName_lt?: String | null
  lastName_lte?: String | null
  lastName_gt?: String | null
  lastName_gte?: String | null
  lastName_contains?: String | null
  lastName_not_contains?: String | null
  lastName_starts_with?: String | null
  lastName_not_starts_with?: String | null
  lastName_ends_with?: String | null
  lastName_not_ends_with?: String | null
  phoneNumber?: String | null
  phoneNumber_not?: String | null
  phoneNumber_in?: String[] | String | null
  phoneNumber_not_in?: String[] | String | null
  phoneNumber_lt?: String | null
  phoneNumber_lte?: String | null
  phoneNumber_gt?: String | null
  phoneNumber_gte?: String | null
  phoneNumber_contains?: String | null
  phoneNumber_not_contains?: String | null
  phoneNumber_starts_with?: String | null
  phoneNumber_not_starts_with?: String | null
  phoneNumber_ends_with?: String | null
  phoneNumber_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  isAdmin?: Boolean | null
  isAdmin_not?: Boolean | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateDataInput {
  name?: String | null
  lastName?: String | null
  phoneNumber?: String | null
  password?: String | null
  isAdmin?: Boolean | null
  permissions?: UserUpdatepermissionsInput | null
  notifications?: NotificationsUpdateOneRequiredInput | null
  client?: ClientUpdateOneRequiredWithoutUsersInput | null
  sales?: SaleUpdateManyWithoutSoldByInput | null
}

export interface UserUpdateInput {
  name?: String | null
  lastName?: String | null
  phoneNumber?: String | null
  password?: String | null
  isAdmin?: Boolean | null
  permissions?: UserUpdatepermissionsInput | null
  notifications?: NotificationsUpdateOneRequiredInput | null
  client?: ClientUpdateOneRequiredWithoutUsersInput | null
  sales?: SaleUpdateManyWithoutSoldByInput | null
}

export interface UserUpdateManyDataInput {
  name?: String | null
  lastName?: String | null
  phoneNumber?: String | null
  password?: String | null
  isAdmin?: Boolean | null
  permissions?: UserUpdatepermissionsInput | null
}

export interface UserUpdateManyMutationInput {
  name?: String | null
  lastName?: String | null
  phoneNumber?: String | null
  password?: String | null
  isAdmin?: Boolean | null
  permissions?: UserUpdatepermissionsInput | null
}

export interface UserUpdateManyWithoutClientInput {
  create?: UserCreateWithoutClientInput[] | UserCreateWithoutClientInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutClientInput[] | UserUpdateWithWhereUniqueWithoutClientInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutClientInput[] | UserUpsertWithWhereUniqueWithoutClientInput | null
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput
  data: UserUpdateManyDataInput
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateDataInput | null
  upsert?: UserUpsertNestedInput | null
}

export interface UserUpdateOneRequiredWithoutSalesInput {
  create?: UserCreateWithoutSalesInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutSalesDataInput | null
  upsert?: UserUpsertWithoutSalesInput | null
}

export interface UserUpdatepermissionsInput {
  set?: UserPermissions[] | UserPermissions | null
}

export interface UserUpdateWithoutClientDataInput {
  name?: String | null
  lastName?: String | null
  phoneNumber?: String | null
  password?: String | null
  isAdmin?: Boolean | null
  permissions?: UserUpdatepermissionsInput | null
  notifications?: NotificationsUpdateOneRequiredInput | null
  sales?: SaleUpdateManyWithoutSoldByInput | null
}

export interface UserUpdateWithoutSalesDataInput {
  name?: String | null
  lastName?: String | null
  phoneNumber?: String | null
  password?: String | null
  isAdmin?: Boolean | null
  permissions?: UserUpdatepermissionsInput | null
  notifications?: NotificationsUpdateOneRequiredInput | null
  client?: ClientUpdateOneRequiredWithoutUsersInput | null
}

export interface UserUpdateWithWhereUniqueWithoutClientInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutClientDataInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpsertWithoutSalesInput {
  update: UserUpdateWithoutSalesDataInput
  create: UserCreateWithoutSalesInput
}

export interface UserUpsertWithWhereUniqueWithoutClientInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutClientDataInput
  create: UserCreateWithoutClientInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  lastName?: String | null
  lastName_not?: String | null
  lastName_in?: String[] | String | null
  lastName_not_in?: String[] | String | null
  lastName_lt?: String | null
  lastName_lte?: String | null
  lastName_gt?: String | null
  lastName_gte?: String | null
  lastName_contains?: String | null
  lastName_not_contains?: String | null
  lastName_starts_with?: String | null
  lastName_not_starts_with?: String | null
  lastName_ends_with?: String | null
  lastName_not_ends_with?: String | null
  phoneNumber?: String | null
  phoneNumber_not?: String | null
  phoneNumber_in?: String[] | String | null
  phoneNumber_not_in?: String[] | String | null
  phoneNumber_lt?: String | null
  phoneNumber_lte?: String | null
  phoneNumber_gt?: String | null
  phoneNumber_gte?: String | null
  phoneNumber_contains?: String | null
  phoneNumber_not_contains?: String | null
  phoneNumber_starts_with?: String | null
  phoneNumber_not_starts_with?: String | null
  phoneNumber_ends_with?: String | null
  phoneNumber_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  isAdmin?: Boolean | null
  isAdmin_not?: Boolean | null
  notifications?: NotificationsWhereInput | null
  client?: ClientWhereInput | null
  sales_every?: SaleWhereInput | null
  sales_some?: SaleWhereInput | null
  sales_none?: SaleWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  phoneNumber?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateCartProduct {
  count: Int
}

export interface AggregateClient {
  count: Int
}

export interface AggregateLog {
  count: Int
}

export interface AggregateNotifications {
  count: Int
}

export interface AggregateProduct {
  count: Int
}

export interface AggregateSale {
  count: Int
}

export interface AggregateService {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface CartProduct extends Node {
  id: ID_Output
  productId: ID_Output
  name: String
  price: Float
  quantitySold: Int
}

/*
 * A connection to a list of items.

 */
export interface CartProductConnection {
  pageInfo: PageInfo
  edges: Array<CartProductEdge | null>
  aggregate: AggregateCartProduct
}

/*
 * An edge in a connection.

 */
export interface CartProductEdge {
  node: CartProduct
  cursor: String
}

export interface CartProductPreviousValues {
  id: ID_Output
  productId: ID_Output
  name: String
  price: Float
  quantitySold: Int
}

export interface CartProductSubscriptionPayload {
  mutation: MutationType
  node?: CartProduct | null
  updatedFields?: Array<String> | null
  previousValues?: CartProductPreviousValues | null
}

export interface Client extends Node {
  id: ID_Output
  name: String
  lastName?: String | null
  email?: String | null
  phoneNumber: String
  users?: Array<User> | null
  products?: Array<Product> | null
  sales?: Array<Sale> | null
  logs?: Array<Log> | null
}

/*
 * A connection to a list of items.

 */
export interface ClientConnection {
  pageInfo: PageInfo
  edges: Array<ClientEdge | null>
  aggregate: AggregateClient
}

/*
 * An edge in a connection.

 */
export interface ClientEdge {
  node: Client
  cursor: String
}

export interface ClientPreviousValues {
  id: ID_Output
  name: String
  lastName?: String | null
  email?: String | null
  phoneNumber: String
}

export interface ClientSubscriptionPayload {
  mutation: MutationType
  node?: Client | null
  updatedFields?: Array<String> | null
  previousValues?: ClientPreviousValues | null
}

export interface Log extends Node {
  id: ID_Output
  message: String
  type: LogType
  createdAt: DateTime
  user: User
  client: Client
}

/*
 * A connection to a list of items.

 */
export interface LogConnection {
  pageInfo: PageInfo
  edges: Array<LogEdge | null>
  aggregate: AggregateLog
}

/*
 * An edge in a connection.

 */
export interface LogEdge {
  node: Log
  cursor: String
}

export interface LogPreviousValues {
  id: ID_Output
  message: String
  type: LogType
  createdAt: DateTime
}

export interface LogSubscriptionPayload {
  mutation: MutationType
  node?: Log | null
  updatedFields?: Array<String> | null
  previousValues?: LogPreviousValues | null
}

export interface Notifications extends Node {
  id: ID_Output
  fireWhen: Int
  devices: Array<String>
}

/*
 * A connection to a list of items.

 */
export interface NotificationsConnection {
  pageInfo: PageInfo
  edges: Array<NotificationsEdge | null>
  aggregate: AggregateNotifications
}

/*
 * An edge in a connection.

 */
export interface NotificationsEdge {
  node: Notifications
  cursor: String
}

export interface NotificationsPreviousValues {
  id: ID_Output
  fireWhen: Int
  devices: Array<String>
}

export interface NotificationsSubscriptionPayload {
  mutation: MutationType
  node?: Notifications | null
  updatedFields?: Array<String> | null
  previousValues?: NotificationsPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Product extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  price: Float
  notifications: Boolean
  quantity: Int
  user: User
  barCodeData?: String | null
  client: Client
}

/*
 * A connection to a list of items.

 */
export interface ProductConnection {
  pageInfo: PageInfo
  edges: Array<ProductEdge | null>
  aggregate: AggregateProduct
}

/*
 * An edge in a connection.

 */
export interface ProductEdge {
  node: Product
  cursor: String
}

export interface ProductPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  price: Float
  notifications: Boolean
  quantity: Int
  barCodeData?: String | null
}

export interface ProductSubscriptionPayload {
  mutation: MutationType
  node?: Product | null
  updatedFields?: Array<String> | null
  previousValues?: ProductPreviousValues | null
}

export interface Sale extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  products?: Array<CartProduct> | null
  soldBy: User
  client: Client
}

/*
 * A connection to a list of items.

 */
export interface SaleConnection {
  pageInfo: PageInfo
  edges: Array<SaleEdge | null>
  aggregate: AggregateSale
}

/*
 * An edge in a connection.

 */
export interface SaleEdge {
  node: Sale
  cursor: String
}

export interface SalePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

export interface SaleSubscriptionPayload {
  mutation: MutationType
  node?: Sale | null
  updatedFields?: Array<String> | null
  previousValues?: SalePreviousValues | null
}

export interface Service extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  price: Float
  user: User
  client: Client
}

/*
 * A connection to a list of items.

 */
export interface ServiceConnection {
  pageInfo: PageInfo
  edges: Array<ServiceEdge | null>
  aggregate: AggregateService
}

/*
 * An edge in a connection.

 */
export interface ServiceEdge {
  node: Service
  cursor: String
}

export interface ServicePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  price: Float
}

export interface ServiceSubscriptionPayload {
  mutation: MutationType
  node?: Service | null
  updatedFields?: Array<String> | null
  previousValues?: ServicePreviousValues | null
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  lastName?: String | null
  notifications: Notifications
  phoneNumber: String
  password: String
  permissions: Array<UserPermissions>
  isAdmin: Boolean
  client: Client
  sales?: Array<Sale> | null
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  lastName?: String | null
  phoneNumber: String
  password: String
  permissions: Array<UserPermissions>
  isAdmin: Boolean
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string