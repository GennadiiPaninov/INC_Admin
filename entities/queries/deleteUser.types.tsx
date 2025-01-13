import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import * as Types from '../types'
const defaultOptions = {} as const

export type DeleteUserByIdMutationVariables = Types.Exact<{
  userId: Types.Scalars['String']['input']
}>

export type DeleteUserByIdMutation = { __typename?: 'Mutation'; deleteUser: boolean }

export const DeleteUserByIdDocument = gql`
  mutation deleteUserById($userId: String!) {
    deleteUser(userId: $userId)
  }
`
export type DeleteUserByIdMutationFn = Apollo.MutationFunction<
  DeleteUserByIdMutation,
  DeleteUserByIdMutationVariables
>

/**
 * __useDeleteUserByIdMutation__
 *
 * To run a mutation, you first call `useDeleteUserByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserByIdMutation, { data, loading, error }] = useDeleteUserByIdMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteUserByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteUserByIdMutation, DeleteUserByIdMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<DeleteUserByIdMutation, DeleteUserByIdMutationVariables>(
    DeleteUserByIdDocument,
    options
  )
}
export type DeleteUserByIdMutationHookResult = ReturnType<typeof useDeleteUserByIdMutation>
export type DeleteUserByIdMutationResult = Apollo.MutationResult<DeleteUserByIdMutation>
export type DeleteUserByIdMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserByIdMutation,
  DeleteUserByIdMutationVariables
>
