import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import abaWhat from "../assets/abaTheraphy.jsx/ABAwhat.png";
import occupationalIMG from "../assets/occupationalAssessment.png";
import phsycologyIMG from "../assets/psycologyIMG.png";
import pshycologicalIMG from "../assets/pshycologicalIMG.png";
import pshycologicalAssesment from "../assets/pshycologicalAssesment.png";
import pshycIMG from "../assets/pshcIMG.png";

const descriptions = {
  "aba-therapy": {
    images: [
      "https://plus.unsplash.com/premium_photo-1723716015078-1d8615d84633?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXV0aXNtJTIwVGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D",
      abaWhat,
    ],
    what: [
      "In-home ABA therapy provides a safe, natural environment for individuals with autism to improve social, communication, and learning skills with the comfort and convenience of their home. ABA (Applied Behavioral Analysis) is considered the gold-standard therapy for treating individuals, often children, with autism using reinforcement techniques to improve learning and communication skills.",
      "Consistent ABA therapy reduces the need for more costly therapies for a child in the future. There are a lot of benefits of ABA therapy that can help your child grow and develop skills such as:",

      [
        "Better communication",
        "Increased comfort in socializing",
        "Increased attention and focus",
        "Reduction in behavioral challenges",
      ],
      "ABA therapy should be personalized based on a child's needs and preferences using a detailed assessment of a child's skills, behaviors, and interests. Goals should be personalized based on a child's age and ability. Some basic goals include improving skills around: communication, social interaction, self-care, academics, and play. All these goals can be reached using different techniques including positive reinforcement and task analysis.",
      "**What are the benefits of home-based ABA therapy for my child?**",
      "**1. Convenience**  - One of the greatest advantages of having in-home ABA therapy is that it is very convenient for the child and parents. It saves a lot of time and energy for parents when they do not need to go to care centers",
      "**2. Familiarity** - The child feels more comfortable if the ABA therapy is provided at home. Children with autism find it scary and uncomfortable to be treated at care centers. Home-based ABA therapy allows for the therapist to monitor and provide treatment for the child within a safe space.",
      "**3. Natural reinforcers** - A home provides many natural reinforcers that can be used to motivate children. Positive reinforcement using reinforcers can encourage behavior in the future. Activities, games, and toys in a home are natural positive reinforcers that therapists can use to reinforce healthy behaviors and increase motivation.",
      "**4. Better family relationships** - Most children feel more comfortable when they are with their parents. With in-home ABA therapy, all family members can actively participate in the child's therapy sessions. Both family members and therapists can more easily understand the child's needs and preferences. Using in-home ABA therapy, therapists and parents can keep track of a child's progress and help improve the child's interaction with siblings and parents. ",
      "**5. Generalization** - Learning simple skills in a home setting helps children apply these skills to future environments. For example, if a home has a flushing toilet with a handle, a child who uses that toilet often will remember to pull the handle to flush the toilet on other toilets.",
      "**6. Addressing specific behaviors at home** - Certain behaviors that happen most often in a home setting can be addressed more easily. Some examples might be: getting dressed, using the toilet, eating at mealtime, brushing teeth, or having a bedtime routine. As children get older, another common behavior is using electronics for a prolonged period and not engaging with family or schoolwork. With a therapist at home, the therapist will be able to encourage positive behaviors and habits",
      "**7. Eliminate transitions** - Many children find transitions difficult to work with and may resist attending sessions. Home-based ABA therapy eliminates the need for getting ready to leave a home, getting on transportation, or entering a new facility, thus, making a child more comfortable.",
    ],

    procedure: [
      "ABA therapy at home relies on a variety of evidence-based techniques to teach skills and manage behaviors in a natural environment. Here are some effective techniques commonly used:",
      [
        "**Discrete Trial Training (DTT):** Breaks down skills into small, manageable steps . Each step involves clear instructions, a prompt if needed, and positive reinforcement for correct responses.",
        "**Natural Environment Teaching (NET):** Focuses on learning in everyday situations (e.g., teaching colors during playtime or while sorting laundry).Encourages children to generalize skills by practicing them naturally.",
        "**Positive Reinforcement:** Rewards desired behavior with praise, tokens, or preferred activities. Reinforcers are individualized to what motivates the child.",
        "**Prompting :**Provides support to help the child perform a skill, such as verbal, visual, or physical prompts. Prompts are gradually faded as the child gains independence.",
        "**Task Analysis:** Breaks complex tasks (e.g., brushing teeth) into smaller steps. Each step is taught individually and combined into the full routine.",
        "**Behavior Management:** Uses strategies like redirection, planned ignoring, or functional communication training to reduce challenging behaviors.",
        "**Generalization:** Ensures that skills learned during therapy are applied across different settings, people, and situations.",
        "**Visual Supports:** Uses tools like visual schedules, choice boards, or social stories to support communication and understanding. These techniques can be tailored to the child's specific needs and therapy goals. Consistency and collaboration",
      ],
    ],
    assessment: [
      "An ABA assessment is essential for creating tailored treatment plans for children with autism, evaluating their unique needs and strengths through various structured methods.",
      "**Importance of ABA Assessment**",
      "Applied Behavior Analysis (ABA) assessments form the foundation of effective treatment for children with autism spectrum disorder (ASD). These assessments are designed to **evaluate the child's strengths and challenges**, ultimately guiding the development of individualized treatment plans that help promote positive behaviors and skill acquisition. They help identify specific goals that address communication skills, daily living skills, and social interactions ",
      "**What Does an ABA Assessment Involve?**",
      "An ABA assessment typically includes several key components:",
      [
        "**Parent and Caregiver Interview:** Initial meetings with caregivers are vital for gathering comprehensive information regarding the child’s developmental history, routines, and any specific behavioral concerns .",
        "**Direct Observation:** The behavior analyst conducts observations of the child in various settings, such as home or school, to gain insights into their natural interactions, communication styles, and any challenging behaviors ",
        "**Skill-Based Assessments:** Various standardized tools are utilized to evaluate the child's verbal, social, and daily living skills. For instance, assessments like the Verbal Behavior Milestones Assessment and Placement Program (VB-MAPP) and the Assessment of Basic Language and Learning Skills - Revised (ABLLS-R) are often used.",
        "**Functional Behavior Assessment (FBA):** This component identifies the reasons behind specific behaviors, helping to create interventions tailored to address these behaviors effectively.",
        "**Ongoing Monitoring:** Progress is continually evaluated, ensuring that the interventions remain relevant and effective, adjusting them as necessary based on the child’s evolving needs.",
      ],
      "Common Types of ABA Assessments:",
      [
        "Several assessment tools are integral to the ABA process, including",
        "**VB-MAPP:** Focuses on language and social skills, helping to guide language development programs",
        "**ABLLS-R:** Assesses basic language and learning skills, aiding in the identification of areas requiring intervention.",
        "**AFLS:** Evaluates functional living skills crucial for enhancing independence.",
      ],
    ],
  },
  "occupational-therapy": {
    images: [
      "https://plus.unsplash.com/premium_photo-1661675788810-98afdba77747?auto=format&fit=crop&w=600&q=60",
      occupationalIMG,
    ],
    what: [
      "Occupational therapy is a field of healthcare that holistically treats people who have injuries, disabilities or other conditions, including autism. In this practice, Occupational Therapists (OTs) **help patients develop, recover or maintain their ability to engage in meaningful daily activities, including effective communication.**",
      "Occupational therapy is a field of healthcare that holistically treats people who have injuries, disabilities or other conditions, including autism. In this practice, Occupational Therapists (OTs) help patients develop, recover or maintain their ability to engage in meaningful daily activities, including effective communication.",
      "Occupational Therapy assists individuals in achieving independence in daily activities through improved motor skills, coordination, and sensory integration.Therapists evaluate the individual's needs and help develop fine motor skills, cognitive abilities, and adaptive strategies necessary for tasks like dressing, feeding, or writing.",
      "This therapy is often used for children with developmental delays and adults recovering from injuries or surgeries.",
    ],
    procedure: [
      "**Common Occupational Therapy Interventions for Autism:**",
      [
        "**Occupational therapists assess individuals with autism across key areas:** social skills, communication, sensory processing, motor function, and cognitive ability.",
        "Standard tools used include the Childhood Autism Rating Scale (CARS), sensory profiles, and DSM-5-TR diagnostic criteria to identify specific challenges.",
        "Therapists collaborate with families to set personalized, measurable goals which shape a tailored therapy plan.",
        "The assessment outcomes guide the intervention strategy, focusing on skill development, sensory integration, and behavior regulation to promote independence and daily functioning.",
      ],
      "After completing an evaluation, the OT for autism works with the patient and family to develop an intervention plan and treatment goals. Occupational therapy autism interventions may include :",
      [
        "Sensory integration and sensory-based strategies",
        "Mental health and wellness treatment",
        "Emotional development and self-regulation strategies and programs",
        "Peer groups, social participation and play activities",
        "Self-care routines to help with daily activities such as bathing, feeding and grooming",
        "Motor development techniques",
        "Supporting an adolescent’s transition into adulthood and helping them build skills to enter the workforce",
        "Cognitive behavioral approaches to support positive behaviors",
      ],
    ],
    assessment: [
      "To evaluate a patient, the OT may use screening tools such as an ASD checklist, a sensory profile, the Childhood Autism Rating Scale (CARS, or diagnosis criteria set forth in the fifth edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-5-TR). When observing the patient, an OT for autism will consider the following skills:",
      [
        "**Social:** Interactions with others, emotion regulation, behavior, desire for personal space, eye contact and aggression",
        "**Communication:** Speech and non-verbal communication",
        "**Cognitive:** Attention span and stamina",
        "**Sensory:** Responses to stimuli, sensory seeking and sensory defensiveness",
        "**Motor:** Posture, balance and manipulation of small objects",
      ],
    ],
  },
  "speech-therapy": {
    url: "https://plus.unsplash.com/premium_photo-1661724564774-69a5c92a56da?auto=format&fit=crop&w=600&q=60",
    what: [
      "Speech therapy, also known as speech-language therapy, is a type of treatment that addresses communication and swallowing difficulties. It's provided by a speech-language pathologist (SLP) (also called a speech therapist) to help individuals improve their ability to speak clearly, understand and express language, and safely swallow. ",
      "Here's a more detailed breakdown:",
      "What it addresses:",
      [
        "**Speech Sounds:** Difficulty producing sounds correctly, which can involve substitutions, distortions, or omissions. ",
        "**Fluency:** Stuttering or cluttering, where speech may be interrupted by repetitions, prolongations, or excessive pauses.",
        "**Voice:** Problems with voice quality, pitch, or loudness. ",
        "**Language: Difficulties understanding spoken or written language (receptive language) or expressing thoughts and ideas (expressive language). ",
        "**Swallowing:** Difficulty swallowing, which can affect nutrition and safety.",
        "**Cognitive-Communication:** Challenges with thinking, memory, and problem-solving that impact communication. ",
      ],
      "**Who benefits?**",
      "Speech therapy can help individuals of all ages, from infants to older adults, with various communication and swallowing difficulties. This includes: ",
      [
        "Children with speech and language delays or disorders.",
        "Individuals with autism spectrum disorder.",
        "People recovering from stroke or other neurological conditions.",
        "Those with hearing loss.",
        "Individuals with voice disorders.",
        "People with fluency disorders, such as stuttering.",
        "Those with oral-motor or feeding difficulties.",
      ],
    ],
    procedure: [
      "**1. Assessment:**",
      [
        "**Initial Evaluation:** A speech-language pathologist (SLP) assesses the individual's communication and/or swallowing abilities through various tests, conversations, and observations.",
        "**Identifying Needs:** The assessment helps pinpoint the type and severity of the communication disorder and potential underlying causes.",
        "**Personalized Plan:** Based on the assessment, the SLP develops an individualized treatment plan that outlines specific goals and strategies.",
      ],
      "**2. Treatment:**",
      [
        "**One-on-One Sessions:** Speech therapy often involves individual sessions with the SLP where specific exercises and techniques are practiced.",
        "**Articulation Exercises:** These focus on improving the clarity of speech sounds, often involving exercises to strengthen and coordinate the muscles involved in speech production.",
        "**Language Activities:** Activities like vocabulary building, grammar practice, and sentence structure exercises are used to enhance language skills. ",
        "**Voice Therapy:** This focuses on improving vocal quality, breath control, and vocal hygiene for individuals with voice disorders.",
        "**●	Swallowing Exercises:** For individuals with swallowing difficulties, exercises may be used to strengthen throat muscles and improve swallowing coordination.",
        "**●	Cognitive Exercises:** These activities, such as memory games and problem-solving tasks, can help improve cognitive skills that support communication.",
        "**Caregiver Support:** SLPs often provide guidance and support to caregivers to help them reinforce therapy techniques at home.",
        "**Group Therapy:** In some cases, group therapy sessions can be beneficial, especially for practicing social communication skills.",
      ],
      "**3. Techniques and Activities:**",
      [
        "**Articulation Therapy:** This involves practicing specific sounds, syllables, words, or sentences, often with visual and auditory feedback. ",
        "**Language Intervention:** Activities like playing games, reading books, and engaging in conversations are used to stimulate language development. ",
        "**Oral Motor Exercises:** These exercises strengthen the muscles of the face, tongue, and jaw to improve speech production. ",
        "**Fluency Therapy:** This focuses on improving the flow and rhythm of speech, often using techniques like breathing exercises and relaxation techniques. ",
        "**Reading Aloud:** This can help strengthen the connection between the brain and the muscles involved in speech production. ",
        "**Playing Word Games:** These games can improve memory, vocabulary, and cognitive skills. ",
        "**Social Communication Activities:** These activities focus on improving communication skills in social situations, such as turn-taking, eye contact, and understanding social cues. ",
      ],
      "**4. Monitoring and Adjustments:**",
      [
        "**Progress Tracking:** The SLP monitors the individual's progress and adjusts the treatment plan as needed.",
        "**●	Regular Review:** The treatment plan may be reviewed and adjusted periodically to ensure that it continues to meet the individual's needs. ",
      ],
      "Speech therapy is a highly individualized process, and the specific procedures and techniques used will vary depending on the individual's specific needs and goals. ",
    ],
    assessment: [
      "A speech therapy assessment evaluates an individual's speech and language skills to identify any potential disorders and determine the most appropriate treatment plan. It involves a comprehensive evaluation of various areas, including speech production, language comprehension, and articulation. ",
      "Key aspects of a speech therapy assessment:",
      "Gathering information about the individual's medical, developmental, and language history, including any family history of speech or language difficulties. ",
      [
        "**Oral Mechanism Examination:** Assessing the physical structures and functions involved in speech, such as the lips, tongue, teeth, jaw, and velum. ",
        "**Speech Sound Assessment:** Evaluating the accuracy and clarity of speech sound production through various tasks, including single word tests, conversational speech samples, and stimulability checks. ",
        "**Language Assessment:** Assessing comprehension, expression, vocabulary, and grammar through standardized and informal methods, including language samples and play-based activities. ",
        "**Voice Assessment:** Evaluating vocal quality, pitch, loudness, and resonance. ",
        "**Swallowing Assessment:** Assessing swallowing ability, including the efficiency of oral and pharyngeal swallows. ",
        "**Standardized Tests:** Utilizing standardized assessments to compare an individual's performance to others of the same age and gender. ",
        "**Informal Assessment:** Employing informal methods like play-based activities and conversational samples to assess communication skills in a more natural setting. ",
        "**Dynamic Assessment:** Evaluating an individual's learning potential and responsiveness to intervention by testing, teaching, and retesting. ",
        "**Oral Motor Assessment:** Evaluating the function and coordination of oral muscles and movements. ",
        "**Diadochokinetic Rate (DDK) Rate:** Assessing the ability to rapidly repeat sounds, such as **puh-tuh-kuh**, to evaluate oral motor coordination. ",
      ],
      "The assessment process helps determine the presence of speech and language disorders, the severity of those disorders, and the specific needs of the individual. This information is crucial for developing an effective treatment plan that addresses the individual's unique challenges and goals. ",
    ],
  },
  "psychological-counselling": {
    images: [
      "https://plus.unsplash.com/premium_photo-1664910881558-45d8a08b78b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UHN5Y2hvbG9naWNhbCUyMENvdW5zZWxpbmclMjB3aXRoJTIwY2hpbGRyZW58ZW58MHx8MHx8fDA%3D",
      phsycologyIMG,
      pshycologicalIMG,
      pshycologicalAssesment,
      pshycIMG,
    ],
    what: [
      "Psychological therapy for autism, also known as psychosocial interventions, aims to improve a person's social, emotional, and behavioral functioning. These therapies, often tailored to individual needs, help manage autism symptoms and co-occurring mental health conditions like anxiety or depression. Common approaches include cognitive behavioral therapy (CBT), play therapy, and applied behavior analysis (ABA). ",
    ],
    procedure: [
      "Initial sessions gather psychological and developmental history.",
      "Therapists use CBT, mindfulness, or ABA principles depending on needs.",
      "Ongoing sessions help children apply emotional tools in daily life.",
    ],
    assessment: [
      "Includes cognitive and behavioral evaluation using tests, interviews, and observation.",
      "Tools include developmental scales, adaptive behavior checklists, and autism-specific instruments.",
      "Results support diagnosis and individualized treatment planning.",
    ],
  },
  "parent-and-caregiver-training": {
    url: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=600&q=60",
    what: [
      "Family and caregiver training equips parents with tools to reinforce skills taught in therapy at home.",
      "Workshops help parents understand their child's diagnosis, create structured routines, and reduce problem behaviors.",
      "Support improves child progress, family engagement, and long-term outcomes.",
    ],
    procedure: [
      "Training sessions cover ABA basics, behavior tracking, and reinforcement methods.",
      "Parents learn to implement therapy strategies in daily routines.",
      "Ongoing check-ins help parents adjust techniques as the child grows.",
    ],
    assessment: [
      "Evaluation includes family interviews, IEP/504 support, and collaboration with school staff.",
      "Goal setting is personalized to the child’s challenges and the family’s strengths.",
      "Support networks and sibling training may also be included.",
    ],
  },
  "social-skills-training": {
    url: "https://plus.unsplash.com/premium_photo-1663089662335-f04d55ce328b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJlaGF2aW9yJTIwTWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    what: [
      "**Soft Skills Training (SST)** is an evidence-based practice for children and youth with autism spectrum disorder (ASD) from 3 to 22 years old.  SST includes any adult-directed instruction in which social skills are targeted for improvement. ",
      "SST can be used to increase social interactions, play skills, regulation of emotions, perspectivetaking, and communication skills.  Research studies have shown that social skills training has been used effectively with many age groups to achieve outcomes in the following areas: social, communication, behavior, play, and cognitive.",
      "SST Provides opportunities for your child to practice social interactions through role plays. For example, role play with your child saying, “hello,” to a peer or asking a peer a question. Provide reinforcements (such as time with a favorite toy or an activity) for your child using appropriate social behaviors.  Create opportunities for your child to practice social skills with peers through activities such as a sports team, religious group, or play group.  ",
    ],
    procedure: [
      "Based upon the recent review, social skills training meets the evidence-based practice criteria set by NPDC with 8 single case design studies and 7 group design studies. The practice has been effective for preschoolers (3-5 years) to high school-age learners (15-22 years) with ASD. Evidence-based practices (EBP) and studies included in the 2014 EBP report detailed how social skills training can be used effectively to address:  social, communication, behavior, play, and cognitive outcomes.",
      "Social skills training can be used by professionals such as teachers, special educators, speechlanguage pathologists, paraprofessionals, counselors, and psychologists.  Training could take place in a school, clinic, or other community-based setting.  Parents and family members can sometimes be included in the SST efforts.  Parents and family members also can be invaluable in supporting the learning, generalization, and maintenance of social skills by helping their child practice skills in the home and reinforcing the social skills they see their child using with family members and peers.",
    ],
    assessment: [
      "**Initial Assessment:**",
      [
        "This involves gathering information about the individual's social functioning.",
        "**Interviews:** With the individual, family members, and potentially teachers or caregivers to understand their social strengths and challenges. ",
        "**Observations:** In various settings (e.g., school, home, therapy sessions) to observe social interactions and behaviors. ",
        "**Standardized Assessments:** Using tools like the Social Responsiveness Scale (SRS) or the Social Skills Improvement System (SSIS) to assess social skills and related behaviors. ",
      ],
      "**Identifying Target Skills:**",
      [
        "Based on the assessment, specific social skills that need improvement are identified. ",
        "Initiating and maintaining conversations. ",
        "Understanding social cues (verbal and nonverbal). ",
        "Managing emotions and behavior in social situations. ",
        "Developing friendships and social relationships. ",
      ],
      "**Developing an Individualized Plan:**",
      [
        "A tailored SST plan is created, outlining specific goals, strategies, and activities based on the identified needs. ",
        "**Intervention Techniques:**",
        "**Modeling:** Demonstrating desired social behaviors.",
        "**Role-playing:** Practicing social skills in simulated situations.",
        "**Positive Reinforcement:** Rewarding positive social behaviors to encourage their use.",
        "**Feedback:** Providing constructive feedback on performance during practice.",
        "**Social Stories:** Using stories to teach social situations and expectations.",
        "**Video Modeling:** Watching videos of individuals successfully using social skills.",
        "**Behavioral Rehearsal:** Practicing new skills in a safe and supportive environment.",
        "**Scripting:** Using scripts to guide social interactions.",
        "**Self-Monitoring:** Helping individuals track their own social behaviors. ",
      ],
      "**Ongoing Support and Generalization:**",
      [
        "**Generalization** - Strategies are implemented to help the individual apply learned skills in different settings and with different people. ",
        "**Maintenance** - Ongoing support and reinforcement are provided to ensure skills are maintained over time. ",
        "**Family Involvement** - Parents and caregivers are often involved in the training process to support the individual and reinforce skills at home. ",
      ],
      "**Key Considerations:**",
      [
        "**Individual Needs:** SST should be tailored to the individual's specific strengths, weaknesses, and preferences. ",
        "**Meaningful Context:** Social skills training should be relevant and engaging for the individual. ",
        "**Collaboration:** A team approach involving therapists, educators, and family members is often beneficial. ",
        "**Evidence-Based Practices:** SST should be based on research and evidence-based practices. ",
      ],
    ],
  },
};

function renderWithBold(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

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
        <div className="flex flex-col justify-center" data-aos="zoom-in">
          {(therapyData?.images || [imageUrl]).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Therapy visual ${index + 1}`}
              className="rounded-lg shadow-lg w-full h-auto object-cover mb-4"
              data-aos="zoom-in"
            />
          ))}
        </div>
        <div>
          <h1
            className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 mb-6 capitalize"
            data-aos="fade-right"
          >
            {section?.replace("-", " ")} - {type?.replace("-", " ")}
          </h1>
          {content.map((item, idx) => {
            if (typeof item === "string") {
              return (
                <p
                  key={idx}
                  className="text-gray-700 text-base md:text-lg leading-relaxed mb-5 whitespace-pre-line"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  {renderWithBold(item)}
                </p>
              );
            } else if (Array.isArray(item)) {
              return (
                <ul
                  key={idx}
                  className="list-decimal list-inside space-y-2 pl-4 text-gray-700 mb-5"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  {item.map((point, subIdx) => (
                    <li
                      key={subIdx}
                      className="text-base md:text-lg leading-relaxed"
                    >
                      {renderWithBold(point)}
                    </li>
                  ))}
                </ul>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}
