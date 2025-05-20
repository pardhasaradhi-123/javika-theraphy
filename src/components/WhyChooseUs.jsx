import React from "react";

const whyChooseUs = [
  {
    title: "Expert Therapists",
    description:
      "Our team includes certified professionals with years of experience in ABA, speech, occupational, and psychological therapy.",
    icon: "👩‍⚕️",
    animation: "fade-left",
  },
  {
    title: "Individualized Programs",
    description:
      "We create tailored therapy plans based on detailed assessments to support each child's unique strengths and challenges.",
    icon: "🧩",
    animation: "fade-right",
  },
  {
    title: "Family-Centered Approach",
    description:
      "We actively involve parents and caregivers to ensure therapy continues beyond sessions, strengthening progress at home.",
    icon: "👨‍👩‍👧",
    animation: "fade-left",
  },
  {
    title: "Safe & Nurturing Environment",
    description:
      "Our center is designed to provide a welcoming space where children feel safe, motivated, and engaged in their growth journey.",
    icon: "🏡",
    animation: "fade-right",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl font-bold text-center text-blue-800 mb-4"
          data-aos="fade-up"
        >
          Why Choose Javika Therapy?
        </h2>
        <p
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
          data-aos="fade-left"
        >
          We are committed to enriching children’s lives by providing
          comprehensive, personalized, and evidence-based therapies in a caring
          environment.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-lg p-6 text-center shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4" data-aos="fade-left">
                {item.icon}
              </div>
              <h3
                className="text-xl font-semibold text-blue-700 mb-2"
                data-aos={item.animation}
              >
                {item.title}
              </h3>
              <p className="text-gray-600" data-aos="fade-right">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
