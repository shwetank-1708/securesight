// import title from "../../assets/title.jpg";
import { FaAngleDoubleRight } from "react-icons/fa";
import customize from "../../assets/customize.jpg";
import intrusion from "../../assets/intrusion.jpg";
import maintenance from "../../assets/maintenance.jpg";
import monitoring from "../../assets/monitoring.jpg";

const BusinessSecurityAlarm = () => {
  return (
    <div>
      {/* <div
        style={{ backgroundImage: `url(${title})` }}
        className="h-[20vh] bg-center-top flex items-center justify-center"
      >
        <div className="w-[70%]">
          <h1 className="text-white text-4xl">Business Security Alarm</h1>
        </div>
      </div> */}

      <div
        // style={{ backgroundImage: `url(${title})` }}
        className="min-h-[20vh] bg-center-top flex items-center justify-center bg-title"
      >
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="sm:w-[70%] w-[90%] flex items-center py-8">
            <h1 className="text-white font-bold text-4xl">
              Business Security Alarm
            </h1>
          </div>
          <div className="flex sm:w-[70%] w-[90%] font-bold text-white items-center gap-2">
            <p>BUSINESS</p>
            <FaAngleDoubleRight />
            <p>BUSINESS SECURITY ALARM</p>
          </div>
        </div>
      </div>

      <div className="2xl:w-[70%] xl:w-[80%] lg:w-[90%] w-[100%] m-auto flex flex-col gap-6 p-8 text-[#434343]">
        <div className="flex flex-col gap-2">
          {" "}
          <h2 className="text-2xl font-bold">
            Business Security Systems in Toronto & GTA
          </h2>
          <p className="text-justify leading-7">
            At Secure Sight, we are dedicated to enhancing the safety and
            security of homes and businesses throughout the Greater Toronto Area
            (GTA) with our state-of-the-art security alarm solutions. Our
            comprehensive services are designed to provide not only protection
            but also peace of mind, knowing that your property is monitored and
            secure at all times.
          </p>
        </div>

        <div className="flex gap-10 lg:flex-row flex-col items-center shadow-2xl rounded-2xl p-8">
          <img src={intrusion} className="lg:w-[35%] w-full rounded-2xl" />
          <div className="flex flex-col gap-4 w-full">
            <h3 className="text-2xl font-bold">Intrusion Detection System</h3>
            <ul className="list-disc flex flex-col gap-2">
              <li>Always stay away from potential intruders</li>
              <li>
                Integrate your business with our latest technology alarm systems
                like intrusion detection sensors, glass break detectors, high
                decibel alarms{" "}
              </li>
              <li>
                All components are carefully selected and professionally
                installed
              </li>
              <li>
                Prevent unauthorized entries to avoid vandalism, damage or theft
              </li>
              <li>Control and access your premises with remote monitoring</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-10 lg:flex-row flex-col items-center shadow-2xl rounded-2xl p-8">
          <img src={customize} className="lg:w-[35%] w-full rounded-2xl" />
          <div className="flex flex-col gap-4 w-full">
            <h3 className="text-2xl font-bold">Tailored Security Systems</h3>
            <ul className="list-disc flex flex-col gap-2">
              <li>We understand your needs</li>
              <li>
                Our security experts customize alarm systems that covers all
                your premises
              </li>
              <li>Change your plans anytime</li>
              <li>Design your premise integrity by yourself</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-10 lg:flex-row flex-col items-center shadow-2xl rounded-2xl p-8">
          <img src={monitoring} className="lg:w-[35%] w-full rounded-2xl" />
          <div className="flex flex-col gap-4 w-full">
            <h3 className="text-2xl font-bold">24/7 Monitoring Services</h3>
            <ul className="list-disc flex flex-col gap-2">
              <li>Secure Sight offers around-the-clock monitoring services</li>
              <li>Ensuring any alarm triggered is immediately addressed</li>
              <li>
                Contact immediately property owners or law enforcement for any
                security breach
              </li>
              <li>Strong deterrent for unwelcomed intruders</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-10 lg:flex-row flex-col items-center shadow-2xl rounded-2xl p-8">
          <img src={maintenance} className="lg:w-[35%] w-full rounded-2xl" />
          <div className="flex flex-col gap-4 w-full">
            <h3 className="text-2xl font-bold">
              Professional Installation and Maintenance
            </h3>
            <ul className="list-disc flex flex-col gap-2">
              <li>Team of certified and skilled technicians</li>
              <li>Ensures seamless installation without any interruptions</li>
              <li>
                Provide regular maintenance to keep systems in optimal condition
              </li>
              <li>Assist you with Customer-Centric support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSecurityAlarm;
