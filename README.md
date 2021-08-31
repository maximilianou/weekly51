# weekly51
graphql typescript


- minimal sample graphql server javascript
```js
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
```
- check over command line
```js
$ make step51_6001
curl --request POST \
    --header 'content-type: application/json' \
    --url http://localhost:4000 \
    --data '{"query":"query ExampleQuery {\n  info\n}"}'
{"data":{"info":"This is simplest text over graphql - [Tue Aug 31 2021 10:31:09 GMT-0300 (Argentina Standard Time)]"}}
```

