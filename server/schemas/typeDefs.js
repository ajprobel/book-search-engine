const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
      _id: ID
      username: String!
      email: String!
      password: String!
      savedBooks: [Book]
    }

    type Book {
      authors: [String]
      description: String
      bookId: String!
      image: String
      link: String
      title: String
    }

    input  BookInput {
      bookId: String
      authors: [String]
      title: String
      description: String
      image: String
      link: String
    }

    type Auth {
      token: ID!
      user: User
    }

    type Query {
      me(username: String, _id: ID): User
    }

    type Mutation {
      createUser(username: String!, email: String!, password: String!): Auth
      login(email: String!, password: String!): Auth
      saveBook(input: BookInput): User
      deleteBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;