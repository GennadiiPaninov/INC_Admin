export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = { [SubKey in K]?: Maybe<T[SubKey]> } & Omit<T, K>
export type MakeMaybe<T, K extends keyof T> = { [SubKey in K]: Maybe<T[SubKey]> } & Omit<T, K>
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
  | T
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  Boolean: { input: boolean; output: boolean }
  DateTime: { input: any; output: any }
  DateTimeScalar: { input: any; output: any }
  Float: { input: number; output: number }
  ID: { input: string; output: string }
  Int: { input: number; output: number }
  String: { input: string; output: string }
}

export enum AccountType {
  Business = 'BUSINESS',
  Personal = 'PERSONAL',
}

export type AuthLoginInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type BanUserInput = {
  banReason: Scalars['String']['input']
  userId: Scalars['String']['input']
}

export type FileModel = {
  __typename?: 'FileModel'
  authorId: Scalars['String']['output']
  createdAt: Scalars['DateTimeScalar']['output']
  fileType: FileType
  imageId: Scalars['String']['output']
  url: Scalars['String']['output']
}

export enum FileType {
  Avatar = 'Avatar',
  PostImage = 'PostImage',
}

export type Mutation = {
  __typename?: 'Mutation'
  authorizeSuperAdmin: Scalars['String']['output']
  banUser: Scalars['Boolean']['output']
  deleteUser: Scalars['Boolean']['output']
  unbanUser: Scalars['Boolean']['output']
}

export type MutationAuthorizeSuperAdminArgs = {
  authLoginInput: AuthLoginInput
}

export type MutationBanUserArgs = {
  banUserInput: BanUserInput
}

export type MutationDeleteUserArgs = {
  userId: Scalars['String']['input']
}

export type MutationUnbanUserArgs = {
  userId: Scalars['String']['input']
}

export type PaginatedPaymentsModel = {
  __typename?: 'PaginatedPaymentsModel'
  items: Array<SubscriptionPaymentsModel>
  page: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  pagesCount: Scalars['Int']['output']
  totalCount: Scalars['Int']['output']
}

export type PaginatedPostsImagesModel = {
  __typename?: 'PaginatedPostsImagesModel'
  items: Array<FileModel>
  page: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  pagesCount: Scalars['Int']['output']
  totalCount: Scalars['Int']['output']
}

export type PaginatedPostsModel = {
  __typename?: 'PaginatedPostsModel'
  items: Array<PostModel>
  page: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  pagesCount: Scalars['Int']['output']
  totalCount: Scalars['Int']['output']
}

export type PaginatedUserModel = {
  __typename?: 'PaginatedUserModel'
  items: Array<UserModel>
  page: Scalars['Int']['output']
  pageSize: Scalars['Int']['output']
  pagesCount: Scalars['Int']['output']
  totalCount: Scalars['Int']['output']
}

export type PaginationInputPayments = {
  page?: Scalars['Int']['input']
  pageSize?: Scalars['Int']['input']
  sortBy?: Scalars['String']['input']
  sortOrder?: SortDirection
}

export type PaginationInputPaymentsWithSearch = {
  page?: Scalars['Int']['input']
  pageSize?: Scalars['Int']['input']
  search?: InputMaybe<Scalars['String']['input']>
  sortBy?: Scalars['String']['input']
  sortOrder?: SortDirection
}

export type PaginationInputPosts = {
  page?: Scalars['Int']['input']
  pageSize?: Scalars['Int']['input']
  sortBy?: Scalars['String']['input']
  sortOrder?: SortDirection
}

export type PaginationInputUsers = {
  page?: Scalars['Int']['input']
  pageSize?: Scalars['Int']['input']
  search?: InputMaybe<Scalars['String']['input']>
  sortBy?: Scalars['String']['input']
  sortOrder?: SortDirection
  statusFilter?: UserBlockStatus
}

export enum PaymentType {
  Paypal = 'PAYPAL',
  Stripe = 'STRIPE',
}

export type PostModel = {
  __typename?: 'PostModel'
  authorId: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  deletedAt?: Maybe<Scalars['DateTime']['output']>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  imagesData?: Maybe<Array<FileModel>>
  isDeleted: Scalars['Boolean']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type Query = {
  __typename?: 'Query'
  getPayments: PaginatedPaymentsModel
  getPaymentsByUser: PaginatedPaymentsModel
  getPosts?: Maybe<PaginatedPostsModel>
  getPostsImagesByUser: PaginatedPostsImagesModel
  getUser?: Maybe<UserModel>
  getUsers: PaginatedUserModel
  loginSa: Scalars['String']['output']
  sayHello: Scalars['String']['output']
}

export type QueryGetPaymentsArgs = {
  pagination?: InputMaybe<PaginationInputPaymentsWithSearch>
}

export type QueryGetPaymentsByUserArgs = {
  pagination?: InputMaybe<PaginationInputPayments>
  userId: Scalars['String']['input']
}

export type QueryGetPostsArgs = {
  paginationPosts?: InputMaybe<PaginationInputPosts>
}

export type QueryGetPostsImagesByUserArgs = {
  paginationPosts?: InputMaybe<PaginationInputPosts>
  userId: Scalars['String']['input']
}

export type QueryGetUserArgs = {
  id: Scalars['String']['input']
}

export type QueryGetUsersArgs = {
  pagination?: InputMaybe<PaginationInputUsers>
}

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type SubscriptionPaymentsModel = {
  __typename?: 'SubscriptionPaymentsModel'
  amount: Scalars['Float']['output']
  createdAt: Scalars['DateTime']['output']
  currency: Scalars['String']['output']
  endDate: Scalars['DateTime']['output']
  id: Scalars['String']['output']
  paymentMethod: PaymentType
  type: SubscriptionTime
  user?: Maybe<UserModel>
  userId: Scalars['String']['output']
  userName: Scalars['String']['output']
}

export enum SubscriptionTime {
  Day = 'DAY',
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY',
}

export type UserBan = {
  __typename?: 'UserBan'
  createdAt: Scalars['DateTimeScalar']['output']
  reason: Scalars['String']['output']
}

export enum UserBlockStatus {
  All = 'ALL',
  Blocked = 'BLOCKED',
  Unblocked = 'UNBLOCKED',
}

export type UserModel = {
  __typename?: 'UserModel'
  aboutMe?: Maybe<Scalars['String']['output']>
  accountType: AccountType
  autoRenewal: Scalars['Boolean']['output']
  avatarId?: Maybe<Scalars['String']['output']>
  avatarURL?: Maybe<Scalars['String']['output']>
  banInfo?: Maybe<UserBan>
  birthDate?: Maybe<Scalars['String']['output']>
  city?: Maybe<Scalars['String']['output']>
  country?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  email: Scalars['String']['output']
  endDateOfSubscription?: Maybe<Scalars['DateTime']['output']>
  firstName?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  imagesUser?: Maybe<Array<FileModel>>
  isDeleted: Scalars['Boolean']['output']
  lastName?: Maybe<Scalars['String']['output']>
  profileLink?: Maybe<Scalars['String']['output']>
  username: Scalars['String']['output']
}
