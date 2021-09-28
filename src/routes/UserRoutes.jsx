import { Switch, Route } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import PrivateRoute from "./PrivateRoutes";
import ForgotPassword from "../views/client-user/user/Password/ForgotPassword";
import VerifyEmail from "../views/client-user/user/Email/VerifyEmail";
import IndexPage from "../views/shared/pages/index";
import Login from "../views/client-user/user/Login/Login";
import Register from "../views/client-user/user/Register/Register";
import ProtectedRouteController from "./ProtectedRouteController";
import NotFoundPage from "../views/client-user/pages/error/views/404error";

const UserRoutes = (props) => {
  const isAdmin = "admin";

  return (
    <Switch>
      <Route path="/" exact component={IndexPage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/verify-email" component={VerifyEmail} />
      <ProtectedRouteController path="/dashboard" />
      <ProtectedRouteController path="/uploads" />
      <ProtectedRouteController path="/upload/new" />
      <ProtectedRouteController path="/profile" />
      <ProtectedRouteController path="/settings" />
      <ProtectedRouteController path="/contact" />
      <ProtectedRouteController path="/upload/new" />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default UserRoutes;
