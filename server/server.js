const express = require('express');
const path = require('path');
const db = require('./config/connection');
// graphql additions
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { typeDefs, resolvers } = require('./schemas')

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({ typeDefs, resolvers })

const startServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // if we're in production, serve client/build as static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  app.use('/graphql', expressMiddleware(server))

  db.once('open', () => {
    app.listen(PORT, () => { 
      console.log(`🌍 Now listening on localhost:${PORT}`);
      console.log(`GraphQL sandbox available at http://localhost:${PORT}/graphql`);
    });
  });

}

startServer();
