import bodyParser from "body-parser";
// Body parser middleware, used to parse the body of the requests, allows to access the body of the requests in the resolvers, can be configured to parse different types of bodies if needed

const initBodyParser = () => {
  bodyParser.urlencoded({ extended: false });
  bodyParser.json();
};

export default initBodyParser;
