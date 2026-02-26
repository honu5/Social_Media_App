const { fetchTypeDefs } = require("apollo-mocked-provider");
// This script is used to fetch the type definitions from the GraphCMS endpoint and save them to a file, which can be used for type checking and autocompletion in the IDE. It is run as part of the build process to ensure that the type definitions are always up to date with the GraphCMS schema.

(async () => {
  await fetchTypeDefs({
    uri: `${process.env.GRAPHCMS_ENDPOINT}`,
    typescript: false,
    path: "interfaces/typeDefs.ts",
  });
})();
