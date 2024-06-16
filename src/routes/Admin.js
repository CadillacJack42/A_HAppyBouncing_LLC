// import "../css/Admin.css";
import { Tabs } from "../components/Tabs";
// import { Orders } from "../components/Orders";
import { ProductsList } from "../components/ProductsList";
// import { CreateNewAdminForm } from "../forms/CreateNewAdminForm";
import { AdminCreateProductForm } from "../forms/AdminCreateProductForm";
import { logout } from "../services/fetch-utils";
import Register from "../auth/Register";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export const Admin = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  if (user?.role !== "authenticated") {
    navigate("/login");
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const admin = {
    tabs: [
      "Product List",
      "Create New Product",
      "Register New Admin",
      "Logout",
    ],
    // tabs: [
    //   "Product List",
    //   "Create New Product",
    //   "Reservations",
    //   "LogOut",
    // ],
    content: [
      <ProductsList />,
      <AdminCreateProductForm />,
      <Register />,
      <button onClick={handleLogout}>LogOut</button>,
    ],
  };
  return (
    <div className="admin-container">
      <Tabs page={admin} />
    </div>
  );
};
