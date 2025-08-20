import { FormEvent, useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(values.email);
    console.log(values.password);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[80vh] gap-4 text-[#434343]">
        <h1 className="text-5xl p-4 font-bold text-center">
          Welcome to Secure Sight
        </h1>
        <h3 className="text-4xl p-4 font-bold">Login Here</h3>
        <form
          onSubmit={handleSubmit}
          className="xl:w-[40%] lg:w-[50%] sm:w-[60%] w-[80%] flex flex-col gap-2"
        >
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

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-full text-xl w-[150px] hover:bg-[#434343]"
          >
            Login
          </button>
        </form>

        <NavLink to="/resources/signup" className="text-center">
          Don't have an account? Sign Up here.
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
