import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const descriptions = {
  "autism-therapy": {
    url: "https://plus.unsplash.com/premium_photo-1723716015078-1d8615d84633?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXV0aXNtJTIwVGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D",
    what: [
      "Autism Therapy focuses on supporting individuals with Autism Spectrum Disorder (ASD) to enhance communication, social interaction, and behavioral skills. It includes a range of interventions tailored to the unique needs of each individual.",
      "Through structured activities, therapists work to reduce challenging behaviors and teach new skills that promote independence and learning. Each therapy plan is developed based on thorough assessments and personalized goals.",
      "Families are actively involved in the therapy process to ensure consistency and reinforcement of learned behaviors at home and school environments.",
    ],
    procedure: [
      "The procedure for Autism Therapy begins with a diagnostic assessment and interviews with caregivers. This helps understand the child's developmental history, strengths, and areas of concern.",
      "Therapists then create a structured intervention plan, typically involving Applied Behavior Analysis (ABA), play therapy, and social skills training. Sessions are held regularly, with progress monitored and goals adjusted as needed.",
      "Family training sessions are also part of the procedure, equipping parents with tools to support the child’s growth beyond the therapy center.",
    ],
  },
  occupational: {
    url: "https://plus.unsplash.com/premium_photo-1661675788810-98afdba77747?auto=format&fit=crop&w=600&q=60",
    what: [
      "Occupational Therapy assists individuals in achieving independence in daily activities through improved motor skills, coordination, and sensory integration.",
      "Therapists evaluate the individual's needs and help develop fine motor skills, cognitive abilities, and adaptive strategies necessary for tasks like dressing, feeding, or writing.",
      "This therapy is often used for children with developmental delays and adults recovering from injuries or surgeries.",
    ],
    procedure: [
      "A thorough assessment is conducted to understand the client’s strengths and challenges in performing everyday tasks.",
      "Based on the assessment, a personalized therapy plan is created focusing on targeted exercises and adaptive techniques.",
      "Regular sessions with continuous progress tracking help individuals gain confidence and independence in daily routines.",
    ],
  },
  "speech-therapy": {
    url: "https://plus.unsplash.com/premium_photo-1661724564774-69a5c92a56da?auto=format&fit=crop&w=600&q=60",
    what: [
      "Speech Therapy helps individuals improve their communication skills, including speech clarity, language comprehension, and expressive abilities.",
      "It supports children with speech delays, articulation problems, or stuttering, as well as adults recovering from strokes or traumatic brain injuries.",
      "Interactive activities and structured exercises are used to foster better pronunciation, vocabulary, and language usage.",
    ],
    procedure: [
      "Initial evaluations assess language development, speech articulation, and comprehension levels.",
      "Therapists design custom exercises, such as tongue movement drills, vocabulary games, and sentence-building activities.",
      "Therapy sessions are often fun, engaging, and tailored to the individual’s pace and learning style.",
    ],
  },
  psychological: {
    url: "https://plus.unsplash.com/premium_photo-1664910881558-45d8a08b78b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UHN5Y2hvbG9naWNhbCUyMENvdW5zZWxpbmclMjB3aXRoJTIwY2hpbGRyZW58ZW58MHx8MHx8fDA%3D",
    what: [
      "Psychological Therapy focuses on mental well-being and emotional regulation through counseling, cognitive-behavioral techniques, and talk therapy.",
      "It supports individuals dealing with anxiety, depression, trauma, or behavioral disorders through structured sessions with a licensed psychologist.",
      "Therapy fosters resilience, self-awareness, and improved coping strategies for long-term well-being.",
    ],
    procedure: [
      "Therapy begins with an intake session to gather personal and psychological history.",
      "Therapists use techniques such as CBT, mindfulness, and psychoeducation to address underlying emotional challenges.",
      "Clients engage in regular therapy sessions and receive tools to implement in daily life for sustainable change.",
    ],
  },
  "special-ed": {
    url: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=600&q=60",
    what: [
      "Special Education Therapy is designed to support children with learning disabilities and developmental delays through individualized teaching methods.",
      "It provides customized lesson plans that align with the child’s cognitive level, helping them succeed academically and socially.",
      "Therapists often work alongside educators and families to ensure holistic growth and achievement.",
    ],
    procedure: [
      "A detailed evaluation of academic performance, attention span, and learning style is conducted.",
      "Therapy sessions are structured around targeted goals, such as improving reading comprehension or problem-solving skills.",
      "Progress is monitored continuously with adjustments made to accommodate the child’s evolving needs.",
    ],
  },
  behavioral: {
    url: "https://plus.unsplash.com/premium_photo-1663089662335-f04d55ce328b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJlaGF2aW9yJTIwTWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    what: [
      "Behavioral Therapy addresses disruptive behaviors and encourages positive behavior patterns using reinforcement techniques.",
      "Commonly used for ADHD, oppositional defiant disorder, and autism-related behaviors, this therapy involves both the individual and their caregivers.",
      "It creates structured routines, teaches self-control, and encourages responsibility.",
    ],
    procedure: [
      "Behavior analysis is conducted to identify triggers and consequences of problem behaviors.",
      "Therapists apply positive reinforcement, token systems, and behavioral contracts to encourage desired behaviors.",
      "Progress is recorded and shared with caregivers to maintain consistency across environments.",
    ],
  },
};

export default function TherapyPage() {
  const { type, section } = useParams();
  const therapyData = descriptions[type] || {};
  const content = therapyData?.[section] || [];
  const imageUrl = therapyData?.url || "";

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-10 lg:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Image */}
        <div className="flex justify-center" data-aos="zoom-in">
          <img
            src={imageUrl}
            alt="Therapy visual"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h1
            className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 mb-6 capitalize"
            data-aos="fade-right"
          >
            {section?.replace("-", " ")} - {type?.replace("-", " ")}
          </h1>

          {content.length > 0 ? (
            content.map((para, idx) => (
              <p
                key={idx}
                className="text-gray-700 text-base md:text-lg leading-relaxed mb-5"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {para}
              </p>
            ))
          ) : (
            <p className="text-red-600 font-semibold">
              No content found for this section.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
