import ContactDetails from "../Components/ContactDetails";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminSidebar from "../Components/Admin Components/AdminSidebar";
import CreateBlog from "../Components/Admin Components/CreateBlog";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#434343] m-4 text-center">
        Admin Dashboard
      </h1>

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Logout
      </button>

      <div className="flex">
        <AdminSidebar />
        <Routes>
          <Route path="contact" element={<ContactDetails />} />
          <Route path="createBlog" element={<CreateBlog />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
