import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const SITE_KEY = "6Le3NDMrAAAAAOEbS9TUPybjBPN0tD5Pe6_jJobG"
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    reCaptchaVerified: false,
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "email") setEmailError("");
    if (e.target.name === "password") setPasswordError("");
  };

  const handleReCaptchaChange = (value) => {
    const isVerified = !!value;
    setFormData((prevData) => ({
      ...prevData,
      reCaptchaVerified: isVerified,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    setEmailError("");
    setPasswordError("");

    if (formData.email !== "admin@gmail.com") {
      setEmailError("Invalid email");
      isValid = false;
    }

    if (formData.password !== "admin@123") {
      setPasswordError("Invalid password");
      isValid = false;
    }

    if (!formData.reCaptchaVerified) {
      alert("Please verify that you're not a robot.");
      isValid = false;
    }

    if (isValid) {
      // alert("Login Successful");
      Navigate("/dashboard");
    }
  };
  return (
    <div className="flex justify-center bg-gray-300 h-screen items-center">
      <form className="bg-gray-400 rounded-lg p-10 my-9 shadow-xl" onSubmit={handleSubmit}>
        <h1 className="text-4xl text-center my-10">Login Form</h1>

        <div className="mb-4 flex flex-col">
          <label htmlFor="email">Enter Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="text-xl border-2 border-gray-300 rounded-lg p-1"
            onChange={handleChange}
            value={formData.email}
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="password">Enter Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="text-xl border-2 border-gray-300 rounded-lg p-1"
            onChange={handleChange}
            value={formData.password}
          />
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
        </div>

        <div className="mb-4">
          <ReCAPTCHA sitekey={SITE_KEY} onChange={handleReCaptchaChange} />
        </div>

        <div className="flex justify-center mb-4 text-bold">
          <button type="submit" className="bg-blue-400 py-2 px-4 rounded-lg">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
