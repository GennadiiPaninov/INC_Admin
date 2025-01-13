import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AuthorizeSuperAdminMutationVariables = Types.Exact<{
  authLoginInput: Types.AuthLoginInput;
}>;


export type AuthorizeSuperAdminMutation = { __typename?: 'Mutation', authorizeSuperAdmin: string };


export const AuthorizeSuperAdminDocument = gql`
    mutation authorizeSuperAdmin($authLoginInput: AuthLoginInput!) {
  authorizeSuperAdmin(authLoginInput: $authLoginInput)
}
    `;
export type AuthorizeSuperAdminMutationFn = Apollo.MutationFunction<AuthorizeSuperAdminMutation, AuthorizeSuperAdminMutationVariables>;

/**
 * __useAuthorizeSuperAdminMutation__
 *
 * To run a mutation, you first call `useAuthorizeSuperAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthorizeSuperAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authorizeSuperAdminMutation, { data, loading, error }] = useAuthorizeSuperAdminMutation({
 *   variables: {
 *      authLoginInput: // value for 'authLoginInput'
 *   },
 * });
 */
export function useAuthorizeSuperAdminMutation(baseOptions?: Apollo.MutationHookOptions<AuthorizeSuperAdminMutation, AuthorizeSuperAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthorizeSuperAdminMutation, AuthorizeSuperAdminMutationVariables>(AuthorizeSuperAdminDocument, options);
      }
export type AuthorizeSuperAdminMutationHookResult = ReturnType<typeof useAuthorizeSuperAdminMutation>;
export type AuthorizeSuperAdminMutationResult = Apollo.MutationResult<AuthorizeSuperAdminMutation>;
export type AuthorizeSuperAdminMutationOptions = Apollo.BaseMutationOptions<AuthorizeSuperAdminMutation, AuthorizeSuperAdminMutationVariables>;