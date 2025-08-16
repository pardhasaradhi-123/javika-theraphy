import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const BookAppointment = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    childAge: "",
    message: "",
    bestTime: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit number";
    }
    if (!formData.date) newErrors.date = "Preferred date is required";

    if (!formData.childAge.trim()) newErrors.childAge = "Child age is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.bestTime.trim()) newErrors.bestTime = "Best time is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);
    setSuccessMessage("");

    // Replace with your EmailJS credentials
    const serviceID = "service_8oczorg";
    const templateID = "template_pysqfma";
    const publicKey = "eUMxGAR40TC1xKoT9";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setIsSending(false);
        setSuccessMessage("Your appointment has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          childAge: "",
          message: "",
          bestTime: "",
        });

        setTimeout(() => {
          onClose(); // close modal after a short delay
        }, 2000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setIsSending(false);
        setSuccessMessage("Failed to send appointment. Please try again.");
      });
  };

  const inputFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Full name",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "example@gmail.com",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Mobile number",
    },
    { name: "date", label: "Preferred Date", type: "date" },
    {
      name: "childAge",
      label: "Child Age",
      type: "text",
      placeholder: "e.g., 5 years",
      colSpan: 2,
    },
    {
      name: "message",
      label: "I want to contact you about",
      type: "textarea",
      placeholder: "Reason for appointment",
      colSpan: 2,
    },
    {
      name: "bestTime",
      label: "Best time to reach you",
      type: "text",
      placeholder: "e.g., Between 2PM - 4PM",
      colSpan: 2,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 w-full max-w-lg relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-700 text-center">
          Book Appointment
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {inputFields.map(
              ({ name, label, type, placeholder, colSpan = 1 }) => (
                <div
                  key={name}
                  className={colSpan === 2 ? "sm:col-span-2" : ""}
                >
                  <label className="block mb-1 text-sm font-medium">
                    {label}
                  </label>

                  {type === "textarea" ? (
                    <textarea
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      rows={3}
                      placeholder={placeholder}
                      className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-200 resize-none ${
                        errors[name] ? "border-red-500" : ""
                      }`}
                    />
                  ) : (
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-200 ${
                        errors[name] ? "border-red-500" : ""
                      }`}
                    />
                  )}

                  {errors[name] && (
                    <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
                  )}
                </div>
              )
            )}
          </div>

          {successMessage && (
            <p className="text-center text-sm mt-2 text-green-600">
              {successMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition duration-200 mt-4 disabled:opacity-50"
          >
            {isSending ? "Sending..." : "Submit Appointment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
