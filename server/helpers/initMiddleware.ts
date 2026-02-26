import { NextApiRequest, NextApiResponse } from "next";
// This helper function is used to initialize middleware in the API routes, it takes a middleware function as an argument and returns a function that can be used in the API routes to run the middleware, it also handles the promise returned by the middleware and resolves or rejects it accordingly.

const initMiddleware = (middleware: any) => {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
};

export default initMiddleware;
