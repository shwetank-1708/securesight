import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

const Quotation = () => {
  const [values, setValues] = useState({
    customerName: "",
    customerEmail: "",
    customerContactNum: "",
    customerMessage: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  //   const handleSubmit = async (e: FormEvent): Promise<void> => {
  //     e.preventDefault();
  //     console.log("Name:", values.customerName);
  //     console.log("Email:", values.customerEmail);
  //     console.log("ContactNum:", values.customerContactNum);
  //     console.log("Message:", values.customerMessage);

  //     setValues({
  //       customerName: "",
  //       customerEmail: "",
  //       customerContactNum: "",
  //       customerMessage: "",
  //     });
  //   };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Name:", values.customerName);
    console.log("Email:", values.customerEmail);
    console.log("ContactNum:", values.customerContactNum);
    console.log("Message:", values.customerMessage);
    try {
      const response = await axios.post(
        // "http://localhost:8000/send-email",
        "https://alarm24hours-backend.onrender.com/send-email",
        values,
        {
          headers: {
            "Content-Type": "application/json", // Explicitly specify JSON
          },
        }
      );
      setStatus(response.data.message);
      setValues({
        customerName: "",
        customerEmail: "",
        customerContactNum: "",
        customerMessage: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Error sending email. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-10 m-10 text-[#434343] font-bold">
      <h2 className="font-bold text-4xl">Quotation</h2>
      <form
        className="flex flex-col gap-8 xl:w-[25%] md:w-[40%] sm:w-[60%] w-[90%]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label>Customer Name</label>
          <input
            required
            name="customerName"
            value={values.customerName}
            onChange={handleChange}
            type="text"
            placeholder="Enter Customer Name"
            className="border-2 p-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Customer Email Address</label>
          <input
            required
            name="customerEmail"
            value={values.customerEmail}
            onChange={handleChange}
            type="email"
            placeholder="Enter Customer Email Address"
            className="border-2 p-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Customer Contact Number</label>
          <input
            name="customerContactNum"
            value={values.customerContactNum}
            onChange={handleChange}
            type="number"
            placeholder="Enter Customer Contact Number"
            className="border-2 p-2 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Message From Customer</label>
          <textarea
            name="customerMessage"
            value={values.customerMessage}
            onChange={handleChange}
            placeholder="Write Customer Message Here"
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
      {status && <p>{status}</p>}
    </div>
  );
};

export default Quotation;
