import { NavLink } from "react-router-dom";
import { FormEvent, useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(values.name);
    console.log(values.email);
    console.log(values.password);
    console.log(values.confirmPassword);

    setValues({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    if (values.password !== values.confirmPassword) {
      alert("Password do not match");
    } else {
      await axios
        //   .post("http://localhost:8000/signup/post", values)
        .post("https://alarm24hours-backend.onrender.com/signup/post", values)
        .then((res) => {
          console.log(res);
        });
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[80vh] gap-4 text-[#434343]">
        <h1 className="text-5xl p-4 font-bold text-center">
          New to Alarm-24-Hours?
        </h1>
        <h3 className="text-4xl p-4 font-bold">Sign Up Here</h3>
        <form
          onSubmit={handleSubmit}
          className="xl:w-[40%] lg:w-[50%] sm:w-[60%] w-[80%] flex flex-col gap-2"
        >
          <div className="border-2 rounded-xl">
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              required
              type="text"
              placeholder="Enter Your Full Name"
              className="p-4 w-[100%] focus:outline-none rounded-xl text-xl"
            ></input>
          </div>
          <div className="border-2 rounded-xl">
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              required
              type="email"
              placeholder="Enter Your Email Id"
              className="p-4 w-[100%] focus:outline-none rounded-xl text-xl"
            ></input>
          </div>
          <div className="border-2 rounded-xl">
            <input
              name="password"
              value={values.password}
              onChange={handleChange}
              required
              type="password"
              placeholder="Enter Your Password"
              className="p-4 w-[100%] focus:outline-none rounded-xl text-xl"
            ></input>
          </div>
          <div className="border-2 rounded-xl">
            <input
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              required
              type="password"
              placeholder="Confirm Your Password"
              className="p-4 w-[100%] focus:outline-none rounded-xl text-xl"
            ></input>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-full text-xl inline-block w-[150px] hover:bg-[#434343]"
          >
            Sign Up
          </button>
        </form>

        <NavLink to="/resources/login" className="text-center">
          Already have an account? Login here.
        </NavLink>
      </div>
    </div>
  );
};

export default SignUp;
