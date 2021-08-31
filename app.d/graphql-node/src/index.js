const { ApolloServer } = require('apollo-server');
const typeDefs = `
  type Query {
      info: String!
  }
`;
const resolvers = {
    Query: {
        info: () => `This is simplest text over graphql - [${new Date().toString()}]`
    }
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
server.listen(   )
      .then( ( { url } ) => console.log(`Server apollo graphql listen on ${url}`) );

