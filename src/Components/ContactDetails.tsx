import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

interface ContactDetailsProps {
  name: string;
  email: string;
  contactNum: number;
  message: string;
}

const ContactDetails = () => {
  const [contacts, setContacts] = useState<ContactDetailsProps[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get(
          // "http://localhost:8000/getContact/alarm24hours"
          `${config.BASE_URL}/getContact/alarm24hours`
        );
        // const res = await axios.get(
        //   "https://alarm24hours-backend.onrender.com/getContact"
        // );
        setContacts(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center m-10">
        <h3 className="text-[30px] font-bold text-[#434343]">
          Contact Details
        </h3>
        <table className="border-collapse border-spacing-4 w-full">
          {" "}
          <thead className="text-left">
            <tr>
              {" "}
              <th className="p-4">S. No.</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Contact Number</th>
              <th className="p-4">Customer Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 font-bold">{index + 1}</td>
                <td className="p-4">{contact.name}</td>
                <td className="p-4">{contact.email}</td>
                <td className="p-4">{contact.contactNum}</td>
                <td className="p-4">{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactDetails;
