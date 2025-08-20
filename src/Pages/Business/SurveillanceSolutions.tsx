// import title from "../../assets/title.jpg";
import { FaAngleDoubleRight } from "react-icons/fa";
import PageContent from "../../Components/PageContent";
import customized_security from "../../assets/surveillance_solutions/customized_security.jpg";
import state_of_the_art from "../../assets/surveillance_solutions/state_of_the_art.jpg";
import remote_monitoring from "../../assets/surveillance_solutions/remote_monitoring.jpg";
import professional_support from "../../assets/surveillance_solutions/professional_support.jpg";
import gta from "../../assets/surveillance_solutions/gta.jpg";

const SurveillanceSolutions = () => {
  return (
    <div>
      {/* <div
        style={{ backgroundImage: `url(${title})` }}
        className="h-[20vh] bg-center-top flex items-center justify-center"
      >
        <div className="w-[70%]">
          <h1 className="text-white text-4xl">Surveillance Solutions</h1>
        </div>
      </div> */}

      <div
        // style={{ backgroundImage: `url(${title})` }}
        className="min-h-[20vh] bg-center-top flex items-center justify-center bg-title"
      >
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="sm:w-[70%] w-[90%] flex items-center py-8">
            <h1 className="text-white font-bold text-4xl">
              Surveillance Solutions
            </h1>
          </div>
          <div className="flex sm:w-[70%] w-[90%] font-bold text-white items-center gap-2">
            <p>BUSINESS</p>
            <FaAngleDoubleRight />
            <p>SURVEILLANCE SOLUTIONS</p>
          </div>
        </div>
      </div>

      <div className="2xl:w-[70%] xl:w-[80%] lg:w-[90%] w-[100%] m-auto flex flex-col gap-2 p-8 text-secondary">
        <div>
          {" "}
          <h2 className="text-2xl font-bold">
            Surveillance Solutions: Protecting Homes & Businesses 24/7
          </h2>
          <p className="text-justify leading-7">
            At Secure Sight, we understand the unique security needs of the
            Greater Toronto Area (GTA). Our top-notch surveillance solutions
            provide continuous protection for homes, businesses, and
            communities. Utilizing state-of-the-art technology, we offer a
            powerful deterrent against potential threats, ensuring peace of
            mind.
          </p>
        </div>

        <div>
          <PageContent
            src={customized_security}
            heading="Customized Security Services"
            bold1="Tailored Solutions"
            normal1="Designed for small residential properties to large commercial spaces."
            bold2="High-Definition CCTV Systems"
            normal2="Crystal-clear imaging for enhanced surveillance."
            bold3="Remote Monitoring Solutions"
            normal3="Access live feeds and alerts from anywhere."
            bold4="Integrated Security Systems"
            normal4="Seamlessly connected surveillance for full coverage."
          />
          <PageContent
            src={state_of_the_art}
            heading="State-of-the-Art Technology"
            bold1="Multi-Camera Systems"
            normal1="Comprehensive coverage for all property areas."
            bold2="Digital & Network Video Recorders (DVRs & NVRs)"
            normal2="Secure and scalable video storage."
            bold3="Wireless Technology"
            normal3="Flexible, efficient, and easy-to-install systems."
            bold4="Advanced Features"
            normal4="Includes night vision, motion detection, and real-time alerts."
          />
          <PageContent
            src={remote_monitoring}
            heading="Remote Monitoring Capabilities"
            bold1="View Live Feeds"
            normal1="Stay updated with real-time security footage."
            bold2="Instant Alerts"
            normal2="Receive notifications on security breaches or suspicious activity."
            bold3="Smartphone & Internet Access"
            normal3="Control security remotely with ease."
            bold4=""
            normal4=""
          />
          <PageContent
            src={professional_support}
            heading="Professional Installation and Support"
            bold1="Expert Technicians"
            normal1="Ensure precise and efficient installations."
            bold2="Minimal Disruptions"
            normal2="Quick setup without interfering with daily operations."
            bold3="Ongoing Support"
            normal3="Dedicated customer service to keep systems running smoothly."
            bold4=""
            normal4=""
          />
          <PageContent
            src={gta}
            heading="Committed to Safety in GTA"
            bold1="Local Expertise"
            normal1="Understanding GTA’s specific security challenges."
            bold2="Community Protection"
            normal2="Enhancing safety for homes, businesses, and public areas."
            bold3="Reliable Solutions"
            normal3="Proven security strategies for maximum protection."
            bold4=""
            normal4=""
          />
        </div>
      </div>
    </div>
  );
};

export default SurveillanceSolutions;
