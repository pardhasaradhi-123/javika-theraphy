import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BookAppointment from "../components/BookAppointment ";

const heroBackgrounds = [
  "https://leafwingcenter.org/wp-content/uploads/2021/03/aba-therapy-learner-2-1.jpeg",
  "https://www.abacenters.com/wp-content/uploads/abaca-inhome1-1.jpg",
  "https://www.achievebeyondusa.com/wp-content/uploads/2021/11/main-image-2-autism-services-1024x683.jpg",
  "https://leafwingcenter.org/wp-content/uploads/2021/03/ABA-therapy-learner-1.jpeg",
];

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroBackgrounds.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="relative h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${heroBackgrounds[currentBg]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 px-6 max-w-4xl">
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-yellow-400 drop-shadow-lg"
          data-aos="fade-down"
        >
          Javika Therapy - In-Home ABA Therapy
        </h1>
        <p
          className="text-lg md:text-2xl mb-8 text-teal-300 drop-shadow-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Helping children with autism grow in a safe, familiar environment
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded shadow-lg transition"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Book an Appointment
        </button>
      </div>

      {showModal && <BookAppointment onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Hero;
