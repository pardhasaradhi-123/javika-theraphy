import React, { useState } from "react";

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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    const amount = 50000; // ₹500 in paisa

    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: amount,
      currency: "INR",
      name: "Javika Therapy",
      description: "Appointment Booking",
      handler: function (response) {
        alert("Appointment booked successfully!");
        onClose();
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: {
        color: "#1e40af",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

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
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-200"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-200"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="mobile number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-200"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-200"
              />
            </div>

            {/* Child Age */}
            <div className="sm:col-span-2">
              <label className="block mb-1 text-sm font-medium">
                Child Age
              </label>
              <input
                type="text"
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                placeholder="e.g., 5 years"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-200"
              />
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label className="block mb-1 text-sm font-medium">
                I want to contact you about
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Reason for appointment"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-200 resize-none"
              />
            </div>

            {/* Best Time to Reach */}
            <div className="sm:col-span-2">
              <label className="block mb-1 text-sm font-medium">
                Best time to reach you
              </label>
              <input
                type="text"
                name="bestTime"
                value={formData.bestTime}
                onChange={handleChange}
                placeholder="e.g., Between 2PM - 4PM"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-200"
              />
            </div>
          </div>

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition duration-200 mt-4"
          >
            Thank You
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
