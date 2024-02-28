import logo from "./assets/white-logo.svg";
import playStore from "./assets/Google-play.svg";
import appleStore from "./assets/app-store.svg";
import linkedin from "./assets/linkedin.svg";
import facebook from "./assets/facebook.svg";
import twitter from "./assets/twitter.svg";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [input, setInput] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === "") {
      toast.error("Please input your email.");
    } else if (!validateEmail(input)) {
      toast.error("Please add a valid email.");
    } else {
      toast.success("Submitted!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070707f2] lg:p-8 p-5">
      <header className="lg:w-[5%] md:w-[5%] w-[15%] h-auto">
        <img src={logo} alt="Logo" className="w-full h-full" />
      </header>

      <section className="m-4 flex items-center gap-1 justify-center flex-col mx-auto flex-1 text-[#dedede]">
        <h1 className="lg:text-[95px] text-[40px] md:text-[60px] font-bold gradient-text">
          Coming Soon
        </h1>
        <p className="lg:text-[25px] text-[19px] font-semibold text-center">
          Your One-Stop App for Effortless Auto Maintenance & Repair.{" "}
        </p>
        {/* <p className="text-center mt-3 lg:text-[16px] text-[14px] text-white">
          Register for free, Compare, Select, and Secure Your Appointment <br />
          Anywhere, Anytime, at Your Home or Preferred Garage
        </p> */}
        <form
          method="POST"
          action=""
          className="flex mt-6 w-full border rounded-lg max-w-[500px]"
        >
          <input
            type="email"
            placeholder="example@gmail.com"
            required
            value={input}
            onChange={handleChange}
            className="bg-none bg-transparent outline-none focus:none px-2 py-3 w-full placeholder:text-[#dedede]"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="full bg-[white] text-black rounded-lg w-[150px] p-2 transition-all hover:opacity-90 transistion-300  text-[16px] font-semibold"
          >
            Notify Me
          </button>
        </form>
        <p className="mt-5 text-sm italic">Stay tuned and we will update you</p>
      </section>

      <footer className="mt-auto">
        <div className="flex lg:flex-row flex-col gap-5 items-center justify-between">
          <div className="flex items-center gap-5 lg:mb-0 md:mb-0 mb-10">
            <img
              src={facebook}
              alt="facebook icon"
              className="w-[20px] h-auto cursor-pointer"
            />
            <img
              src={linkedin}
              alt="facebook icon"
              className="w-[20px] h-auto cursor-pointer"
            />
            <img
              src={twitter}
              alt="facebook icon"
              className="w-[20px] h-auto cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-5">
            <img
              src={playStore}
              alt="Google play logo"
              className="w-[120px] h-auto cursor-pointer"
            />
            <img
              src={appleStore}
              alt="Apple store logo"
              className="w-[120px] h-auto cursor-pointer"
            />
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}
