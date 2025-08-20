import { FaAngleDoubleRight } from "react-icons/fa";
import PageContent from "../../Components/PageContent";
import advance_alarm from "../../assets/intrustion_detection/advance_alarm.jpg";
import comprehensive_protection from "../../assets/intrustion_detection/comprehensive_protection.jpg";
import monitoring_systems from "../../assets/intrustion_detection/monitoring_systems.jpg";
import smart_alarm from "../../assets/intrustion_detection/smart_alarm.jpg";

const IntrusionDetectionSystems = () => {
  return (
    <div>
      <div
        // style={{ backgroundImage: `url(${title})` }}
        className="min-h-[20vh] bg-center-top flex items-center justify-center bg-title"
      >
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="sm:w-[70%] w-[90%] flex items-center py-8">
            <h1 className="text-white font-bold text-4xl">
              Intrusion Detection Systems
            </h1>
          </div>
          <div className="flex sm:w-[70%] w-[90%] font-bold text-white items-center gap-2">
            <p>BUSINESS</p>
            <FaAngleDoubleRight />
            <p>INTRUSION DETECTION SYSTEMS</p>
          </div>
        </div>
      </div>

      <div className="2xl:w-[70%] xl:w-[80%] lg:w-[90%] w-[100%] m-auto flex flex-col gap-2 p-8 text-secondary">
        <div>
          {" "}
          <h2 className="text-2xl font-bold">
            Intrusion Detection Systems: Advanced Security for Homes &
            Businesses
          </h2>
          <p className="text-justify leading-7">
            Intrusion Detection Systems (IDS) play a crucial role in protecting
            property, people, and assets from malicious activity, theft, and
            vandalism. At Secure Sight, we offer state-of-the-art intrusion
            security systems that provide comprehensive monitoring and rapid
            response to security threats. Our solutions are designed to detect
            unauthorized attempts and alert law enforcement promptly, ensuring
            maximum protection for homes and businesses across Toronto,
            Mississauga, Brampton, Vaughan, Scarborough, and Ontario, Canada.
          </p>
        </div>

        <div>
          <PageContent
            src={advance_alarm}
            heading="Advanced Detection & Alarm Systems"
            bold1="Motion Detectors"
            normal1="Identify movement within protected areas."
            bold2="Glass Break Sensors"
            normal2="ct break-ins through doors and windows."
            bold3="Thermal Perimeter Detection"
            normal3="Utilize state-of-the-art thermal technology to detect potential intruders."
            bold4="Sensors & Electronic Security Devices"
            normal4="Ensure complete coverage and monitoring."
          />
          <PageContent
            src={smart_alarm}
            heading="Smart Alarm Verification Solutions"
            bold1="Audio and Video Verification Systems"
            normal1="Minimize false alarms and provide real-time security footage."
            bold2="Alarm Verification Solutions"
            normal2="Validate threats before sending emergency responses."
            bold3="GSM Communicator"
            normal3="Ensure seamless communication with professional security system monitoring centers."
            bold4=""
            normal4=""
          />
          <PageContent
            src={monitoring_systems}
            heading="Control & Monitoring Systems"
            bold1="Control Panels & Keypads"
            normal1="Manage security settings with user-friendly interfaces"
            bold2="Security System Monitoring"
            normal2="24/7 protection through skilled technicians."
            bold3="Professional Security System Monitoring Centers"
            normal3="Ensure a rapid response to intrusion alerts."
            bold4=""
            normal4=""
          />
          <PageContent
            src={comprehensive_protection}
            heading="Comprehensive Protection"
            bold1="Protect Property, People, and Assets"
            normal1="Secure homes and businesses from theft and vandalism."
            bold2="Detect Unauthorized Attempts"
            normal2="Identify suspicious activities before damage occurs."
            bold3="Minimize False Alarms"
            normal3="Advanced technology reduces unnecessary disruptions."
            bold4=""
            normal4=""
          />
        </div>
      </div>
    </div>
  );
};

export default IntrusionDetectionSystems;
