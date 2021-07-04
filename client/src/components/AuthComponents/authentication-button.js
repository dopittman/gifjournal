import React from "react";

import LogoutButton from "./logout-button";

import { useAuth0 } from "@auth0/auth0-react";
import SignInButton from "../Navigation/NavigationButtons/SignInBtn";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <SignInButton />;
};

export default AuthenticationButton;