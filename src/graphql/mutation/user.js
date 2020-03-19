import gql from 'graphql-tag'

const USER_LOGIN = gql`
	mutation login($input: LoginUserInput!) {
		login(input: $input) {
			accessToken
		}
	}
`

const CREATE_USER = gql`
	mutation createUser($input: CreateUserInput!) {
		createUser(input: $input)
	}
`

const UPDATE_USER = gql`
	mutation updateUser($id: ID!, $input: UpdateUserInput!) {
		updateUser(_id: $id, input: $input)
	}
`
const DELETE_USER = gql`
	mutation deleteUser($id: ID!) {
		deleteUser(_id: $id)
	}
`
export {USER_LOGIN, CREATE_USER, UPDATE_USER, DELETE_USER}
