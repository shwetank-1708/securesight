import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import FooterLi from "./FooterLi";
import FooterHeading from "./FooterHeading";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#434343] text-white">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-10 justify-center xl:w-[80%] w-full mx-auto p-10">
          <div className="md:col-span-2 flex flex-col gap-4">
            <FooterHeading heading="Secure Sight" />
            <p>
              Secure Sight is an advanced smart security service designed to
              provide comprehensive protection for homes and businesses around
              the clock. Combining cutting-edge technology with professional
              monitoring and customizable features, Secure Sight offers peace of
              mind to users by safeguarding their premises against various
              threats, including burglary, fire, and environmental hazards.
            </p>
            <div>
              <h6 className="font-bold">Talk with Expert</h6>
              <div className="flex items-center gap-2">
                <BsTelephoneFill />
                <p>+1 236 332 3880</p>
              </div>
            </div>
            <div>
              <h6 className="font-bold">Email Us On</h6>
              <div className="flex items-center gap-2">
                <IoMail />
                <p>info@securesight.com</p>
              </div>
            </div>
          </div>

          <div className="lg:flex flex-col gap-4 hidden">
            <FooterHeading heading="Residential" />
            <ul className="flex flex-col gap-2">
              <NavLink to="/residential/home_security">
                <FooterLi text="Home Security" />
              </NavLink>
              <NavLink to="/residential/video_monitoring">
                <FooterLi text="Video Monitoring" />
              </NavLink>
              <NavLink to="/residential/energy_management">
                <FooterLi text="Energy Management" />
              </NavLink>
              <NavLink to="/residential/access_control">
                <FooterLi text="Access Control" />
              </NavLink>
              <NavLink to="/residential/apps">
                <FooterLi text="Apps" />
              </NavLink>
            </ul>
          </div>

          <div className="lg:flex flex-col gap-4 hidden">
            <FooterHeading heading="Business" />
            <ul className="flex flex-col gap-2">
              <NavLink to="/business/business_security_alarm">
                <FooterLi text="Business Security Alarm" />
              </NavLink>
              <NavLink to="/business/surveillance_solutions">
                <FooterLi text="Surveillance Solutions" />
              </NavLink>
              <NavLink to="/business/business_access_control">
                <FooterLi text="Business Access Control" />
              </NavLink>
              <NavLink to="/business/intrusion_detection_systems">
                <FooterLi text="Intrusion Detection System" />
              </NavLink>
            </ul>
          </div>

          <div className="lg:flex flex-col gap-4 hidden">
            <FooterHeading heading="Products" />
            <ul className="flex flex-col gap-2">
              <NavLink to="/products/qolsys">
                <FooterLi text="Qolsys IQ Panel 4" />
              </NavLink>
              <NavLink to="/products/hikvision">
                <FooterLi text="Hikvision" />
              </NavLink>
              <NavLink to="/products/alarmdotcom">
                <FooterLi text="Alarm.com" />
              </NavLink>
              <NavLink to="/products/honeywell">
                <FooterLi text="Honeywell" />
              </NavLink>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#131313] text-white flex lg:flex-row flex-col gap-4 justify-around min-h-10 items-center p-4">
        <div>
          <p className="text-center">
            2024 © All Rights Reserved Secure Sight Inc
          </p>
        </div>
        <div className="flex gap-4 text-xl">
          <NavLink to="" className="hover:text-2xl">
            {" "}
            <FaLinkedin />
          </NavLink>

          <NavLink to="" className="hover:text-2xl">
            {" "}
            <FaYoutube />
          </NavLink>

          <NavLink to="" className="hover:text-2xl">
            {" "}
            <FaXTwitter />
          </NavLink>

          <NavLink to="" className="hover:text-2xl">
            {" "}
            <FaPinterest />
          </NavLink>

          <NavLink to="" className="hover:text-2xl">
            {" "}
            <FaFacebook />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
