import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const benefits = [
  {
    title: "Convenience",
    description:
      "Saves time and energy for parents as therapy is provided at home.",
    image:
      "https://ideogram.ai/assets/progressive-image/balanced/response/Sw_GW81zRjOdeRwNXhD8kg",
    animation: "fade-left",
  },
  {
    title: "Familiarity",
    description:
      "Child feels comfortable in their own safe space instead of unfamiliar centers.",
    image:
      "https://ideogram.ai/assets/progressive-image/balanced/response/-9noSM_PTbu1TefTcHg1Lg",
    animation: "fade-right",
  },
  {
    title: "Natural Reinforcers",
    description:
      "Home activities, toys, and games motivate positive behavior through reinforcement.",
    image:
      "https://ideogram.ai/assets/progressive-image/balanced/response/faNGyEFBSVOIiOA2Yc2nsQ",
    animation: "fade-left",
  },
  {
    title: "Better Family Relationships",
    description:
      "Family members can participate actively and track progress together.",
    image:
      "https://ideogram.ai/assets/progressive-image/balanced/response/7pEeQ_jeTtatw5aCnHnz7g",
    animation: "fade-right",
  },
  {
    title: "Generalization",
    description:
      "Skills learned at home easily transfer to other settings (e.g., using a toilet handle).",
    image:
      "https://ideogram.ai/assets/progressive-image/balanced/response/JejkzlhDQ_yY340e9Ul7bQ",
    animation: "fade-left",
  },
  {
    title: "Addressing Specific Behaviors",
    description:
      "Easier to work on everyday behaviors like dressing, eating, bedtime routines.",
    image:
      "https://ideogram.ai/assets/progressive-image/balanced/response/I89n4e75S9ivR1Xf2pYlKQ",
    animation: "fade-right",
  },
  {
    title: "Eliminate Transitions",
    description:
      "No need to prepare for or travel to sessions, reducing anxiety.",
    image:
      "https://ideogram.ai/assets/progressive-image/balanced/response/8xRa4xJOTj-HsRkOmiOVcQ",
    animation: "fade-left",
  },
];

export default function HomeBenefits() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh(); // Add this line
  }, []);

  return (
    <section className="max-w-7xl mx-auto p-6 my-8">
      <h2 className="text-3xl font-bold mb-12 text-indigo-800 text-center">
        Benefits of Home-Based ABA Therapy
      </h2>
      <div className="space-y-16">
        {benefits.map((benefit, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className="md:w-1/2 text-gray-800"
                data-aos={benefit.animation}
              >
                <h3 className="text-2xl font-semibold mb-3 text-indigo-700">
                  {benefit.title}
                </h3>
                <p className="text-lg">{benefit.description}</p>
              </div>
              <div className="md:w-1/2" data-aos={benefit.animation}>
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full rounded-lg shadow-lg object-cover max-h-64"
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
