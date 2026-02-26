import jwt from "jsonwebtoken";
// This helper file is used to sign and verify JWT tokens, it uses the jsonwebtoken library to sign and verify the tokens, it is used in the resolvers for the user registration and login, it can be configured to use different signing algorithms and expiration times if needed

export const sign = (params: any) =>
  jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60000,
      data: params,
    },
    process.env.JWT_PRIVATE_KEY
  );

export const verify = (token: any) =>
  jwt.verify(token, process.env.JWT_PRIVATE_KEY);

export default {};
