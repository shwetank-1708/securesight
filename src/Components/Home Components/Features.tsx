import Title from "../Title";
import Feature from "../Feature";
import technology from "../../assets/technology.png";
import peace from "../../assets/peace.png";
import remote from "../../assets/remote.png";
import customization from "../../assets/customization.png";
import environmental from "../../assets/environmental.jpg";
import user from "../../assets/user.png";

const Features = () => {
  return (
    <div>
      <div className="bg-gray-100 border-2">
        <div className="">
          <Title
            heading="Why Choose US ?"
            des="Are you Confused ? Take a look at our key feature."
          />
        </div>
        <div className="flex flex-wrap justify-center gap-11 2xl:w-[90%] w-full mx-auto pb-10">
          <Feature
            src={technology}
            heading="Advanced Technology"
            des="Secure Sight services often utilize cutting-edge technology such as AI-powered cameras, motion sensors, and smart locks, providing more reliable and efficient security solutions."
            path="/features/advance_ technology"
          />

          <Feature
            src={peace}
            heading="Industry Experience"
            des="Secure Sight combines years of industry expertise with advanced technology to provide reliable, tailored security solutions for protecting homes and businesses effectively."
            path="/features/industry_experience"
          />

          <Feature
            src={remote}
            heading="Remote Access and Monitoring"
            des="With Secure Sight, you can monitor your home or business remotely using your smartphone or computer. This allows you to check in on your property from anywhere"
            path="/features/remote_access"
          />

          <Feature
            src={customization}
            heading="Customization"
            des="Secure Sight services typically offer customizable solutions tailored to your specific needs. you can customize your system to fit your requirements."
            path="/features/customization"
          />

          <Feature
            src={environmental}
            heading="Environmental Monitoring"
            des="Secure Sight systems also offer environmental monitoring capabilities, such as smoke detectors and water leak sensors. This can help protect your from hazards."
            path="/features/environmental_monitoring"
          />

          <Feature
            src={user}
            heading="User-Friendly Interface"
            des="Secure Sight typically come with user-friendly interfaces that are easy to navigate and control. This makes it simple for homeowners to set up and manage"
            path="/features/user_friendly"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
