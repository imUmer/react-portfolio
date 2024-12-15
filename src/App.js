import "./App.css";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import { increment, decrement, setLoading } from "./redux/actions";
import About from "./components/pages/About";
import "aos/dist/aos.css";
import AOS from "aos";

// image import
import FloatNavbar from "./components/layouts/FloatNavbar";
import Navbar from "./components/layouts/Navbar";
import InfoCard from "./components/layouts/InfoCard";
import GrayGradient from "./components/colors/GrayGradient";
import Skills from "./components/pages/Skills";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Smooth animation duration
      easing: "ease-in-out", // Smooth easing
      once: false, // Allow re-animation on scrolling back
      offset: 100, // Trigger animations earlier
    });
    AOS.refresh(); // Refresh animations to detect new elements
  }, []);

  return (
    <div className="flex flex-col bg-gradient-to-br from-gray-400 via-slate-300 to-gray-200 relative overflow-y-auto">
      <div className="lg:hidden">
        <FloatNavbar />
      </div>
      <GrayGradient />
      {/* Main Content Wrapper */}
      <div className="relative flex flex-col lg:flex-row w-full z-20">
        {/* Left Static Glassy Panel */}
        <div className="lg:w-1/4 lg:sticky h-fit lg:pb-10 pt-6 top-5 lg:top-5 left-3 bg-gray-400 backdrop-blur-md text-black p-6 shadow-lg m-5 rounded-2xl border border-slate-300 ">
          <InfoCard />
        </div>
        {/* Right Scrollable Panel */}
        <div className="w-fit overflow-x-hidden lg:w-3/4 overflow-y-scroll ">
          <div className="lg:sticky z-30 lg:top-5">
            <Navbar />
          </div>
          <div className="max-lg:overflow-y-hidden">
            <About />
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
