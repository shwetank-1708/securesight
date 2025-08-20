// import title from "../../assets/title.jpg";
import { FaAngleDoubleRight } from "react-icons/fa";
import PageContent from "../../Components/PageContent";
import advanced_access_control from "../../assets/business_access_control/advanced_access_control.jpg";
import integrated_security_systems from "../../assets/business_access_control/integrated_security_systems.jpg";
import remote_access_control from "../../assets/business_access_control/remote_access_control.jpg";
import proactive_security_measures from "../../assets/business_access_control/proactive_security_measures.jpg";
import technical_support from "../../assets/business_access_control/technical_support.jpg";

const BusinessAccessControl = () => {
  return (
    <div>
      <div
        // style={{ backgroundImage: `url(${title})` }}
        className="min-h-[20vh] bg-center-top flex items-center justify-center bg-title"
      >
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="sm:w-[70%] w-[90%] flex items-center py-8">
            <h1 className="text-white font-bold text-4xl">
              Business Access Control
            </h1>
          </div>
          <div className="flex sm:w-[70%] w-[90%] font-bold text-white items-center gap-2">
            <p>BUSINESS</p>
            <FaAngleDoubleRight />
            <p>BUSINESS ACCESS CONTROL</p>
          </div>
        </div>
      </div>

      <div className="2xl:w-[70%] xl:w-[80%] lg:w-[90%] w-[100%] m-auto flex flex-col gap-2 p-8 text-secondary">
        <div>
          {" "}
          <h2 className="text-2xl font-bold">
            Access Control Systems: Enhancing Security for Businesses
          </h2>
          <p className="text-justify leading-7">
            In today’s fast-paced world, businesses require robust Access
            Control Systems to protect their assets, property, and operations
            from unauthorized access. Implementing cutting-edge technology and
            advanced security systems, organizations can safeguard restricted
            areas while ensuring seamless entry for authorized personnel. Secure
            Sight Inc. specializes in providing customizable access control
            solutions designed to meet diverse security requirements for
            businesses across Toronto, Mississauga, Brampton, Vaughan,
            Scarborough, and Ontario, Canada.
          </p>
        </div>

        <div>
          <PageContent
            src={advanced_access_control}
            heading="Advanced Access Control Mediums"
            bold1="Biometric Scanners"
            normal1="Secure authentication using fingerprints or retinal scans."
            bold2="Facial Recognition"
            normal2="AI-driven security for fast and reliable identification."
            bold3="Keypads"
            normal3="PIN-based access for employees and authorized personnel."
            bold4="Smart Card Readers or Proximity Cards"
            normal4="Secure and contactless access management."
          />
          <PageContent
            src={integrated_security_systems}
            heading="Integrated Security Systems"
            bold1="Integrated Alarm Systems"
            normal1="Automated alerts in case of unauthorized access."
            bold2="High-Resolution Cameras"
            normal2="Continuous remote monitoring for enhanced security."
            bold3="Motion Detectors"
            normal3="Instant alerts on suspicious movements within restricted areas."
            bold4=""
            normal4=""
          />
          <PageContent
            src={remote_access_control}
            heading="Remote & Managed Access Control"
            bold1="Remote Lock/Unlock Service"
            normal1="Control doors from anywhere via mobile devices."
            bold2="Mobile Credentials"
            normal2="Access control using smartphones for convenience."
            bold3="Managed Access Control"
            normal3="Centrally controlled security system for large infrastructures."
            bold4=""
            normal4=""
          />
          <PageContent
            src={proactive_security_measures}
            heading="Proactive Security Measures"
            bold1="Prevent Unauthorized Access"
            normal1="Implement secure entry to protect business assets."
            bold2="Proactive Threat Detection"
            normal2="AI-driven insights to detect and prevent security breaches."
            bold3="Credential Management"
            normal3="Customizable security measures for different levels of access."
            bold4=""
            normal4=""
          />
          <PageContent
            src={technical_support}
            heading="Emergency Services & Technical Support"
            bold1="Emergency Services"
            normal1="Immediate response to security threats."
            bold2="MLaw Enforcement Canada & Ontario"
            normal2="Compliance with local regulations for maximum safety."
            bold3="Professional Access Control System Installation and Maintenance"
            normal3="Reliable and expert setup."
            bold4="Technical Support"
            normal4="24/7 assistance for all access control needs."
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessAccessControl;
