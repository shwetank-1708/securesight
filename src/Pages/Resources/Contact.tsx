import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import config from "../../config";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    contactNum: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    console.log("Name:", values.name);
    console.log("Email:", values.email);
    console.log("ContactNum:", values.contactNum);
    console.log("Message:", values.message);

    setValues({
      name: "",
      email: "",
      contactNum: "",
      message: "",
    });

    await axios
      // .post("http://localhost:8000/contact/alarm24hours", values)
      .post(`${config.BASE_URL}/contact/alarm24hours`, values)
      // .post("https://alarm24hours-backend.onrender.com/contact/post", values)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="">
      <div className="h-[20vh] bg-center-top flex items-center justify-center bg-title">
        <div className="w-[70%]">
          <h1 className="text-white text-4xl">Contact Us</h1>
        </div>
      </div>

      <div className="border-2">
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-10 m-10 text-[#434343] font-bold border-2">
          <h2 className="font-bold text-4xl">Contact Form</h2>
          <form
            className="flex flex-col gap-8 xl:w-[25%] md:w-[40%] sm:w-[60%] w-[90%]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <label>Full Name</label>
              <input
                required
                name="name"
                value={values.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter Full Name"
                className="border-2 p-2 rounded-md focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Email Address</label>
              <input
                required
                name="email"
                value={values.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter Your Email Address"
                className="border-2 p-2 rounded-md focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Contact Number</label>
              <input
                name="contactNum"
                value={values.contactNum}
                onChange={handleChange}
                type="number"
                placeholder="Enter Your Contact Number"
                className="border-2 p-2 rounded-md focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Message</label>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Write Your Message Here"
                className="border-2 p-2 rounded-md focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-sky-400 bg-white font-bold p-4 rounded-xl shadow-custom"
            >
              Submit
            </button>
          </form>
        </div>

        <div>
          <h3>Need an Expert Advice?</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// import { useState, ChangeEvent } from "react";
// import axios from "axios";

// const Contact = () => {
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     contactNum: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("");

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     e.preventDefault();

// console.log("Name:", values.customerName);
// console.log("Email:", values.customerEmail);
// console.log("ContactNum:", values.customerContactNum);
// console.log("Message:", values.customerMessage);
//     try {
//       const response = await axios.post(
//         "http://localhost:8000/send-email",
//         values
//       );
//       setStatus(response.data.message);
//       setValues({ name: "", email: "", contactNum: "", message: "" });
//     } catch (error) {
//       console.error("Error sending email:", error);
//       setStatus("Error sending email. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={values.name}
//           onChange={handleChange}
//           placeholder="Your Name"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={values.email}
//           onChange={handleChange}
//           placeholder="Your Email"
//           required
//         />
//         <input
//           type="text"
//           name="contactNum"
//           value={values.contactNum}
//           onChange={handleChange}
//           placeholder="Your Contact Number"
//         />
//         <textarea
//           name="message"
//           value={values.message}
//           onChange={handleChange}
//           placeholder="Your Message"
//           required
//         />
//         <button type="submit">Send</button>
//       </form>
//       {status && <p>{status}</p>}
//     </div>
//   );
// };

// export default Contact;
