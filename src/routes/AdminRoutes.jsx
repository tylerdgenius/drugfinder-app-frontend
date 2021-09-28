import AdminLayout from "../views/shared/layout/AdminLayout";
import AdminDashboard from "../views/admin/pages/AdminDashboard";

const AdminRoutes = ({ path }) => {
  const isAuthenticated = true;

  if (isAuthenticated !== true) {
    return <p>You are not enabled to view this page</p>;
  } else {
    switch (path) {
      case "/dashboard":
        return <AdminLayout component={AdminDashboard} />;
    }
  }
};

export default AdminRoutes;
