import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
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
`;

export const ADD_USER = gql`
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
`;

export const SAVE_BOOK = gql`
mutation SaveBook($input: BookInput) {
  saveBook(input: $input) {
    _id
    username
    email
    savedBooks {
      bookId
      title
      description
      authors
      image
      link
    }
    
  }
}
`;

export const REMOVE_BOOK = gql`
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
`;