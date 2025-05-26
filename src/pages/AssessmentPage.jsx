import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

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

const getEmoji = (title) => {
  if (title.includes("Denver")) return "👶";
  if (title.includes("Basic Language")) return "🗣️";
  if (title.includes("PEAK")) return "🌟";
  if (title.includes("Functional Living")) return "🏠";
  if (title.includes("VB-MAPP")) return "🧩";
  return "📊"; // default
};

// Component to scroll to sections
const AssessmentOptions = ({ assessments }) => {
  const handleClick = (title) => {
    const element = document.getElementById(
      title.toLowerCase().replace(/\s+/g, "-")
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {assessments.map((assessment, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center group cursor-pointer border rounded-lg p-4 border-transparent hover:border-blue-600 hover:bg-blue-50"
              onClick={() => handleClick(assessment.title)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  handleClick(assessment.title);
              }}
            >
              <div className="text-4xl mb-2 text-blue-600 group-hover:scale-110 transition-transform">
                {getEmoji(assessment.title)}
              </div>

              <span className="text-center text-md text-blue-700 capitalize group-hover:underline text-sm">
                {assessment.title}
              </span>
              <span className="text-blue-700 text-xl mt-1">&gt;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Assessments = () => {
  const { id } = useParams();

  useEffect(() => {
    AOS.init({ duration: 1000 });

    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [id]);

  return (
    <div className="bg-gray-50 min-h-screen overflow-hidden">
      <AssessmentOptions assessments={assessments} />
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {assessments.map((assessment) => {
            const slug = assessment.title.toLowerCase().replace(/\s+/g, "-");

            return (
              <div
                key={slug}
                id={slug}
                className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row"
                data-aos="fade-up"
              >
                <div className="md:w-1/2">
                  <img
                    src={assessment.image}
                    alt={assessment.title}
                    className="object-cover w-full h-64 md:h-full"
                  />
                </div>

                <div className="p-6 md:w-1/2">
                  <h2 className="text-2xl font-bold text-blue-700 mb-3 flex items-center gap-2">
                    {assessment.title}
                  </h2>
                  <p className="text-gray-700 whitespace-pre-line text-justify">
                    {assessment.detailed}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Assessments;
