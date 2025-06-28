import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

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
    title: "Psychological Counselling",
    icon: "🧘",
    image:
      "https://plus.unsplash.com/premium_photo-1664910881558-45d8a08b78b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UHN5Y2hvbG9naWNhbCUyMENvdW5zZWxpbmclMjB3aXRoJTIwY2hpbGRyZW58ZW58MHx8MHx8fDA%3D",
    paragraphs: [
      "Psychological counselling offers children a safe, confidential space to explore their thoughts, emotions, and behaviors with the guidance of a qualified therapist.",
      "Our counseling sessions are tailored to support emotional regulation, resilience, and coping strategies, especially for children dealing with anxiety, trauma, or behavioral challenges.",
      "At Javika Therapy, our licensed psychologists use age-appropriate techniques such as talk therapy, art therapy, and play therapy to help children thrive mentally and emotionally.",
    ],
  },
  {
    title: "Parent and Caregiver Training",
    icon: "👨‍👩‍👧",
    image:
      "https://images.unsplash.com/photo-1714646793441-38c8f94141f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFyZW50JTIwdHJhaW5pbmclMjAoRXF1aXBzJTIwcGFyZW50cyUyMHdpdGglMjBzdHJhdGVnaWVzJTIwYW5kJTIwdG9vbHMlMjB0byUyMHN1cHBvcnQlMjB0aGVpciUyMGNoaWxkJ3MlMjBkZXZlbG9wbWVudCUyMGF0JTIwaG9tZSUyMGFuZCUyMGluJTIwc29jaWFsJTIwc2V0dGluZ3MuKXxlbnwwfHwwfHx8MA%3D%3D",
    paragraphs: [
      "Our Parent and Caregiver Training sessions empower families with the knowledge and tools they need to support their child’s developmental journey at home.",
      "We offer practical strategies on communication, behavior management, and daily routines to ensure consistency between therapy and home environments.",
      "At Javika Therapy, we believe parents are key partners in a child’s progress — and we’re here to guide and support them every step of the way.",
    ],
  },
  {
    title: "Social Skills Training",
    icon: "🤝",
    image:
      "https://plus.unsplash.com/premium_photo-1750767153031-2b9d8af33478?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U29jaWFsJTIwU2tpbGxzJTIwVHJhaW5pbmd8ZW58MHx8MHx8fDA%3D",
    paragraphs: [
      "Social Skills Training helps children build meaningful connections by improving communication, cooperation, and emotional understanding.",
      "Through structured group sessions, role-playing, and interactive games, children learn how to express themselves, read social cues, and navigate peer interactions.",
      "At Javika Therapy, our therapists create a safe, encouraging space where children can practice and develop these essential skills for everyday life.",
    ],
  },
];

const Services = () => {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (location.hash) {
      const slug = location.hash.replace("#", "");
      const found = servicesData.find(
        (s) => s.title.toLowerCase().replace(/\s+/g, "-") === slug
      );

      if (found) {
        setSelectedService(found);

        // Scroll with offset (for navbar height)
        setTimeout(() => {
          const section = document.getElementById(slug);
          if (section) {
            const offset = 100;
            const y =
              section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 300);
      } else {
        setSelectedService(null);
      }
    } else {
      setSelectedService(null); // show all if no hash
    }
  }, [location]);

  const renderServiceSection = (service, index) => {
    const isEven = index % 2 === 0;
    return (
      <section
        key={service.title}
        id={service.title.toLowerCase().replace(/\s+/g, "-")}
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
      </section>
    );
  };

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
        {selectedService
          ? renderServiceSection(selectedService, 0)
          : servicesData.map((service, index) =>
              renderServiceSection(service, index)
            )}
      </div>
    </section>
  );
};

export default Services;
