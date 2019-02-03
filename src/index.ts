import { importSchema } from "graphql-import";
import { resolvers } from "./resolvers";
import { ApolloServer, makeExecutableSchema } from "apollo-server";
import { createCharacterDataLoader } from "./dataLoaders";

const typeDefs = importSchema(__dirname + "/src/schema.graphql");
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

const server = new ApolloServer({
    schema,
    context: () => ({
        dataLoaders: {
            characterLoader: createCharacterDataLoader(),
        },
    }),
});

server.listen(3000);
