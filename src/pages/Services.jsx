import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const servicesData = [
  {
    title: "ABA Therapy",
    description:
      "Applied Behavior Analysis (ABA) therapy focuses on improving specific behaviors such as social skills, communication, reading, and academics, as well as adaptive learning skills.",
    icon: "🧠",
    image:
      "https://media.istockphoto.com/id/1426218725/photo/flat-lay-composition-with-abbreviation-aba-and-colorful-numbers-on-white-wooden-table-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=MlmP7lwM8FIO45Hssa_mm3Z_TP7oQ5N-6YqnXqnA2nk=",
  },
  {
    title: "ABA Assessment for Autism",
    description:
      "Our ABA Assessments are the foundation for crafting effective, individualized treatment plans. Through interviews, direct observation, skill-based assessments, and functional behavior evaluations, we identify each child's strengths and challenges to support their unique developmental needs.",
    icon: "📋",
    image:
      "https://plus.unsplash.com/premium_photo-1711555629283-366ea41f6772?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QUJBJTIwQXNzZXNzbWVudCUyMGZvciUyMEF1dGlzbXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Speech Therapy",
    description:
      "Helps children improve communication skills including pronunciation, language comprehension, and non-verbal communication.",
    icon: "🗣️",
    image:
      "https://plus.unsplash.com/premium_photo-1661724564774-69a5c92a56da?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Occupational Therapy",
    description:
      "Assists children in developing the skills needed for daily living and school performance, including motor skills, balance, and coordination.",
    icon: "✋",
    image:
      "https://plus.unsplash.com/premium_photo-1661675788810-98afdba77747?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Special Education",
    description:
      "Customized education plans that cater to the learning needs of each child to support academic and emotional development.",
    icon: "📚",
    image:
      "https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Parent Training",
    description:
      "Equips parents with strategies and tools to support their child's development at home and in social settings.",
    icon: "👨‍👩‍👧",
    image:
      "https://images.unsplash.com/photo-1714646793441-38c8f94141f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFyZW50JTIwdHJhaW5pbmclMjAoRXF1aXBzJTIwcGFyZW50cyUyMHdpdGglMjBzdHJhdGVnaWVzJTIwYW5kJTIwdG9vbHMlMjB0byUyMHN1cHBvcnQlMjB0aGVpciUyMGNoaWxkJ3MlMjBkZXZlbG9wbWVudCUyMGF0JTIwaG9tZSUyMGFuZCUyMGluJTIwc29jaWFsJTIwc2V0dGluZ3MuKXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Early Intervention",
    description:
      "Focused programs for young children showing early signs of developmental delays to help them reach age-appropriate milestones.",
    icon: "👶",
    image:
      "https://plus.unsplash.com/premium_photo-1664910437130-f91cac49b4bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWFybHklMjBJbnRlcnZlbnRpb24lMjAoRm9jdXNlZCUyMHByb2dyYW1zJTIwZm9yJTIweW91bmclMjBjaGlsZHJlbiUyMHNob3dpbmclMjBlYXJseSUyMHNpZ25zJTIwb2YlMjBkZXZlbG9wbWVudGFsJTIwZGVsYXlzJTIwdG8lMjBoZWxwJTIwdGhlbSUyMHJlYWNoJTIwYWdlJTIwYXBwcm9wcmlhdGUlMjBtaWxlc3RvbmVzLil8ZW58MHx8MHx8fDA%3D",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 px-16 mx-auto bg-gray-50 overflow-hidden">
      <h2
        className="text-3xl font-bold text-center text-blue-800 mb-4"
        data-aos="fade-up"
      >
        Our Services
      </h2>
      <p
        className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        At Pinnacle Blooms, we offer personalized programs that support children
        and their families with industry-leading therapeutic services.
      </p>

      <div className="space-y-16">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                !isEven ? "md:flex-row-reverse" : ""
              } gap-8`}
              data-aos={isEven ? "fade-right" : "fade-left"}
            >
              {/* Image Blob */}
              <div className="relative w-full md:w-1/2 max-w-sm h-64">
                {/* First blob - bigger size */}
                <div className="absolute w-80 h-80 rounded-full bg-blue-100 blur-2xl animate-pulse z-0 top-0 left-1/2 -translate-x-1/2"></div>

                {/* Second blob - bigger size */}
                <div className="absolute w-72 h-72 rounded-full bg-blue-300 opacity-70 blur-3xl animate-pulse z-0 top-6 left-1/2 -translate-x-1/2"></div>

                <img
                  src={service.image}
                  alt={service.title}
                  className="relative w-64 h-64 object-cover rounded-full shadow-lg z-10 mx-auto"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2" data-aos="fade-up">
                <div className="text-4xl mb-2">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
