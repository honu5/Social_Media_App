import { NextApiRequest } from "next";
import getInitialToken from "./getInitialToken";

const getVerifyAuthUrl = (req?: NextApiRequest) => {
  if (process.env.VERIFY_AUTH_URL) {
    return process.env.VERIFY_AUTH_URL;
  }

  if (typeof window !== "undefined") {
    return "/api/login/verify";
  }
  // The following code is used to construct the URL for the verify authentication endpoint, it checks if the VERIFY_AUTH_URL environment variable is set and returns it, if not it checks if the code is running in the browser and returns the relative URL for the endpoint, if neither of these conditions are met it constructs the URL using the protocol and host from the request headers, this is useful for server-side rendering where we need to make a request to the API from the server and we need to know the full URL for the endpoint.

  const forwardedProtocol = req?.headers?.["x-forwarded-proto"];
  const protocol =
    typeof forwardedProtocol === "string"
      ? forwardedProtocol
      : Array.isArray(forwardedProtocol)
      ? forwardedProtocol[0]
      : "http";
  const host = req?.headers?.host || "localhost:6969";

  return `${protocol}://${host}/api/login/verify`;
};

const fetchTokenData = async (req?: NextApiRequest) => {
  const res = await fetch(getVerifyAuthUrl(req), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: getInitialToken(req),
    }),
  });

  return res;
};

export default fetchTokenData;
