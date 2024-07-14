export const LOGIN_USER = `
    mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
        _id
        email
        username
        }
    }
    }
`

export const ADD_USER = `
mutation CreateUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}
`

export const SAVE_BOOK = `
mutation SaveBook($input: BookInput) {
  saveBook(input: $input) {
    _id
    savedBooks {
      bookId
      title
    }
    username
    email
  }
}
`

export const REMOVE_BOOK = `
mutation DeleteBook($bookId: ID!) {
  deleteBook(bookId: $bookId) {
    _id
    username
    savedBooks {
      bookId
      title
    }
  }
}
`