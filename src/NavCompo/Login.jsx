import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../src/assets/web Imgs/food-logo.png";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [otpInput, setOtpInput] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleMobileInput = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    if (value.length <= 10) {
      e.target.value = value; // Update the input value
    }
  };

  const sendOtp = (data) => {
    const otp = Math.floor(1000 + Math.random() * 9000);
    setGeneratedOtp(otp);
    setUserName(data.name);
    localStorage.setItem("userName", data.name);
    alert(`OTP Sent to ${data.mobile}: ${otp}`);
    setOtpSent(true);
  };

  const verifyOtp = () => {
    if (parseInt(otpInput) === generatedOtp) {
      setIsLoggedIn(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      alert("Invalid OTP, try again!");
    }
  };

  const onSubmit = (data) => {
    if (!otpSent) {
      sendOtp(data);
    } else {
      verifyOtp();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-400 to-red-600 p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl text-center transform hover:scale-105 transition-transform"
      >
        {isLoggedIn ? (
          <h2 className="text-3xl font-extrabold text-green-600">
            Welcome, {userName}!
          </h2>
        ) : (
          <>
            <div className="flex mb-5">
              <img
                src={Logo}
                alt="Foodie Zone"
                className="w-10 animate-[spin_10s_linear_infinite]"
              />
              <h1 className="text-transparent text-3xl font-extrabold bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
                Foodie Login
              </h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Name"
                  className="w-full p-3 rounded-lg border-2 border-gray-300 text-gray-900 bg-white"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  {...register("mobile", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit number",
                    },
                  })}
                  placeholder="Mobile Number"
                  className="w-full p-3 rounded-lg border-2 border-gray-300 text-gray-900 bg-white"
                  onInput={handleMobileInput}
                  maxLength={10}
                />
                {errors.mobile && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.mobile.message}
                  </p>
                )}
              </div>
              {otpSent && (
                <div className="mb-4">
                  <input
                    type="text"
                    value={otpInput}
                    onChange={(e) => setOtpInput(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter OTP"
                    className="w-full p-3 rounded-lg border-2 border-gray-300 text-gray-900 bg-white"
                    maxLength={4}
                  />
                </div>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-red-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-md"
              >
                {otpSent ? "Verify OTP" : "Send OTP"}
              </motion.button>
            </form>
          </>
        )}
      </motion.div>
      <div className="text-white text-start text-[12px] md:text-lg mb-6 font-semibold px-4">
        <h1 className="text-2xl mt-5">How to Login</h1>
        <p>1: Enter your name.</p>
        <p>2: Enter your Mo.no (10 digits only).</p>
        <p>3: Click the "Send OTP" button.</p>
        <p>4: A popup will appear in your browser with a 4-digit OTP</p>
        <p>5: Enter the OTP you received in the popup.</p>
        <p>6: Click the "Verify OTP" button to complete the login process.</p>
      </div>
    </div>
  );
};

export default LoginForm;