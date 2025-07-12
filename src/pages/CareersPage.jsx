import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Example images for each job opening — replace with your own URLs or imports
const jobImages = {
  "Speech Therapist":
    "https://media.istockphoto.com/id/1135829099/photo/cute-little-boy-at-speech-therapist-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=pGn_-kh0XKUBC8bUHtiawrnIxH9iwInvAJUt53l6bxo=",
  "Special Educator":
    "https://plus.unsplash.com/premium_photo-1661901004198-0771cc6d5a53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3BlY2lhbCUyMEVkdWNhdG9yfGVufDB8fDB8fHww",
  "Occupational Therapist":
    "https://plus.unsplash.com/premium_photo-1663099317164-c47f3d7b0e11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2NjdXBhdGlvbmFsJTIwdGhlcmFwaXN0JTIwKHlvdXIlMjByb2xlJTIwd2lsbCUyMGludm9sdmUlMjBhc3Nlc3NpbmclMjBkZXZlbG9wbWVudGFsJTIwY2hhbGxlbmdlcyUyMGFuZCUyMGRlc2lnbmluZyUyMGFjdGl2aXRpZXMlMjB0aGF0JTIwcHJvbW90ZSUyMGluZGVwZW5kZW5jZSUyMGFuZCUyMGNvbmZpZGVuY2UlMjBpbiUyMGV2ZXJ5ZGF5JTIwdGFza3MuKSUyMHdpdGglMjBjaGlsZHJlbnxlbnwwfHwwfHx8MA%3D%3D",
  Psychologist:
    "https://images.unsplash.com/photo-1592947945242-69312358628b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHN5Y2hvbG9naXN0fGVufDB8fDB8fHww",
  Administrator:
    "https://plus.unsplash.com/premium_photo-1683121593196-8a621adde90a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QWRtaW5pc3RyYXRvcnxlbnwwfHwwfHx8MA%3D%3D",
};

const careersData = [
  {
    id: 1,
    title: "Speech Therapist",
    paragraphs: [
      "We are looking for a passionate Speech Therapist to join our team and help children improve their communication skills through individualized therapy plans and supportive care.",
      "The ideal candidate will work closely with families and educators to track progress and adapt treatment methods to each child's unique needs.",
    ],
  },
  {
    id: 2,
    title: "Special Educator",
    paragraphs: [
      "As a Special Educator, you will develop tailored educational programs for children with diverse learning needs to help them reach their full potential in a nurturing environment.",
      "You will collaborate with therapists and families to create inclusive learning experiences that foster growth academically, socially, and emotionally.",
    ],
  },
  {
    id: 3,
    title: "Occupational Therapist",
    paragraphs: [
      "Join us as an Occupational Therapist to support children in developing their sensory, motor, and daily living skills with personalized interventions and hands-on support.",
      "Your role will involve assessing developmental challenges and designing activities that promote independence and confidence in everyday tasks.",
    ],
  },
  {
    id: 4,
    title: "Psychologist",
    paragraphs: [
      "We seek a dedicated Psychologist to provide emotional and behavioral support, assessments, and counseling to children and their families for overall well-being.",
      "You will play a key role in creating supportive environments and guiding families with strategies for mental health and positive behavioral interventions.",
    ],
  },
  {
    id: 5,
    title: "Administrator",
    paragraphs: [
      "The Administrator will oversee day-to-day operations, coordinate with staff, manage schedules, and ensure a smooth and efficient working environment.",
      "Strong organizational skills and a proactive approach will be essential to maintaining communication between therapists, families, and management.",
    ],
  },
];

const CareerPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-6 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Careers at Javika Therapy
        </h1>
        <p className="max-w-3xl mx-auto text-center">
          We at Javika Therapy is hiring Fresher’s & teachers with 1-2 years of
          experienc for the position of Shadow Teachers/Therapist Interested
          applicants can Email us at{" "}
          <span className="underline">therapyjavika@gmail.com </span>
          with your updated resume.
        </p>
      </section>

      {/* Career Openings Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 space-y-24">
        {careersData.map((job, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <div
              key={job.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image with curved shape */}
              <div
                className="md:w-1/2 overflow-hidden"
                data-aos={isEven ? "fade-left" : "fade-right"}
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)",
                  position: "relative",
                  height: "400px", // Adjust height as needed
                  overflow: "hidden",
                }}
              >
                <img
                  src={jobImages[job.title]}
                  alt={job.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ filter: "drop-shadow(0 8px 10px rgba(0,0,0,0.15))" }}
                />
              </div>

              {/* Content */}
              <div
                className="md:w-1/2"
                data-aos={isEven ? "fade-right" : "fade-left"}
              >
                <h3 className="text-3xl font-semibold text-blue-900 mb-4">
                  {job.title}
                </h3>
                {job.paragraphs.map((para, i) => (
                  <p key={i} className="text-gray-700 mb-4 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Apply Section */}
      <section className="bg-blue-100 py-16 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-900">
          Apply for a Position
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-center text-gray-800">
          Please send your resume and a cover letter to{" "}
          <span className="text-blue-700 underline">
            therapyjavika@gmail.com
          </span>
          . We look forward to hearing from you!
        </p>
      </section>
    </div>
  );
};

export default CareerPage;
