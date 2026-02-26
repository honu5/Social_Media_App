import cookie from "cookie";
import { NextApiRequest } from "next";
import Storage from "constants/storage";

const getInitialToken = (req?: NextApiRequest) => {
  let token: string | null = null;
  if (process.browser) {
    if (localStorage[Storage.TOKEN]) {
      token = localStorage[Storage.TOKEN];
    }
  } else {
    if (req && req.headers) {
      const cookies = req.headers.cookie;
      if (typeof cookies === "string") {
        const cookiesJSON = cookie.parse(cookies);
        token = cookiesJSON.token;
      }
    }
  }
  return token;
};// This function is used to get the token from the cookies or local storage, it checks if the code is running in the browser and if the token exists in local storage, if it does it returns the token, if not it checks if the request object is available and if it has headers, if it does it parses the cookies from the headers and returns the token from the cookies, this function is used in the fetchTokenData function to get the token to verify the authentication of the user.


export default getInitialToken;
