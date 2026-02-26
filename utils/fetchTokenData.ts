import { NextApiRequest } from "next";
import getInitialToken from "./getInitialToken";

const getVerifyAuthUrl = (req?: NextApiRequest) => {
  if (process.env.VERIFY_AUTH_URL) {
    return process.env.VERIFY_AUTH_URL;
  }

  if (typeof window !== "undefined") {
    return "/api/login/verify";
  }

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
