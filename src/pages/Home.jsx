import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import Techniques from "../components/Techniques";
import HomeBenefits from "../components/HomeBenefits";
import ParentRole from "../components/ParentRole";
import TherapistRole from "../components/TherapistRole";
import WhyChooseUs from "../components/WhyChooseUs";
// import Testimonials from "../components/Testimonials";
// import ContactCTA from "../components/ContactCTA";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-background overflow-hidden">
      <section>
        <Hero />
      </section>

      <section className="bg-yellow-50">
        <AboutSection />
      </section>

      <section>
        <Techniques />
      </section>

      <section>
        <ParentRole />
      </section>

      <section>
        <TherapistRole />
      </section>
      {/* <section className="py-12 bg-yellow-100" data-aos="zoom-in">
        <Testimonials />
      </section> */}

      <section>
        <Services />
      </section>

      <section>
        <WhyChooseUs />
      </section>

      <section>
        <HomeBenefits />
      </section>
    </div>
  );
};

export default Home;
