import Router from "next/router";
import { resetUser, setCurrentUser } from "store/reducers/auth";
import clientCookie from "js-cookie";

export const logout = (dispatch: any) => {
  Router.push("/");
  clientCookie.set("token", null);
  localStorage.clear();
  dispatch(resetUser());
};
// This function is used to log out the user, it clears the token from the cookies and local storage, it also dispatches the resetUser action to clear the user data from the state and redirects the user to the login page.

const checkPermission = (userId: string, dispatch: any) => {
  if (!userId) {
    logout(dispatch);
  } else {
    dispatch(setCurrentUser(userId));
  }
};

export default checkPermission;
