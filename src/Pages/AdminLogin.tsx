import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import config from "../config";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    userName: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(""); // Reset error state

    try {
      // Make POST request to login endpoint
      const response = await axios.post(`${config.BASE_URL}/admin/Login`, {
        // "https://alarm24hours-backend.onrender.com/admin/Login", {
        userName: values.userName,
        password: values.password,
      });

      navigate("/adminDashboard");

      console.log("Login successful:", response.data);

      // Redirect or perform further actions
      alert(`Welcome, ${response.data.admin.name}!`);
    } catch (error: any) {
      console.error("Login failed:", error);
      setError(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="Enter Your Username"
          required
          value={values.userName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          required
          value={values.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AdminLogin;
