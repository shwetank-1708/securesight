import Title from "../Title";
import Service from "../Service";
import access_control from "../../assets/access_control.jpg";
import security_alarm from "../../assets/security_alarm.jpg";
import surveillance from "../../assets/surveillance.jpg";
import it_cabling from "../../assets/it_cabling.jpg";

const OurServices = () => {
  return (
    <div>
      <div className="pb-11 flex flex-col justify-center items-center">
        <div>
          <Title
            heading="Our Services"
            des="Looking for security solutions? Let's explore our services."
          />
        </div>

        <div className="flex justify-center gap-11 flex-wrap">
          <Service
            src={access_control}
            heading="Access Control Systems"
            des=""
            path="/residential/access_control"
          />
          <Service
            src={security_alarm}
            heading="Security Alarm Systems"
            des=""
            path="/business/intrusion"
          />
          <Service
            src={surveillance}
            heading="Surveillance Solutions"
            des=""
            path="/business/surveillance_solutions"
          />
          <Service
            src={it_cabling}
            heading="IT Networking Cabling"
            des=""
            path="/residential/video_monitoring"
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
