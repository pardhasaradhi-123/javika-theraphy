import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const servicesData = [
  {
    title: "ABA Therapy",
    icon: "🧠",
    image:
      "https://media.istockphoto.com/id/1426218725/photo/flat-lay-composition-with-abbreviation-aba-and-colorful-numbers-on-white-wooden-table-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=MlmP7lwM8FIO45Hssa_mm3Z_TP7oQ5N-6YqnXqnA2nk=",
    paragraphs: [
      "Applied Behavior Analysis (ABA) therapy is an evidence-based approach used to improve social, communication, and learning skills. It focuses on breaking down tasks into small, manageable steps and using positive reinforcement to encourage progress. This method is widely recognized as the most effective treatment for children with autism spectrum disorder.",
      "Our ABA programs are individualized for each child’s needs and goals, using data-driven techniques to measure improvement and adjust strategies accordingly. Whether it's improving verbal skills, social interaction, or reducing problematic behaviors, ABA provides a structured and supportive environment for growth.",
      "At Javika Therapy, our licensed behavior therapists work closely with families and caregivers to ensure consistency and support both in clinical sessions and at home.",
    ],
  },
  {
    title: "ABA Assessment for Autism",
    icon: "📋",
    image:
      "https://plus.unsplash.com/premium_photo-1711555629283-366ea41f6772?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QUJBJTIwQXNzZXNzbWVudCUyMGZvciUyMEF1dGlzbXxlbnwwfHwwfHx8MA%3D%3D",
    paragraphs: [
      "ABA assessments form the foundation of our therapeutic planning. These in-depth evaluations analyze a child's behavior, learning style, strengths, and areas of need to create a targeted treatment plan.",
      "By understanding how a child learns and responds to different situations, we can craft an effective ABA plan that evolves with their development.",
      "Every child is unique, and our assessments reflect that. The process is collaborative, involving caregivers at every step.",
    ],
  },
  {
    title: "Speech Therapy",
    icon: "🗣️",
    image:
      "https://plus.unsplash.com/premium_photo-1661724564774-69a5c92a56da?auto=format&fit=crop&w=600&q=60",
    paragraphs: [
      "Speech therapy helps children develop their communication abilities—whether it’s forming sounds correctly, understanding spoken language, or expressing thoughts clearly.",
      "Each therapy session is tailored to the child's unique language needs. Through play-based methods and evidence-backed practices, we make learning fun and impactful.",
      "At Javika Therapy, our goal is to help every child find their voice. Strong communication skills build confidence and open doors for academic and social success.",
    ],
  },
  {
    title: "Occupational Therapy",
    icon: "✋",
    image:
      "https://plus.unsplash.com/premium_photo-1661675788810-98afdba77747?auto=format&fit=crop&w=600&q=60",
    paragraphs: [
      "Occupational Therapy focuses on helping children perform daily activities with greater independence. It supports motor skills, self-care routines, sensory processing, attention, and cognitive development.",
      "We design play-based therapy sessions that target fine motor coordination, balance, body awareness, and visual-motor integration.",
      "Our holistic approach addresses emotional regulation, attention span, and sensory integration to support overall growth.",
    ],
  },
  {
    title: "Special Education",
    icon: "📚",
    image:
      "https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=600&q=60",
    paragraphs: [
      "Special education provides a customized learning experience for children with diverse needs. It ensures that every child receives equitable access to education tailored to their learning style and developmental level.",
      "We collaborate with families, therapists, and schools to create Individualized Education Plans (IEPs) that reflect each child's unique strengths and goals.",
      "Our special education team fosters a nurturing and inclusive environment where children can thrive academically while building emotional resilience and social skills.",
    ],
  },
  {
    title: "Parent Training",
    icon: "👨‍👩‍👧",
    image:
      "https://images.unsplash.com/photo-1714646793441-38c8f94141f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFyZW50JTIwdHJhaW5pbmclMjAoRXF1aXBzJTIwcGFyZW50cyUyMHdpdGglMjBzdHJhdGVnaWVzJTIwYW5kJTIwdG9vbHMlMjB0byUyMHN1cHBvcnQlMjB0aGVpciUyMGNoaWxkJ3MlMjBkZXZlbG9wbWVudCUyMGF0JTIwaG9tZSUyMGFuZCUyMGluJTIwc29jaWFsJTIwc2V0dGluZ3MuKXxlbnwwfHwwfHx8MA%3D%3D",
    paragraphs: [
      "Parent training is a cornerstone of our approach at Javika Therapy. We equip parents with effective strategies to support their child's learning and behavior at home.",
      "Our sessions cover behavior management, communication support, daily routine structuring, and social skill development.",
      "When parents are actively involved in the therapeutic process, children show greater progress and consistency.",
    ],
  },
  {
    title: "Early Intervention",
    icon: "👶",
    image:
      "https://plus.unsplash.com/premium_photo-1664910437130-f91cac49b4bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWFybHklMjBJbnRlcnZlbnRpb24lMjAoRm9jdXNlZCUyMHByb2dyYW1zJTIwZm9yJTIweW91bmclMjBjaGlsZHJlbiUyMHNob3dpbmclMjBlYXJseSUyMHNpZ25zJTIwb2YlMjBkZXZlbG9wbWVudGFsJTIwZGVsYXlzJTIwdG8lMjBoZWxwJTIwdGhlbSUyMHJlYWNoJTIwYWdlJTIwYXBwcm9wcmlhdGUlMjBtaWxlc3RvbmVzLil8ZW58MHx8MHx8fDA%3D",
    paragraphs: [
      "Early intervention is crucial for children showing signs of developmental delays. The earlier we identify and support a child’s needs, the greater the opportunity for growth and independence.",
      "We focus on language, motor, cognitive, and social-emotional development through structured play and interaction.",
      "With a nurturing environment and expert guidance, children in our early intervention program develop foundational skills that set the stage for lifelong learning.",
    ],
  },
  {
    title: "Autism Therapy",
    icon: "🧩",
    image:
      "https://plus.unsplash.com/premium_photo-1723716015078-1d8615d84633?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXV0aXNtJTIwVGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D",
    paragraphs: [
      "Autism Therapy at Javika is tailored to address the unique challenges and strengths of individuals with autism spectrum disorder. It includes a mix of ABA, sensory integration, and communication strategies.",
      "Our multidisciplinary team collaborates to create structured, goal-driven sessions that foster social, emotional, and behavioral development.",
      "We aim to enhance independence, improve interaction skills, and empower both the individual and their family for long-term success.",
    ],
  },
  {
    title: "Behavioral Therapy",
    icon: "🧭",
    image:
      "https://plus.unsplash.com/premium_photo-1663089662335-f04d55ce328b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJlaGF2aW9yJTIwTWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    paragraphs: [
      "Behavioral Therapy helps children understand and change challenging behaviors through structured techniques such as reinforcement, modeling, and behavior modification plans.",
      "Our therapists work closely with families to identify triggers, set goals, and implement strategies that encourage positive behavior.",
      "We focus on developing self-control, coping mechanisms, and adaptive skills that promote success at home, school, and in social settings.",
    ],
  },
  {
    title: "Psychological Counseling",
    icon: "🧘",
    image:
      "https://plus.unsplash.com/premium_photo-1664910881558-45d8a08b78b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UHN5Y2hvbG9naWNhbCUyMENvdW5zZWxpbmclMjB3aXRoJTIwY2hpbGRyZW58ZW58MHx8MHx8fDA%3D",
    paragraphs: [
      "Psychological counseling offers a safe space for children and adolescents to explore their emotions, thoughts, and experiences.",
      "Our licensed psychologists address issues such as anxiety, depression, trauma, and emotional regulation through age-appropriate talk therapy and creative methods like art or play therapy.",
      "With empathy and expertise, we support mental well-being, self-awareness, and emotional resilience for every child.",
    ],
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="mx-auto bg-gray-50 overflow-hidden pb-20">
      <div className="bg-blue-800 p-10 mb-12">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Our Services
        </h2>
        <p className="text-center text-gray-200 max-w-2xl mx-auto">
          At Javika Therapy, we offer personalized programs that support
          children and their families with industry-leading therapeutic
          services.
        </p>
      </div>

      <div className="space-y-20 max-md:px-5">
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
              <div className="relative w-full md:w-1/2 max-w-sm h-64">
                <div className="absolute w-80 h-80 rounded-full bg-blue-200 blur-2xl animate-pulse z-0 top-0 left-1/2 -translate-x-1/2"></div>
                <div className="absolute w-72 h-72 rounded-full bg-blue-400 opacity-90 blur-3xl animate-pulse z-0 top-6 left-1/2 -translate-x-1/2"></div>

                <img
                  src={service.image}
                  alt={service.title}
                  className="relative w-64 h-64 object-cover rounded-full shadow-lg z-10 mx-auto"
                />
              </div>

              <div className="w-full md:w-1/2">
                <div className="text-4xl mb-2">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                  {service.title}
                </h3>
                {service.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className="text-gray-600 mb-4"
                    data-aos="fade-up"
                    data-aos-delay={i * 150}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
