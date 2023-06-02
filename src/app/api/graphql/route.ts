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


  const course={
    id:1,
  courseName:"MCA",
  category:"gen",
  price:2000,
  language:"Javascript",
  email:"anuj@gmail.com",
  teachingAssists:[{
    firstName:"anuj",
    lastName:"kumar",
    experience:1
  },{
    firstName:"mohit",
    lastName:"kumar",
    experience:2
  }]
  }
const typeDefs=gql`



type Course {
  id:ID
  courseName:String
  category:String
  price:Int
  language:String
  email:String
  teachingAssists:[TeachingAssist]
}


type TeachingAssist{
  firstName:String
  lastName:String
  experience:Int
}


type Book {
    title: String
    author: String
  }

  type Query{
    books: [Book]
    getCourse:Course
  }
`
const resolvers={
    Query:{
        books:()=>books,
        getCourse:()=>course
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