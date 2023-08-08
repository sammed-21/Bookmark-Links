// pages/api/graphql.ts

import {  createYoga } from 'graphql-yoga'
import type { NextApiRequest, NextApiResponse } from 'next'
// import { resolvers } from '../../graphql/resolvers'
// import { typeDefs } from '../../graphql/schema'
import { schema } from '../../graphql/schema'
import { createContext } from '../../graphql/context'

export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  // schema: createSchema({
  //   typeDefs,
  //   resolvers
  // }),
  schema,
  context: createContext,
  graphqlEndpoint: '/api/graphql'
})

export const config = {
  api: {
    bodyParser: false
  }
}