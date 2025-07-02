import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/logo.png";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white text-gray-800 pb-10 overflow-hidden">
      {/* Hero */}
      <div
        className="text-center mb-16 py-7 px-6"
        style={{
          background: "linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About Javika Therapy
        </h1>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
          Transforming lives through care, compassion, and child-centered
          therapies.
        </p>
      </div>

      {/* Founding Purpose */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20 px-20">
        <div className="w-full md:w-1/2" data-aos="fade-right">
          <img
            src={logo}
            alt="Therapy session"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Javika Therapy was founded with one simple goal — to make early
            intervention, emotional support, and developmental therapies
            accessible and personalized for every child. Built on the belief
            that <b>every child deserves the chance to thrive</b>, we’ve created
            a safe space where growth happens through love, guidance, and
            professional care.
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="flex flex-col items-center gap-10 mb-20 px-4 md:px-16">
        <div
          className="w-full md:w-4/5 p-8 md:p-10 rounded-xl shadow-md text-center"
          data-aos="fade-right"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            At Javika Therapy, our mission is to provide{" "}
            <b>holistic development</b> for children by combining{" "}
            <b>expert therapeutic methods</b> with a{" "}
            <b>nurturing and inclusive environment</b>. We empower not just
            children, but families — helping them understand, support, and
            celebrate their child’s unique progress.
          </p>
          <ul className="text-gray-700 flex flex-wrap justify-center gap-4 mt-4">
            <li className="bg-white px-4 py-2 rounded-full shadow text-sm md:text-base">
              Offering <b>individualized therapy plans</b>
            </li>
            <li className="bg-white px-4 py-2 rounded-full shadow text-sm md:text-base">
              Encouraging <b>early intervention</b>
            </li>
            <li className="bg-white px-4 py-2 rounded-full shadow text-sm md:text-base">
              Fostering a <b>safe, accepted, and motivating</b> space
            </li>
            <li className="bg-white px-4 py-2 rounded-full shadow text-sm md:text-base">
              <b>Collaborating with families</b> and educators
            </li>
            <li className="bg-white px-4 py-2 rounded-full shadow text-sm md:text-base">
              Promoting <b>overall well-being</b>
            </li>
            <li className="bg-white px-4 py-2 rounded-full shadow text-sm md:text-base">
              Creating <b>trust and compassion</b>
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-6 text-lg">
            Together, we work toward building a brighter, more confident future
            for every child who walks through our doors.
          </p>
        </div>
      </div>

      {/* Our Approach */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20 px-16">
        <div className="w-full md:w-1/2" data-aos="fade-right">
          <img
            src="https://plus.unsplash.com/premium_photo-1723741300671-60fa3ee0fc58?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Child-focused therapy"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Child-Centered, Family-Focused
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Every child’s journey is different. That’s why we follow a
            personalized, evidence-based approach rooted in play, trust, and
            consistency. We involve parents and caregivers at every step,
            ensuring that the progress made in our center continues at home and
            school — turning small steps into long-term success.
          </p>
        </div>
      </div>

      {/* Why Families Trust Us */}
      <div className="text-center max-w-4xl mx-auto mb-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Why Families Choose Javika
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Because we don’t just offer therapy — we offer hope, understanding,
          and partnership. Our team of certified professionals are deeply
          passionate about what they do. We’re proud of the meaningful
          relationships we build with each family, the milestones we celebrate
          together, and the positive change we help create in every child's
          life.
        </p>
      </div>

      {/* Final Note */}
      <div
        className="bg-blue-50 rounded-xl shadow-md p-10 max-w-5xl mx-auto text-center"
        data-aos="zoom-in"
      >
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          More Than a Therapy Center
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Javika Therapy is a <b>home for healing</b>, a{" "}
          <b>platform for progress</b>, and a <b>community of care</b>. Whether
          you’re just starting your journey or looking for continued support,
          we’re here for you — with open hearts and open arms.
        </p>
      </div>
    </section>
  );
};

export default About;
