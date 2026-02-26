import CORS from "cors";
import initMiddleware from "./initMiddleware";
// CORS middleware, used to enable CORS for the API routes, allows all methods and all origins, can be configured to allow specific origins and methods if needed

export default initMiddleware(
  CORS({
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE", "PATCH"],
  })
);
