import { configureStore } from "@reduxjs/toolkit";

import accounts from "./reducers/accounts";
import auth from "./reducers/auth";
import friends from "./reducers/friends";

export default configureStore({
  reducer: {
    accounts,
    auth,
    friends,
  },
  devTools: process.env.NODE_ENV === "development",
});
// This file is used to configure the Redux store, it imports the reducers for the accounts, authentication and friends and combines them in a single store, it also enables the Redux DevTools extension in development mode for easier debugging.