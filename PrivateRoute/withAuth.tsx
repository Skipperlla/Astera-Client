import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "hooks/UserContext";
import SignIn from "@components/Auth/SignIn";
const withAuth = (Component: any) => {
  const Auth = (props: any) => {
    const router = useRouter();
    const { user } = useAuth();

    useEffect((): any => {
      if (user === null) {
        router.push("/");
        return <SignIn />;
      }
    }, []);

    return <Component {...props} />;
    // If user is logged in, return original component
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
