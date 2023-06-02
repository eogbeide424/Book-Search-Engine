const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

 input SaveBook {
    bookId: String!
    authors: [String]
    description: String!
    image: String
    link: String
    title: String!
  }
 type Book {
    bookId: String!
    authors: [String]
    description: String!
    image: String
    link: String
    title: String!
  }

  type Query {
  
    user(username: String!): User
    books: [Book]
    book(bookId: ID!): User
    savedBooks(username: String!): [Book]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: SaveBook!): User
    removeBook(bookId: ID!): User
  }
`;
module.exports = typeDefs;