import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="w-[15%] bg-red-200 h-[500px]">
      <div className="flex flex-col">
        <NavLink to="/adminDashboard/contact">Contact Details</NavLink>
        <div>
          <div>Blogs</div>
          <div>
            <NavLink to="/adminDashboard/createBlog">Create New Blog</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
