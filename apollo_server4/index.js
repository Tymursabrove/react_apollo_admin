import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from "express";
import http from 'http';
import cors from 'cors';
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import resolvers from "./resolvers.js";
import typeDefs from "./models/typeDefs.js";


const MONGO_URI = "mongodb://localhost:27017/student-register";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";
// Database connection
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Db Connected`);
  })
  .catch(err => {
    console.log(err.message);
  });

const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
});
await server.start();
// //{
//     origin: ["http://localhost:5000","https://studio.apollographql.com/"],
//     credintials: true
// }
app.use(
  '/graphql',
  cors(),
  express.json(),
  graphqlUploadExpress(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }, graphqlUploadExpress()),
  }),
);
await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/graphql`);