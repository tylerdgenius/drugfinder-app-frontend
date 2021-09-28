import DefaultLayout from "../views/shared/layout/DefaultLayout";
import Dashboard from "../views/client-user/pages/Dashboard";
import UploadsView from "../views/client-user/pages/uploads/UploadsView";
import NotFoundPage from "../views/client-user/pages/error/404error";
import ContactViewPage from "../views/client-user/pages/contact/ContactViewPage";
import SettingsViewPage from "../views/client-user/pages/settings/SettingsViewPage";
import ProfileViewPage from "../views/client-user/profile/ProfileViewPage";
import AdminErrorPage from "../views/client-user/pages/error/AdminPageError";

const PrivateRoute = ({ path }) => {
  const isAuthenticated = true;

  if (isAuthenticated !== true) {
    return <AdminErrorPage />;
  } else {
    switch (path) {
      case "/dashboard":
        return <DefaultLayout component={Dashboard} />;
      case "/uploads":
        return <DefaultLayout component={UploadsView} />;
      case "/profile":
        return <DefaultLayout component={ProfileViewPage} />;
      case "/settings":
        return <DefaultLayout component={SettingsViewPage} />;
      case "/contact":
        return <DefaultLayout component={ContactViewPage} />;
      case "/upload/new":
        return <DefaultLayout component={ContactViewPage} />;
      default:
        return <NotFoundPage />;
    }
  }
};

export default PrivateRoute;
