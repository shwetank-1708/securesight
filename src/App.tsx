import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Contact from "./Pages/Resources/Contact";
import HomeSecurity from "./Pages/Residential/HomeSecurity";
import VideoMonitoring from "./Pages/Residential/VideoMonitoring";
import EnergyManagement from "./Pages/Residential/EnergyManagement";
import AccessControl from "./Pages/Residential/AccessControl";
import Apps from "./Pages/Residential/Apps";
import BusinessSecurityAlarm from "./Pages/Business/BusinessSecurityAlarm";
import SurveillanceSolutions from "./Pages/Business/SurveillanceSolutions";
import BusinessAccessControl from "./Pages/Business/BusinessAccessControl";
import Qolsys from "./Pages/Products/Qolsys";
import Hikvision from "./Pages/Products/Hikvision";
import AlarmDotCom from "./Pages/Products/AlarmDotCom";
import Honeywell from "./Pages/Products/Honeywell";
import Blog from "./Pages/Resources/Blog";
import Careers from "./Pages/Resources/Careers";
import ScrollToTop from "./Components/ScrollToTop";
import Login from "./Pages/Resources/Login";
import SignUp from "./Pages/Resources/SignUp";
import Admin from "./Pages/AdminLogin";
import Quotation from "./Pages/Resources/Quotation";
import BlogDetails from "./Components/Admin Components/BlogDetails";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminSignup from "./Pages/AdminSignUp";
import Advance from "./Pages/Features/Advance";
import Industry from "./Pages/Features/Industry";
import Remote from "./Pages/Features/Remote";
import Customization from "./Pages/Features/Customization";
import Environmental from "./Pages/Features/Environmental";
import UserFriendly from "./Pages/Features/UserFriendly";
import IntrusionDetectionSystems from "./Pages/Business/IntrusionDetectionSystems";
// import Page from "./blogs/[id]/page";

function App() {
  return (
    <div className="font-merriweather">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/*  --------------------------------------------------Residential Pages-------------------------------------------------- */}
        <Route path="/residential/home_security" element={<HomeSecurity />} />
        <Route
          path="/residential/video_monitoring"
          element={<VideoMonitoring />}
        />
        <Route
          path="/residential/energy_management"
          element={<EnergyManagement />}
        />
        <Route path="/residential/access_control" element={<AccessControl />} />
        <Route path="/residential/apps" element={<Apps />} />

        {/*  --------------------------------------------------Business Pages-------------------------------------------------- */}
        <Route
          path="/business/business_security_alarm"
          element={<BusinessSecurityAlarm />}
        />
        <Route
          path="/business/surveillance_solutions"
          element={<SurveillanceSolutions />}
        />
        <Route
          path="/business/business_access_control"
          element={<BusinessAccessControl />}
        />
        <Route
          path="/business/intrusion_detection_systems"
          element={<IntrusionDetectionSystems />}
        />

        {/*  --------------------------------------------------Products Pages-------------------------------------------------- */}
        <Route path="/products/qolsys" element={<Qolsys />} />
        <Route path="/products/hikvision" element={<Hikvision />} />
        <Route path="/products/alarmdotcom" element={<AlarmDotCom />} />
        <Route path="/products/honeywell" element={<Honeywell />} />

        {/*  --------------------------------------------------Resources Pages-------------------------------------------------- */}
        <Route path="/resources/contact" element={<Contact />} />
        <Route path="/resources/blog" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/resources/careers" element={<Careers />} />
        <Route path="/resources/about" element={<About />} />

        {/*  --------------------------------------------------Other Pages-------------------------------------------------- */}
        <Route path="/resources/login" element={<Login />} />
        <Route path="/resources/signup" element={<SignUp />} />
        <Route path="/resources/quotation" element={<Quotation />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/adminDashboard/*" element={<AdminDashboard />} />
        {/* <Route path="/blogs/:id" element={<Page />} /> */}
        <Route path="/admin/adminSignUp" element={<AdminSignup />} />

        {/* --------------------------------------------------Feature Pages-------------------------------------------------- */}
        <Route path="/features/advance_ technology" element={<Advance />} />
        <Route path="/features/industry_experience" element={<Industry />} />
        <Route path="/features/remote_access" element={<Remote />} />
        <Route path="/features/customization" element={<Customization />} />
        <Route
          path="/features/environmental_monitoring"
          element={<Environmental />}
        />
        <Route path="/features/user_friendly" element={<UserFriendly />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
