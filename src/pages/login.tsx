import SignIn from "@components/Auth/SignIn";
import { useAuth } from "hooks/UserContext";
import React from "react";
import withAuth from "../../PrivateRoute/withAuth";

const Login = () => {
  const { user } = useAuth();
  return <>{user === null && <SignIn />}</>;
};

export default withAuth(Login);
