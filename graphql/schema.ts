 
// export const typeDefs = `
//   type Link {
//     id: ID
//     title: String
//     description: String
//     url: String
//     category: String
//     imageUrl: String
//     users: [String]
//   }

//   type Query {
//     links: [Link]!
//     link(id: ID!): Link!
//   }
  
// `
import { builder } from "./builder";
import "./types/Link"
import "./types/User"
export const schema = builder.toSchema()