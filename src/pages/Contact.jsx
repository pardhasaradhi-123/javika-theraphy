import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    fullName: "",
    email: "",
    phone: "",
    contactAbout: "",
    centreChoice: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const titles = ["Mr.", "Mrs.", "Ms.", "Dr."];
  const contactAboutOptions = [
    "Autism Diagnosis",
    "Therapy Sessions",
    "Training Programs",
    "General Inquiry",
  ];
  const centreOptions = ["Centre A", "Centre B", "Centre C", "Centre D"];

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
        "service_8oczorg", // Your EmailJS service ID
        "template_i3e4kkn", // Your EmailJS template ID
        formData,
        "eUMxGAR40TC1xKoT9" // Your EmailJS public key
      );
      toast.success("✅ Thank you! Your message has been sent.");
      setFormData({
        title: "",
        fullName: "",
        email: "",
        phone: "",
        contactAbout: "",
        centreChoice: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto p-6 bg-white rounded shadow-md pb-16 pt-5 px-16">
      <h2 className="text-3xl font-semibold mb-10 text-center text-blue-800">
        Contact Us
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Motivational Section */}
        <div className="flex flex-col justify-center text-gray-800 space-y-6">
          <h3 className="text-2xl font-bold text-blue-700">
            We’re here for you
          </h3>
          <p>
            Whether you’re looking for help, guidance, or have general questions
            — we’re happy to connect with you. Our team is dedicated to
            providing the right support for your child’s growth.
          </p>
          <p className="italic text-blue-600">
            “Every child is a different kind of flower, and all together make
            this world a beautiful garden.”
          </p>
        </div>

        {/* Right Contact Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          {[
            {
              label: "Title",
              name: "title",
              options: titles,
              placeholder: "Select Title",
            },
            {
              label: "I want to contact you about",
              name: "contactAbout",
              options: contactAboutOptions,
              placeholder: "Select a topic",
            },
            {
              label: "Centre of your choice",
              name: "centreChoice",
              options: centreOptions,
              placeholder: "Select a centre",
            },
          ].map(({ label, name, options, placeholder }) => (
            <div key={name} className="col-span-2 md:col-span-1">
              <label
                htmlFor={name}
                className="block mb-1 font-medium text-gray-700"
              >
                {label}
              </label>
              <select
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                className="w-full border bg-gray-200 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  {placeholder}
                </option>
                {options.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          ))}

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
          ].map(({ label, name, type, placeholder }) => (
            <div key={name} className="col-span-2 md:col-span-1">
              <label
                htmlFor={name}
                className="block mb-1 font-medium text-gray-700"
              >
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
                className="w-full border border-gray-300 bg-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <div className="col-span-2">
            <label
              htmlFor="message"
              className="block mb-1 font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
              className="w-full border border-gray-300 bg-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="col-span-2 text-center">
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
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default ContactForm;
