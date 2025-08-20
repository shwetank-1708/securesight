import AboutImage from "../Components/AboutImage";
import AboutTitle from "../Components/AboutTitle";
import AboutPara from "../Components/AboutPara";
import AboutLi from "../Components/AboutLi";
import history from "../assets/history.jpg";
import home_solutions from "../assets/home_solutions.jpg";
import business_solutions from "../assets/business_solutions.jpg";
import products from "../assets/products.jpg";
import vision from "../assets/vision.jpg";
import Title from "../Components/Title";
import Review from "../Components/Review";
import review_1 from "../assets/review_1.png";
import review_2 from "../assets/review_2.png";
import review_3 from "../assets/review_3.png";

const About = () => {
  return (
    <div>
      <div className="text-[#434343]">
        <div className="h-[20vh] bg-center-top flex items-center justify-center bg-title">
          <div className="w-[70%]">
            <h1 className="text-white text-4xl">About Us</h1>
          </div>
        </div>

        <div className="flex items-center lg:flex-row flex-col justify-center gap-8 p-[50px]">
          <div className="flex flex-col gap-2 2xl:w-[35%] xl:w-[40%] lg:w-[50%] w-[100%]">
            <AboutTitle title="Our History" />
            <AboutPara
              para="Welcome to Secure Sight Inc, your trusted partner in comprehensive
            security solutions. Founded with the mission to safeguard homes and
            businesses across the Greater Toronto Area (GTA) and Ontario, we
            have built a legacy of reliability, innovation, and unmatched
            customer service. With years of expertise in addressing diverse
            security needs, Secure Sight Inc has become a cornerstone for
            families and businesses seeking peace of mind. Our commitment
            extends across major cities, including Mississauga, Brampton,
            Vaughan, Markham, and beyond, delivering tailored security packages
            that protect what matters most."
            />
          </div>
          <div className=" 2xl:w-[35%] xl:w-[40%] lg:w-[50%] w-[100%]">
            <AboutImage src={history} />
          </div>
        </div>

        <div className="flex items-center lg:flex-row flex-col justify-center gap-8 p-[50px]">
          <div className=" 2xl:w-[35%] xl:w-[40%] lg:w-[50%] w-[100%] lg:order-1 order-2">
            <AboutImage src={home_solutions} />
          </div>
          <div className="flex flex-col gap-2 2xl:w-[35%] xl:w-[40%] lg:w-[50%] w-[100%] lg:order-2 order-1">
            <AboutTitle title="Our Home Solutions" />
            <AboutPara
              para="At Secure Sight Inc, we understand that the safety of your home
            and property is paramount. Our home security offerings are designed
            to provide 24-hour surveillance, ensuring constant protection for
            you and your loved ones. Key features include:"
            />
            <ul className="list-disc">
              <li>
                <AboutLi
                  bold="CCTV and IP Cameras: "
                  normal="High-definition solutions with remote viewing capabilities."
                />
              </li>
              <li>
                <AboutLi
                  bold="State-of-the-Art Security Systems: "
                  normal="Integrating video surveillance, mobile app controls, and professional installations."
                />
              </li>
              <li>
                <AboutLi
                  bold="Motion Detectors and Monitoring Services: "
                  normal="Advanced sensors to detect and deter threats."
                />
              </li>
              <li>
                <AboutLi
                  bold="Cutting-Edge Surveillance: "
                  normal="AI-powered analytics and object detection to provide unparalleled safety for your homes. Our solutions are designed to adapt to your unique requirements, ensuring that every home is a fortress"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center lg:flex-row flex-col justify-center gap-8 p-[50px]">
          <div className="flex flex-col gap-2 2xl:w-[35%] xl:w-[40%] lg:w-[50%] w-[100%]">
            <AboutTitle title="Our Business Solutions" />
            <AboutPara para="Protecting your assets, employees, and operations is crucial for every business. Secure Sight Inc specializes in creating robust security systems tailored to the complexities of commercial spaces. Our business solutions include:" />
            <ul className="list-disc">
              <li>
                <AboutLi
                  bold="Access Control: "
                  normal="Manage entry points and restricted areas with precision."
                />
              </li>
              <li>
                <AboutLi
                  bold="Building Automation and Management Systems (BMS): "
                  normal="Streamline operations with integrated security solutions."
                />
              </li>
              <li>
                <AboutLi
                  bold="Fire Protection and Central Monitoring: "
                  normal="Comprehensive systems to safeguard against threats."
                />
              </li>
              <li>
                <AboutLi
                  bold="Jobsite Security Solutions: "
                  normal="Ensuring the safety of construction sites and other high-risk areas. Whether you operate in Toronto, Oshawa, Hamilton, or Burlington, our customizable security packages provide peace of mind and operational efficiency."
                />
              </li>
            </ul>
          </div>
          <div className=" 2xl:w-[35%] xl:w-[40%] lg:w-[50%] w-[100%]">
            <AboutImage src={business_solutions} />
          </div>
        </div>

        <div className="flex items-center lg:flex-row flex-col justify-center gap-8 p-[50px]">
          <div className=" 2xl:w-[35%] xl:w-[40%] lg:w-[50%] w-[100%] lg:order-1 order-2">
            <AboutImage src={products} />
          </div>
          <div className="flex flex-col gap-2 2xl:w-[35%] xl:w-[40%] lg:w-[50%] w-[100%] lg:order-2 order-1">
            <AboutTitle title="Our Security Products" />
            <AboutPara para="Secure Sight Inc takes pride in offering a wide array of cutting-edge security products that redefine industry standards:" />
            <ul className="list-disc">
              <li>
                <AboutLi
                  bold="CCTV and 4G Network Cameras: "
                  normal="Reliable, high-resolution monitoring."
                />
              </li>
              <li>
                <AboutLi
                  bold="AI-Powered Surveillance: "
                  normal="Advanced facial recognition, bandwidth optimization, and device-agnostic platforms."
                />
              </li>
              <li>
                <AboutLi
                  bold="Motion Detectors and Alarm Systems: "
                  normal="Equipped with 24/7 monitoring services."
                />
              </li>
              <li>
                <AboutLi
                  bold="Building Automation and Mobile App Integrations: "
                  normal="Enabling seamless control of security systems from any location. Every product we offer reflects our commitment to quality, innovation, and customer satisfaction."
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center lg:flex-row flex-col justify-center gap-8 p-[50px]">
          <div className="flex flex-col gap-2 2xl:w-[35%] xl:w-[40%] lg:w-[50%] w-[100%]">
            <AboutTitle title="Our Vision" />
            <AboutPara para="At Secure Sight Inc, we deliver comprehensive security solutions tailored to meet the needs of both homeowners and businesses. From 24-hour surveillance to advanced access control systems, we are committed to safeguarding what matters most. With cutting-edge technology, professional installations, and exceptional customer service, we ensure peace of mind across Ontario. Choose Secure Sight Inc and stay one step ahead of potential threats. Contact us today to learn how we can elevate your security posture." />
          </div>
          <div className=" 2xl:w-[35%] xl:w-[40%] lg:w-[50%] w-[100%]">
            <AboutImage src={vision} />
          </div>
        </div>
      </div>

      {/* Review Component */}
      <div className="bg-gray-100">
        <Title
          heading="Happy Customers"
          des="We provide best customer service. Look at what our customers say about us"
        />

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 text-center justify-center xl:w-[75%] w-full mx-auto p-10">
          <Review
            des="Secure Sight Inc has installed security cameras at BLS offices across GTA, Ontario. We are extremely satisfied with their prompt and efficient service."
            src={review_1}
            customer_name="Reagan Saphire"
            position="(IT Manager - Canada)"
          />
          <Review
            des="We (Global Analytical Laboratories) recently upgraded our Security System with Secure Sight, highly recommend their professional service."
            src={review_2}
            customer_name="Amandeep"
            position="(MD)"
          />
          <Review
            des="Secure Sight Inc has successfully installed security cameras at our Mississauga office in Greater Toronto Area (GTA), Ontario. We are thoroughly impressed services."
            src={review_3}
            customer_name="Rana Sajjad"
            position="(Management)"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
