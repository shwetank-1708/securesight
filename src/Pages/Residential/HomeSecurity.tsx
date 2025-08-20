import { FaAngleDoubleRight } from "react-icons/fa";

const HomeSecurity = () => {
  return (
    <div>
      <div className="h-[20vh] bg-center-top flex items-center justify-center bg-title">
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="w-[70%] flex items-center py-8">
            <h1 className="text-white font-bold text-4xl">Home Security</h1>
          </div>
          <div className="flex w-[70%] font-bold text-white items-center gap-2">
            <p>RESIDENTIAL</p>
            <FaAngleDoubleRight />
            <p>HOME SECURITY</p>
          </div>
        </div>
      </div>

      <div className="2xl:w-[70%] xl:w-[80%] lg:w-[90%] w-[100%] m-auto flex flex-col gap-2 p-8">
        <h2 className="text-2xl font-bold">Home Security Package</h2>
        <p className="text-justify">
          At Secure Sight Inc., we prioritize the security of your home and
          residence. Our home security alarm packages are affordably priced,
          starting at just $25, ensuring that safety is within reach for
          everyone. We offer a no-contract, no-monthly-fee option, giving you
          the flexibility to cancel anytime without any penalties.
        </p>
        <p className="text-justify">
          Our comprehensive home security package includes cutting-edge
          equipment and round-the-clock monitoring by our dedicated team. With
          our 24/7 monitoring station, your home is constantly under
          surveillance, ensuring a swift response to any potential threats. We
          provide you with peace of mind by promptly alerting you and the
          authorities in case of a security breach.
        </p>
        <p className="text-justify">
          A key feature of our service is our proactive approach to false
          alarms. We understand that false alarms can be inconvenient and
          stressful. That’s why our team is trained to assist you quickly
          whenever a false alarm occurs, ensuring your safety while minimizing
          disruptions to your daily routine.
        </p>
        <p className="text-justify">
          At Secure Sight Inc., we do more than just install security systems.
          We offer a comprehensive approach to home security, customizing our
          solutions to meet your specific needs. Our advanced technology,
          combined with our expert team, ensures your home is protected against
          intrusions, fire, and other emergencies. We aim to create a safe and
          secure environment for you and your family, allowing you to focus on
          what truly matters. Choose Secure Sight. for reliable, hassle-free
          home security solutions you can trust.
        </p>
        <p className="text-justify">
          Video surveillance systems allow homeowners to monitor their property
          remotely via smartphones or computers. They can be indoor, outdoor, or
          a combination of both. Many home security companies offer professional
          installation services to ensure that all components are set up
          correctly and functioning properly. They also provide ongoing support
          and maintenance.
        </p>
      </div>
    </div>
  );
};

export default HomeSecurity;
