import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../core/context/AuthContext";
import authService from "../core/services/Auth.service";

const RedirectPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { storeUserAuthData } = useContext(AuthContext);

  const redirectPath = location.state?.path;

  /**
   * @name signInWithGoogleAccount
   * @description firebase service to login using google account and redirect login to respective page
   */
  function logIn() {
    authService
      .signInWithGoogleAccount()
      .then((res: any) => {
        console.log(res);

        storeUserAuthData(res.user);
        if (!redirectPath) {
          navigate("/");
        } else {
          navigate(redirectPath);
        }
      })
      .catch(() => {
        if (window.confirm("Login to proceed further") === true) {
          logIn();
        } else {
          navigate("/");
        }
      });
  }

  useEffect(() => {
    logIn();
    return () => {};
  }, [redirectPath, storeUserAuthData, navigate]);
  return <div className="h-100">Redirecting...</div>;
};

export default RedirectPage;
