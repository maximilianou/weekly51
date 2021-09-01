# weekly51
graphql typescript


- minimal sample graphql server javascript
```ts
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
---
```
```
---

- minimal sample graphql server javascript 2
```ts
const { ApolloServer } = require('apollo-server');
const typeDefs = `
  type Query {
      info: String!
      feed: [Link!]!
  }
  type Link {
      id: ID!
      description: String!
      url: String!
  }
`;
let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack turotial GraphQL',
}];

const resolvers = {
    Query: {
        info: () => `This is simplest text over graphql - [${new Date().toString()}]`,
        feed: () => links,
    },
    Link: {
        id: (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url,
    }
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
server.listen(   )
      .then( ( { url } ) => console.log(`Server apollo graphql listen on ${url}`) );
```
```ts
$ curl --request POST \
    --header 'content-type: application/json' \
    --url http://localhost:4000 \
    --data '{"query":"query  look{\n  feed {\n    id\n    description\n    url\n  }\n}"}'
{"data":{"feed":[{"id":"link-0","description":"Fullstack turotial GraphQL","url":"www.howtographql.com"}]}}
```
---
```
```
---

- Mutation
```ts

```