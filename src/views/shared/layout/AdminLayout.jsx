import AdminSidebar from "../Sidebar/AdminSidebar";

const AdminLayout = ({ component: Component }) => {
  return (
    <>
      <AdminSidebar />
      <Component />
    </>
  );
};

export default AdminLayout;