// src/components/ParentRole.jsx
import { FaCheckCircle } from "react-icons/fa";

export default function ParentRole() {
  const tips = [
    "Choose a dedicated therapy space for consistency and focus.",
    "Inform therapists about your child's interests for motivation.",
    "Maintain a consistent daily schedule and routine during therapy sessions.",
    "Ensure a responsible adult is present during therapy sessions.",
    "Ask therapists for advice whenever needed.",
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2
        className="text-3xl font-bold mb-6 text-indigo-700 text-center"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        How Can Parents Help in Home-Based ABA Therapy?
      </h2>

      <div className="grid md:grid-cols-2 gap-6 text-gray-700">
        {/* Intro text */}
        <p
          className="md:col-span-2 text-xl mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Parents and caregivers play a vital role in home-based ABA therapy.
          Since children spend more time with their caregivers than therapists,
          active participation helps reinforce therapy goals.
        </p>

        {/* Tips (left column) */}
        <ul
          className="space-y-3"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          {tips.slice(0, 3).map((tip, index) => (
            <li key={index} className="flex items-start gap-3 text-lg">
              <FaCheckCircle className="text-indigo-600 mt-1" />
              <span className="font-medium">{tip}</span>
            </li>
          ))}
        </ul>

        {/* Tips (right column) */}
        <ul
          className="space-y-3 text-lg"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {tips.slice(3).map((tip, index) => (
            <li key={index} className="flex items-start gap-3">
              <FaCheckCircle className="text-indigo-600 mt-1" />
              <span className="font-medium">{tip}</span>
            </li>
          ))}
        </ul>

        {/* Closing note */}
        <p
          className="md:col-span-2 leading-relaxed text-xl mt-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Encourage your child to practice new skills both during and outside
          therapy sessions to reinforce learning and help them socialize
          comfortably.
        </p>
      </div>
    </section>
  );
}
