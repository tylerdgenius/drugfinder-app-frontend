import DefaultLayout from "../views/shared/layout/DefaultLayout";
import Dashboard from "../views/client-user/pages/dashboard/views/Dashboard";
import UploadsView from "../views/client-user/pages/uploads/UploadsView";
import NotFoundPage from "../views/client-user/pages/error/views/404error";
import ContactViewPage from "../views/client-user/pages/contact/ContactViewPage";
import SettingsViewPage from "../views/client-user/pages/settings/views/SettingsViewPage";
import ProfileViewPage from "../views/client-user/pages/profile/views/ProfileViewPage";
import AdminErrorPage from "../views/client-user/pages/error/AdminPageError";
import UploadNew from "../views/client-user/pages/uploads/views/UploadNew";

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
      case "/uploads/new":
        return <DefaultLayout component={UploadNew} />;
      default:
        return <NotFoundPage />;
    }
  }
};

export default PrivateRoute;
