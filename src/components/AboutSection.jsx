import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="p-6 max-w-5xl py-14 mx-auto">
      <h2
        className="text-3xl font-bold mb-6 text-gray-800 text-center"
        data-aos="fade-up"
      >
        What is Javika In-Home ABA Therapy?
      </h2>
      <div className="flex flex-col justify-around items-center md:flex-row gap-8">
        <div className="relative w-[250px] h-[300px]" data-aos="fade-right">
          <div className="blob1"></div>
          <div className="blob2"></div>

          {/* Circular Image */}
          <img
            src="https://media.istockphoto.com/id/1426218662/photo/flat-lay-composition-with-phrase-aba-therapy-and-colorful-toys-on-white-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=ekMBXgv3TMgckMfTK_mrkee83vPnndwO3N4byS_SwZY="
            alt="Child therapy session"
            className="relative w-[220px] h-[220px] object-cover rounded-circle shadow-lg z-20"
          />
        </div>

        <div className="text-gray-700 text-lg space-y-4 max-w-md">
          <p data-aos="fade-down">
            Javika Therapy delivers personalized ABA sessions at home, fostering
            growth and learning in a familiar, supportive space.
          </p>
          <ul className="list-disc list-inside text-blue-600 font-semibold space-y-1">
            <li data-aos="fade-left">Enhances communication skills</li>
            <li data-aos="fade-right">
              Encourages positive social interaction
            </li>
            <li data-aos="fade-left">Improves focus and behavior</li>
          </ul>
          <p data-aos="fade-down">
            Each program is tailored to your child’s unique needs to help them
            thrive.
          </p>
        </div>
      </div>
    </section>
  );
}
