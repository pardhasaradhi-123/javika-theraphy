import React, { useState } from "react";
// import { app } from "../db/db";
import { collection, addDoc } from "firebase/firestore";

const BookAppointment = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
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
      handler: async function (response) {
        // await addDoc(collection(app, "appointments"), {
        //   ...formData,
        //   paymentId: response.razorpay_payment_id,
        //   amount: amount / 100,
        //   createdAt: new Date(),
        // });
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
        <form onSubmit={handlePayment} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
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
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition duration-200 mt-4"
          >
            Pay ₹500 & Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
