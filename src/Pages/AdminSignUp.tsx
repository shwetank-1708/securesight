import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";

const AdminSignup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(values);

    try {
      const response = await axios.post(
        // "http://localhost:8000/admin/SignUp",
        "https://alarm24hours-backend.onrender.com/admin/SignUp",
        values
      );
      console.log("Data Uploaded");
      console.log(response.data); // Log the actual response data
    } catch (error) {
      console.error("Error uploading user:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-11">
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          required
          value={values.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required
          value={values.email}
          onChange={handleChange}
        />
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
    </div>
  );
};

export default AdminSignup;
