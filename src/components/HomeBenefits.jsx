import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const benefits = [
  {
    title: "Convenience",
    description:
      "Saves time and energy for parents as therapy is provided at home.",
    image:
      "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=400&q=80",
    animation: "fade-left",
  },
  {
    title: "Familiarity",
    description:
      "Child feels comfortable in their own safe space instead of unfamiliar centers.",
    image:
      "https://plus.unsplash.com/premium_photo-1664304875148-4af0fe62f2ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hpbGQlMjBmZWVscyUyMGNvbWZvcnRhYmxlJTIwaW4lMjB0aGVpciUyMG93biUyMHNhZmUlMjBzcGFjZSUyMGluc3RlYWQlMjBvZiUyMHVuZmFtaWxpYXIlMjBjZW50ZXJzLnxlbnwwfHwwfHx8MA%3D%3D",
    animation: "fade-right",
  },
  {
    title: "Natural Reinforcers",
    description:
      "Home activities, toys, and games motivate positive behavior through reinforcement.",
    image:
      "https://images.unsplash.com/photo-1577897113292-3b95936e5206?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG9tZSUyMGFjdGl2aXRpZXMlMkMlMjB0b3lzJTJDJTIwYW5kJTIwZ2FtZXMlMjBtb3RpdmF0ZSUyMHBvc2l0aXZlJTIwYmVoYXZpb3IlMjB0aHJvdWdoJTIwcmVpbmZvcmNlbWVudC58ZW58MHx8MHx8fDA%3D",
    animation: "fade-left",
  },
  {
    title: "Better Family Relationships",
    description:
      "Family members can participate actively and track progress together.",
    image:
      "https://plus.unsplash.com/premium_photo-1661677680531-e045f65191b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmV0dGVyJTIwRmFtaWx5JTIwUmVsYXRpb25zaGlwcyhGYW1pbHklMjBtZW1iZXJzJTIwY2FuJTIwcGFydGljaXBhdGUlMjBhY3RpdmVseSUyMGFuZCUyMHRyYWNrJTIwcHJvZ3Jlc3MlMjB0b2dldGhlci4pfGVufDB8fDB8fHww",
    animation: "fade-right",
  },
  {
    title: "Generalization",
    description:
      "Skills learned at home easily transfer to other settings (e.g., using a toilet handle).",
    image:
      "https://images.unsplash.com/photo-1714646792977-4aa8f6890aac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R2VuZXJhbGl6YXRpb24lMjAoU2tpbGxzJTIwbGVhcm5lZCUyMGF0JTIwaG9tZSUyMGVhc2lseSUyMHRyYW5zZmVyJTIwdG8lMjBvdGhlciUyMHNldHRpbmdzLil8ZW58MHx8MHx8fDA%3D",
    animation: "fade-left",
  },
  {
    title: "Addressing Specific Behaviors",
    description:
      "Easier to work on everyday behaviors like dressing, eating, bedtime routines.",
    image:
      "https://plus.unsplash.com/premium_photo-1718201868174-b1844f729a79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWRkcmVzc2luZyUyMFNwZWNpZmljJTIwQmVoYXZpb3JzJTIwKEVhc2llciUyMHRvJTIwd29yayUyMG9uJTIwZXZlcnlkYXklMjBiZWhhdmlvcnMlMjBsaWtlJTIwZHJlc3NpbmclMkMlMjBlYXRpbmclMkMlMjBiZWR0aW1lJTIwcm91dGluZXMuKXxlbnwwfHwwfHx8MA%3D%3D",
    animation: "fade-right",
  },
  {
    title: "Eliminate Transitions",
    description:
      "No need to prepare for or travel to sessions, reducing anxiety.",
    image:
      "https://plus.unsplash.com/premium_photo-1661637665927-b0bb7e25f5b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWxpbWluYXRlJTIwVHJhbnNpdGlvbnMlMjAoTm8lMjBuZWVkJTIwdG8lMjBwcmVwYXJlJTIwZm9yJTIwb3IlMjB0cmF2ZWwlMjB0byUyMHNlc3Npb25zJTJDJTIwcmVkdWNpbmclMjBhbnhpZXR5Lil8ZW58MHx8MHx8fDA%3D",
    animation: "fade-left",
  },
];

export default function HomeBenefits() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh(); // Add this line
  }, []);

  return (
    <section className="max-w-7xl rounded shadow-md mx-auto p-6 bg-indigo-50 my-8">
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
