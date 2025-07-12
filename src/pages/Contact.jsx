import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    childAge: "",
    message: "",
    bestTime: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_8oczorg",
        "template_i3e4kkn",
        formData,
        "eUMxGAR40TC1xKoT9"
      );
      toast.success("✅ Thank you! Your message has been sent.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        childAge: "",
        message: "",
        bestTime: "",
      });
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-7 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Get in Touch With Us
        </h1>
        <p className="text-lg md:text-xl">
          Let’s talk about how we can help your child grow and thrive.
        </p>
      </div>

      {/* Form Section */}
      <section className="mx-auto p-6 bg-white rounded shadow-md pb-16 pt-5 px-6 md:px-16">
        <h2 className="text-3xl font-semibold mb-10 text-center text-blue-800">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="flex flex-col justify-center text-gray-800 space-y-6">
            <h3 className="text-2xl font-bold text-blue-700">
              We’re here for you
            </h3>
            <p>
              Whether you’re looking for help, guidance, or have general
              questions — we’re happy to connect with you. Our team is dedicated
              to providing the right support for your child’s growth.
            </p>
            <p className="italic text-blue-600">
              “Every child is a different kind of flower, and all together make
              this world a beautiful garden.”
            </p>
          </div>

          {/* Right Form Section */}
          <form
            onSubmit={handleSubmit}
            className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                label: "Full Name",
                name: "fullName",
                type: "text",
                placeholder: "Your full name",
              },
              {
                label: "Email",
                name: "email",
                type: "email",
                placeholder: "Your email address",
              },
              {
                label: "Phone Number",
                name: "phone",
                type: "tel",
                placeholder: "Your phone number",
              },
              {
                label: "Child Age",
                name: "childAge",
                type: "text",
                placeholder: "e.g., 6 years",
              },
            ].map(({ label, name, type, placeholder }, index) => (
              <motion.div
                key={name}
                className="flex flex-col gap-1"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <label htmlFor={name} className="font-medium text-gray-700">
                  {label}
                </label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  required
                  className="border border-gray-300 bg-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>
            ))}

            {/* Message - Full width */}
            <motion.div
              className="md:col-span-2 flex flex-col gap-1"
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <label htmlFor="message" className="font-medium text-gray-700">
                I want to contact you about
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your reason here"
                required
                className="border border-gray-300 bg-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </motion.div>

            {/* Best Time - Full width */}
            <motion.div
              className="md:col-span-2 flex flex-col gap-1"
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <label htmlFor="bestTime" className="font-medium text-gray-700">
                Best time to reach you
              </label>
              <input
                id="bestTime"
                name="bestTime"
                type="text"
                value={formData.bestTime}
                onChange={handleChange}
                placeholder="e.g., Between 2PM - 4PM"
                required
                className="border border-gray-300 bg-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>

            {/* Submit - Full width centered */}
            <motion.div
              className="md:col-span-2 text-center"
              custom={6}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <button
                type="submit"
                disabled={loading}
                className={`${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-700 hover:bg-blue-800"
                } text-white px-6 py-3 rounded transition`}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </motion.div>
          </form>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </section>
    </>
  );
};

export default ContactForm;
