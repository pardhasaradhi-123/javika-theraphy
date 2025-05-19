// src/components/TherapistRole.jsx
import {
  FaUserCheck,
  FaClipboardList,
  FaChalkboardTeacher,
  FaChartLine,
  FaGift,
  FaUsers,
  FaComments,
} from "react-icons/fa";

export default function TherapistRole() {
  const responsibilities = [
    {
      icon: <FaUserCheck className="text-green-600 mt-1" />,
      title: "Assessing Behavior",
      desc: "Observing and analyzing behavior patterns and triggers.",
      animation: "fade-left",
    },
    {
      icon: <FaClipboardList className="text-green-600 mt-1" />,
      title: "Creating Treatment Plans",
      desc: "Developing customized plans under BCBA supervision.",
      animation: "fade-right",
    },
    {
      icon: <FaChalkboardTeacher className="text-green-600 mt-1" />,
      title: "Implementing Therapy",
      desc: "Teaching skills and managing behaviors with evidence-based methods.",
      animation: "fade-left",
    },
    {
      icon: <FaChartLine className="text-green-600 mt-1" />,
      title: "Data Collection and Analysis",
      desc: "Tracking progress to adjust plans as needed.",
      animation: "fade-right",
    },
    {
      icon: <FaGift className="text-green-600 mt-1" />,
      title: "Reinforcement Strategies",
      desc: "Encouraging positive behaviors using tailored rewards.",
      animation: "fade-left",
    },
    {
      icon: <FaUsers className="text-green-600 mt-1" />,
      title: "Collaboration",
      desc: "Working with families, caregivers, and other professionals.",
      animation: "fade-right",
    },
    {
      icon: <FaComments className="text-green-600 mt-1" />,
      title: "Providing Feedback",
      desc: "Guiding parents on continuing ABA techniques at home.",
      animation: "fade-left",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2
        className="text-3xl font-bold mb-6 text-gray-800 text-center"
        data-aos="fade-up"
      >
        Role of an ABA Therapist
      </h2>
      <p
        className="mb-6 text-gray-800 leading-relaxed text-center text-xl"
        data-aos="fade-down"
      >
        ABA therapists are trained professionals who work closely with children
        with autism and other developmental challenges. Their key
        responsibilities include:
      </p>
      <ul className="space-y-5 text-gray-800 text-lg">
        {responsibilities.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3"
            data-aos={item.animation}
          >
            {item.icon}
            <div>
              <strong>{item.title}:</strong> {item.desc}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
