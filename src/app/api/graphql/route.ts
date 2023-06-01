import { ApolloServer } from '@apollo/server';
import {startServerAndCreateNextHandler} from "@as-integrations/next"
import {gql} from "graphql-tag"
import { NextRequest } from 'next/server';

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];
const typeDefs=gql`
type Book {
    title: String
    author: String
  }

  type Query{
    books: [Book]
  }
`
const resolvers={
    Query:{
        books:()=>books
    }
}


const apolloServer=new ApolloServer({
    typeDefs,
    resolvers
})

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, { context: async req => ({ req }) });


export const GET=async(req:NextRequest)=>{
    return handler(req)
}

export const POST=async(req:NextRequest)=>{
    return handler(req)
}