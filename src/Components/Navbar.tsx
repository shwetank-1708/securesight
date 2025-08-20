import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [residential, setResidential] = useState<boolean>(false);
  const [business, setBusiness] = useState<boolean>(false);
  const [products, setProducts] = useState<boolean>(false);
  const [industries, setIndustries] = useState<boolean>(false);
  const [resources, setResources] = useState<boolean>(false);

  const toggleNavbar = () => {
    setVisible(!visible);
  };

  return (
    <div
      className={`sticky top-0 bg-white z-50 font-Montserrat ${
        visible ? "lg:overflow-hidden" : ""
      }`}
    >
      {/* -------------------------------------------------- Desktop - Contact Info Section -------------------------------------------------- */}

      <div className="flex sm:flex-row flex-col items-center justify-around text-white bg-secondary py-2">
        <div className="flex items-center gap-2 px-2">
          <BsTelephoneFill />
          <a href="tel:+1 236 332 3880">+1 236 332 3880</a>
        </div>
        <div className="flex items-center gap-2 px-2">
          <IoMail />
          <p>info@securesight.com</p>
        </div>
      </div>

      <div className="flex items-center md:justify-around justify-between p-2">
        {/* -------------------------------------------------- Desktop - Logo Section -------------------------------------------------- */}

        <div className="w-[200px]">
          <NavLink
            to="/"
            onClick={() => {
              setResidential(false);
              setBusiness(false);
              setProducts(false);
              setIndustries(false);
              setResources(false);
              setVisible(false);
            }}
          >
            {" "}
            <img src={logo} />
          </NavLink>
        </div>

        <div className="lg:flex gap-6 font-bold hidden">
          {/* -------------------------------------------------- Desktop - Home Section -------------------------------------------------- */}

          {/* <NavLink
            to="/"
            onClick={() => {
              setResidential(false);
              setBusiness(false);
              setProducts(false);
              setIndustries(false);
              setResources(false);
            }}
            className="hover:text-primary"
          >
            <p>HOME</p>
          </NavLink> */}

          {/* -------------------------------------------------- Desktop - About Section -------------------------------------------------- */}
          {/* <NavLink
            to="/about"
            onClick={() => {
              setResidential(false);
              setBusiness(false);
              setProducts(false);
              setResources(false);
            }}
            className="hover:text-primary"
          >
            <p>ABOUT</p>
          </NavLink> */}

          {/* -------------------------------------------------- Desktop - Residential Section -------------------------------------------------- */}
          <div className="cursor-pointer">
            <div
              className="flex items-center gap-1 hover:text-primary"
              onClick={() => {
                setResidential(!residential);
                setBusiness(false);
                setProducts(false);
                setIndustries(false);
                setResources(false);
              }}
            >
              <p className="">RESIDENTIAL</p>
              <FaAngleDown />
            </div>

            <div
              className={`absolute bg-white flex-col gap-2 p-4 ${
                residential ? "flex" : "hidden"
              }`}
            >
              <NavLink
                to="/residential/home_security"
                onClick={() => {
                  setResidential(false);
                }}
                className="hover:text-primary"
              >
                HOME SECURITY
              </NavLink>
              <NavLink
                to="/residential/video_monitoring"
                onClick={() => {
                  setResidential(false);
                }}
                className="hover:text-primary"
              >
                VIDEO MONITORING
              </NavLink>
              <NavLink
                to="/residential/energy_management"
                onClick={() => {
                  setResidential(false);
                }}
                className="hover:text-primary"
              >
                ENERGY MANAGEMENT
              </NavLink>
              <NavLink
                to="/residential/access_control"
                onClick={() => {
                  setResidential(false);
                }}
                className="hover:text-primary"
              >
                ACCESS CONTROL
              </NavLink>
              <NavLink
                to="/residential/apps"
                onClick={() => {
                  setResidential(false);
                }}
                className="hover:text-primary"
              >
                APPS
              </NavLink>
            </div>
          </div>

          {/* -------------------------------------------------- Desktop - Business Section -------------------------------------------------- */}
          <div className="cursor-pointer">
            <div
              className="flex items-center gap-1 hover:text-primary"
              onClick={() => {
                setBusiness(!business), setResidential(false);
                setProducts(false);
                setIndustries(false);
                setResources(false);
              }}
            >
              <p>BUSINESS</p>
              <FaAngleDown />
            </div>

            <div
              className={`absolute bg-white flex-col gap-2 p-4 ${
                business ? "flex" : "hidden"
              }`}
            >
              <NavLink
                to="/business/business_security_alarm"
                onClick={() => {
                  setBusiness(false);
                }}
                className="hover:text-primary"
              >
                BUSINESS SECURITY ALARM
              </NavLink>
              <NavLink
                to="/business/surveillance_solutions"
                onClick={() => {
                  setBusiness(false);
                }}
                className="hover:text-primary"
              >
                SURVEILLANCE SOLUTIONS
              </NavLink>
              <NavLink
                to="/business/business_access_control"
                onClick={() => {
                  setBusiness(false);
                }}
                className="hover:text-primary"
              >
                BUSINESS ACCESS CONTROL
              </NavLink>
              <NavLink
                to="/business/intrusion_detection_systems"
                onClick={() => {
                  setBusiness(false);
                }}
                className="hover:text-primary"
              >
                INTRUSION DETECTION SYSTEMS
              </NavLink>
            </div>
          </div>

          {/* -------------------------------------------------- Desktop - Products Section -------------------------------------------------- */}
          <div className="cursor-pointer">
            <div
              className="flex items-center gap-1 hover:text-primary"
              onClick={() => {
                setProducts(!products);
                setResidential(false);
                setBusiness(false);
                setIndustries(false);
                setResources(false);
              }}
            >
              <p>PRODUCTS</p>
              <FaAngleDown />
            </div>

            <div
              className={`absolute bg-white flex-col gap-2 p-4 ${
                products ? "flex" : "hidden"
              }`}
            >
              <NavLink
                to="/products/qolsys"
                onClick={() => {
                  setProducts(false);
                }}
                className="hover:text-primary"
              >
                QOLSYS IQ PANEL 4
              </NavLink>
              <NavLink
                to="/products/hikvision"
                onClick={() => {
                  setProducts(false);
                }}
                className="hover:text-primary"
              >
                HIKVISION
              </NavLink>
              <NavLink
                to="/products/alarmdotcom"
                onClick={() => {
                  setProducts(false);
                }}
                className="hover:text-primary"
              >
                ALARM.COM
              </NavLink>
              <NavLink
                to="/products/honeywell"
                onClick={() => {
                  setProducts(false);
                }}
                className="hover:text-primary"
              >
                HONEYWELL
              </NavLink>
            </div>
          </div>

          {/* -------------------------------------------------- Desktop - Industries Section -------------------------------------------------- */}
          <div className="cursor-pointer">
            <div
              className="flex items-center gap-1 hover:text-primary"
              onClick={() => {
                setIndustries(!industries);
                setResources(false);
                setResidential(false);
                setBusiness(false);
                setProducts(false);
              }}
            >
              <p>INDUSTRIES</p>
              <FaAngleDown />
            </div>

            <div
              className={`absolute bg-white p-4 flex-col gap-2 ${
                industries ? "flex" : "hidden"
              }`}
            >
              <p>COMMERCIAL OFFICES</p>
              <p>UNIVERSITIES</p>
              <p>HEALTHCARE</p>
              <p>MANUFACTURING</p>
              <p>WAREHOUSE</p>
              <p>SHOPPING CENTERS</p>
              <p>RETAIL</p>
              <p>FINANCE & BANKING</p>
              <p>GOVERNMENT</p>
              <p>DATA CENTERS</p>
            </div>
          </div>

          {/* -------------------------------------------------- Desktop - Resources Section -------------------------------------------------- */}
          <div className="cursor-pointer">
            <div
              className="flex items-center gap-1 hover:text-primary"
              onClick={() => {
                setResources(!resources);
                setResidential(false);
                setBusiness(false);
                setProducts(false);
                setIndustries(false);
              }}
            >
              <p>RESOURCES</p>
              <FaAngleDown />
            </div>

            <div
              className={`absolute bg-white flex-col gap-2 p-4 ${
                resources ? "flex" : "hidden"
              }`}
            >
              <NavLink
                to="/resources/contact"
                onClick={() => {
                  setResources(false);
                }}
                className="hover:text-primary"
              >
                CONTACT
              </NavLink>

              <NavLink
                to="/resources/blog"
                onClick={() => {
                  setResources(false);
                }}
                className="hover:text-primary"
              >
                BLOG
              </NavLink>

              <NavLink
                to="/resources/careers"
                onClick={() => {
                  setResources(false);
                }}
                className="hover:text-primary"
              >
                CAREERS
              </NavLink>

              <NavLink
                to="/resources/about"
                onClick={() => {
                  setResources(false);
                }}
                className="hover:text-primary"
              >
                ABOUT
              </NavLink>

              {/* <NavLink
                to="/resources/login"
                onClick={() => {
                  setResources(false);
                }}
                className="hover:text-primary"
              >
                LOGIN
              </NavLink>
              <NavLink
                to="/resources/signup"
                onClick={() => {
                  setResources(false);
                }}
                className="hover:text-primary"
              >
                SIGNUP
              </NavLink>
              <NavLink
                to="/resources/admin"
                onClick={() => {
                  setResources(false);
                }}
                className="hover:text-primary"
              >
                ADMIN
              </NavLink>
              <NavLink
                to="/resources/quotation"
                onClick={() => {
                  setResources(false);
                }}
                className="hover:text-primary"
              >
                QUOTATION
              </NavLink> */}
            </div>
          </div>
        </div>

        {/* -------------------------------------------------- Hamburger Icon -------------------------------------------------- */}
        <div className="cursor-pointer lg:hidden text-2xl">
          <TiThMenu onClick={() => toggleNavbar()} />
        </div>
      </div>

      <div
        className={`lg:hidden flex-col gap-4 font-bold p-2 h-screen absolute bg-white w-full ${
          visible ? "flex" : "hidden"
        }`}
      >
        {/* -------------------------------------------------- Mobile - Home Section -------------------------------------------------- */}
        {/* <NavLink
          to="/"
          onClick={() => {
            setVisible(false);
            setResidential(false);
            setBusiness(false);
            setProducts(false);
            setResources(false);
          }}
          className="hover:text-primary"
        >
          <p>HOME</p>
        </NavLink> */}

        {/* -------------------------------------------------- Mobile - About Section -------------------------------------------------- */}
        {/* <NavLink
          to="/about"
          onClick={() => {
            setVisible(false);
            setResidential(false);
            setBusiness(false);
            setProducts(false);
            setResources(false);
          }}
          className="hover:text-primary"
        >
          <p>ABOUT</p>
        </NavLink> */}

        {/* -------------------------------------------------- Mobile - Residential Section -------------------------------------------------- */}
        <div className="cursor-pointer">
          <div
            className="flex items-center gap-1 hover:text-primary"
            onClick={() => {
              setResidential(!residential);
              setBusiness(false);
              setProducts(false);
              setIndustries(false);
              setResources(false);
            }}
          >
            <p>RESIDENTIAL</p>
            <FaAngleDown />
          </div>

          <div
            className={`flex flex-col gap-2 p-2 ${
              residential ? "flex" : "hidden"
            }`}
          >
            <NavLink
              to="/residential/home_security"
              onClick={() => {
                setVisible(false);
              }}
              className="hover:text-primary"
            >
              HOME SECURITY
            </NavLink>
            <NavLink
              to="/residential/video_monitoring"
              onClick={() => {
                setVisible(false);
              }}
              className="hover:text-primary"
            >
              VIDEO MONITORING
            </NavLink>
            <NavLink
              to="/residential/energy_management"
              onClick={() => {
                setVisible(false);
              }}
              className="hover:text-primary"
            >
              ENERGY MANAGEMENT
            </NavLink>
            <NavLink
              to="/residential/access_control"
              onClick={() => {
                setVisible(false);
              }}
              className="hover:text-primary"
            >
              ACCESS CONTROL
            </NavLink>
            <NavLink
              to="/residential/apps"
              onClick={() => {
                setVisible(false);
              }}
              className="hover:text-primary"
            >
              APPS
            </NavLink>
          </div>
        </div>

        {/* -------------------------------------------------- Mobile - Business Section -------------------------------------------------- */}
        <div className="cursor-pointer">
          <div
            className="flex items-center gap-1 hover:text-primary"
            onClick={() => {
              setBusiness(!business), setResidential(false);
              setProducts(false);
              setIndustries(false);
              setResources(false);
            }}
          >
            <p>BUSINESS</p>
            <FaAngleDown />
          </div>

          <div
            className={`flex flex-col gap-2 p-2 ${
              business ? "flex" : "hidden"
            }`}
          >
            <NavLink
              to="/business/business_security_alarm"
              onClick={() => {
                setVisible(false);
              }}
              className="hover:text-primary"
            >
              BUSINESS SECURITY ALARM
            </NavLink>
            <NavLink
              to="/business/surveillance_solutions"
              onClick={() => {
                setVisible(false);
              }}
              className="hover:text-primary"
            >
              SURVEILLANCE SOLUTIONS
            </NavLink>
            <NavLink
              to="/business/business_access_control"
              onClick={() => {
                setVisible(false);
              }}
              className="hover:text-primary"
            >
              BUSINESS ACCESS CONTROL
            </NavLink>
            <NavLink
              to="/business/intrusion_detection_systems"
              onClick={() => {
                setVisible(false);
              }}
              className="hover:text-primary"
            >
              INTRUSION DETECTION SYSTEMS
            </NavLink>
          </div>
        </div>

        {/* -------------------------------------------------- Mobile - Products Section -------------------------------------------------- */}
        <div className="cursor-pointer">
          <div
            className="flex items-center gap-1 hover:text-primary"
            onClick={() => {
              setProducts(!products);
              setResidential(false);
              setBusiness(false);
              setIndustries(false);
              setResources(false);
            }}
          >
            <p>PRODUCTS</p>
            <FaAngleDown />
          </div>

          <div
            className={`flex flex-col gap-2 p-2 ${
              products ? "flex" : "hidden"
            }`}
          >
            <NavLink
              to="/products/qolsys"
              onClick={() => {
                setVisible(false);
              }}
              className="hover:text-primary"
            >
              QOLSYS IQ PANEL 4
            </NavLink>
            <NavLink
              to="/products/hikvision"
              onClick={() => {
                setVisible(false);
              }}
              className="hover:text-primary"
            >
              HIKVISION
            </NavLink>
            <NavLink
              to="/products/alarmdotcom"
              onClick={() => {
                setVisible(false);
              }}
              className="hover:text-primary"
            >
              ALARM.COM
            </NavLink>
            <NavLink
              to="/products/honeywell"
              onClick={() => {
                setVisible(false);
              }}
              className="hover:text-primary"
            >
              HONEYWELL
            </NavLink>
          </div>
        </div>

        {/* -------------------------------------------------- Mobile - Industries Section -------------------------------------------------- */}
        <div className="cursor-pointer">
          <div
            className="flex items-center gap-1 hover:text-primary"
            onClick={() => {
              setIndustries(!industries);
              setResidential(false);
              setBusiness(false);
              setProducts(false);
              setResources(false);
            }}
          >
            <p>INDUSTRIES</p>
            <FaAngleDown />
          </div>

          <div
            className={`flex flex-col gap-2 p-2 ${
              industries ? "flex" : "hidden"
            }`}
          >
            <p>COMMERCIAL OFFICES</p>
            <p>UNIVERSITIES</p>
            <p>HEALTHCARE</p>
            <p>MANUFACTURING</p>
            <p>WAREHOUSE</p>
            <p>SHOPPING CENTERS</p>
            <p>RETAIL</p>
            <p>FINANCE & BANKING</p>
            <p>GOVERNMENT</p>
            <p>DATA CENTERS</p>
          </div>
        </div>

        {/* -------------------------------------------------- Mobile - Resources Section -------------------------------------------------- */}
        <div className="cursor-pointer">
          <div
            className="flex items-center gap-1 hover:text-primary"
            onClick={() => {
              setResources(!resources);
              setResidential(false);
              setBusiness(false);
              setProducts(false);
              setIndustries(false);
            }}
          >
            <p>RESOURCES</p>
            <FaAngleDown />
          </div>

          <div
            className={`flex flex-col gap-2 p-2 ${
              resources ? "flex" : "hidden"
            }`}
          >
            <NavLink
              to="/resources/contact"
              onClick={() => {
                setVisible(false);
              }}
              className="hover:text-primary"
            >
              CONTACT
            </NavLink>
            <NavLink
              to="/resources/blog"
              onClick={() => {
                setVisible(false);
              }}
              className="hover:text-primary"
            >
              BLOG
            </NavLink>
            <NavLink
              to="/resources/careers"
              onClick={() => {
                setVisible(false);
              }}
              className="hover:text-primary"
            >
              CAREERS
            </NavLink>
            <NavLink
              to="/resources/about"
              onClick={() => {
                setVisible(false);
              }}
              className="hover:text-primary"
            >
              ABOUT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
