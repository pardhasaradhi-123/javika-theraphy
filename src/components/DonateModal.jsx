import React, { useState } from "react";

const DonateModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handlePaymentSuccess = (response) => {
    alert("Payment Successful! Thank you for your generosity.");

    // Reset form
    setName("");
    setEmail("");
    setAmount("");
    setLoading(false);
    onClose();
  };

  const handlePaymentError = (response) => {
    setLoading(false);
    alert("Payment failed or cancelled. Please try again.");
  };

  const openRazorpay = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
      amount: Number(amount) * 100, // Amount in paise
      currency: "INR",
      name: "ProGuru Donations",
      description: "Donation towards our mission",
      handler: handlePaymentSuccess,
      prefill: {
        name,
        email,
      },
      theme: {
        color: "#9333ea",
      },
      modal: {
        ondismiss: () => {
          setLoading(false);
          alert("Payment popup closed");
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    setLoading(true);
    openRazorpay();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
        <div
          className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            aria-label="Close"
          >
            &times;
          </button>

          {/* Motivational Section */}
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">
              Make a Difference Today
            </h2>
            <p className="text-gray-700">
              Your generous donation helps us continue our mission to improve
              lives and bring hope to those in need. Every contribution counts
              and creates a positive impact.
            </p>
          </div>

          {/* Donation Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded bg-gray-200"
              disabled={loading}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded bg-gray-200"
              disabled={loading}
            />
            <input
              type="number"
              placeholder="Donation Amount (INR)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              min="1"
              className="w-full px-4 py-2 border rounded bg-gray-200"
              disabled={loading}
            />
            <button
              type="submit"
              className={`w-full bg-fuchsia-600 text-white py-2 rounded hover:bg-fuchsia-700 transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Processing..." : "Donate"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DonateModal;
