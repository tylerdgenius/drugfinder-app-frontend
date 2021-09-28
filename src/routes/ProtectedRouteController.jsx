import AdminRoutes from "./AdminRoutes";
import PrivateRoute from "./PrivateRoutes";

const ProtectedRouteController = ({path}) => {
    const isAdmin = "user";
    switch (isAdmin) {
        case "user":
            return <PrivateRoute path={path} />
        case "admin":
            return <AdminRoutes path={path} />
    }

}
 
export default ProtectedRouteController;