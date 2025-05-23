import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";

const assessments = [
  {
    id: 1,
    title: "Early Start Denver Model (ESDM)",
    image:
      "https://autismcoe.com/wp-content/uploads/2024/01/The-Early-Start-Denver-Model-ESDM-A-Comprehensive-Behavioral-Early-Intervention-Approach.jpg",
    detailed: `
The Early Start Denver Model (ESDM) is a comprehensive early intervention program tailored for toddlers diagnosed with autism spectrum disorder (ASD). It uniquely combines applied behavior analysis (ABA) techniques with developmental and relationship-based approaches, making it suitable for children between 12 and 48 months of age. ESDM focuses on naturalistic teaching strategies embedded within play and daily routines, fostering social communication, cognitive skills, and emotional regulation in a supportive environment.

By targeting foundational skills early, ESDM aims to improve the child’s overall developmental trajectory, including language acquisition and social engagement. Research has demonstrated that children who receive ESDM intervention often exhibit gains in IQ, adaptive behavior, and expressive language compared to those receiving traditional therapies. Furthermore, ESDM emphasizes parent involvement, coaching caregivers to implement strategies at home, which enhances the consistency and generalization of skills.

The program’s structured yet flexible approach allows therapists to customize goals based on each child's unique strengths and challenges. With consistent application, ESDM provides a powerful framework to support early childhood development, aiming for meaningful improvements in daily functioning and quality of life for children with ASD.
    `,
  },
  {
    id: 2,
    title:
      "Assessment of Basic Language and Learning Skills – Revised (ABLSS-R)",
    image:
      "https://images.pexels.com/photos/7296379/pexels-photo-7296379.jpeg?auto=compress&cs=tinysrgb&w=600",
    detailed: `
The Assessment of Basic Language and Learning Skills – Revised (ABLSS-R) is a standardized tool used to evaluate essential language and learning capabilities in children, especially those with developmental delays or autism. This assessment focuses on foundational behaviors necessary for effective communication, social interaction, and early academic skills. It covers a broad spectrum of skills including requesting, labeling, imitation, and social play, which are critical for building more advanced abilities.

ABLSS-R serves not only as an assessment tool but also as a guide for intervention planning. By identifying specific skill deficits, practitioners can develop individualized teaching programs tailored to each child's needs. The systematic nature of the assessment allows for tracking progress over time, making it a valuable resource for educators and therapists.

Importantly, the ABLSS-R integrates both language and learning domains, recognizing that early success in communication often depends on concurrent development in related areas such as attention and imitation. This comprehensive approach ensures that interventions target multiple skill areas to foster overall developmental growth.
    `,
  },
  {
    id: 3,
    title: "Promoting Emergence of Advanced Knowledge (PEAK)",
    image:
      "https://images.pexels.com/photos/8653984/pexels-photo-8653984.jpeg?auto=compress&cs=tinysrgb&w=600",
    detailed: `
Promoting Emergence of Advanced Knowledge (PEAK) is a curriculum-based assessment tool that focuses on developing complex language and cognitive skills in individuals with autism. It emphasizes behavioral principles and relational frame theory to promote flexible and adaptive thinking. PEAK is designed to enhance advanced verbal behavior, including the ability to understand abstract concepts, problem-solve, and engage in social interactions effectively.

The program divides skills into distinct modules targeting different developmental domains such as language acquisition, cognitive development, and social skills. Its curriculum approach allows for simultaneous assessment and instruction, enabling therapists to both identify skill gaps and directly address them within the learning process.

By fostering higher-order skills, PEAK supports learners in achieving greater independence and academic success. It is widely regarded for its empirical basis and versatility in addressing the nuanced learning needs of individuals with autism spectrum disorder.
    `,
  },
  {
    id: 4,
    title: "Assessment of Functional Living Skills (AFLS)",
    image:
      "https://images.pexels.com/photos/4815344/pexels-photo-4815344.jpeg?auto=compress&cs=tinysrgb&w=600",
    detailed: `
The Assessment of Functional Living Skills (AFLS) is a vital tool designed to evaluate practical, everyday skills that contribute to an individual's independence and quality of life. This assessment covers multiple domains including self-care, home management, community participation, school skills, and vocational abilities. AFLS helps identify areas where an individual may require support or training to function effectively in daily life.

By focusing on functional skills, the AFLS assists caregivers, educators, and therapists in designing personalized training programs that promote autonomy. The assessment results guide the development of intervention strategies that are realistic, relevant, and directly applicable to the individual’s environment and lifestyle.

Regular use of AFLS can track progress and adjust teaching plans to ensure that learners gain meaningful skills that enhance their ability to live and work independently, ultimately improving their social integration and overall well-being.
    `,
  },
  {
    id: 5,
    title: "Verbal Behavior Milestones Assessment Placement Program (VB-MAPP)",
    image:
      "https://images.pexels.com/photos/7943982/pexels-photo-7943982.jpeg?auto=compress&cs=tinysrgb&w=600",
    detailed: `
The Verbal Behavior Milestones Assessment and Placement Program (VB-MAPP) is a comprehensive tool used to assess language, social, and learning skills in children with autism or other developmental disabilities. Grounded in B.F. Skinner's analysis of verbal behavior, VB-MAPP measures milestones across multiple domains including manding (requesting), tacting (labeling), intraverbals (conversational skills), and social interaction.

VB-MAPP is divided into several components: milestone assessment, barrier assessment, transition assessment, and task analysis. This structure helps practitioners identify skill levels, pinpoint barriers to learning, and develop individualized intervention plans. It also supports tracking progress over time, ensuring that instruction remains targeted and effective.

The program emphasizes functional communication and social skills, which are crucial for everyday interactions and overall developmental success. VB-MAPP is widely used by behavior analysts, therapists, and educators to tailor interventions that maximize communication potential and social engagement.
    `,
  },
];

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AssessmentPage = () => {
  const [selectedId, setSelectedId] = useState(assessments[0].id);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const selectedAssessment = assessments.find((a) => a.id === selectedId);

  const paragraphs = selectedAssessment.detailed
    .trim()
    .split(/\n+/)
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200">
      {/* Hero Section */}
      <section className="mx-auto mb-12 py-20 bg-indigo-700 shadow-lg text-center text-white relative overflow-hidden">
        {/* Optional background shape */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-gradient-to-tr from-indigo-900 via-indigo-700 to-indigo-600 rounded-3xl pointer-events-none"></div>

        <h1 className="relative text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Autism Assessment Tools
        </h1>
        <p className="relative max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed drop-shadow-md">
          Explore comprehensive assessments designed to evaluate and support
          developmental progress in children with autism spectrum disorder.
          Learn about tailored interventions and tools that empower families and
          professionals.
        </p>
      </section>

      {/* Top navigation bar with headings */}
      <nav className="max-w-7xl mx-auto flex space-x-8 border-b border-indigo-400 pb-4 overflow-x-auto">
        {assessments.map(({ id, title }) => (
          <button
            key={id}
            onClick={() => setSelectedId(id)}
            className={`text-lg font-semibold cursor-pointer whitespace-normal leading-snug transition-colors duration-300 ${
              selectedId === id
                ? "text-indigo-900 border-b-4 border-indigo-700"
                : "text-indigo-600 hover:text-indigo-900"
            }`}
            style={{ minWidth: "160px", textAlign: "center" }}
          >
            {title}
          </button>
        ))}
      </nav>

      {/* Detailed content section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedAssessment.id}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="mt-10 max-w-7xl mx-auto p-8 flex flex-col md:flex-row items-start gap-8"
        >
          {/* Left image */}
          <img
            src={selectedAssessment.image}
            alt={selectedAssessment.title}
            className="w-full md:w-1/3 rounded-lg object-cover shadow-md"
            loading="lazy"
            data-aos="fade-right"
          />

          {/* Right detailed text */}
          <div className="md:w-2/3 text-gray-900 leading-relaxed text-lg space-y-6">
            {paragraphs.map((para, index) => (
              <p key={index} data-aos="fade-left">
                {para}
              </p>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AssessmentPage;
