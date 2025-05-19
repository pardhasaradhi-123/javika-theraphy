import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

SwiperCore.use([Autoplay, Pagination]);

const services = [
  {
    name: "ABA Therapy (Applied Behavior Analysis)",
    image:
      "https://media.istockphoto.com/id/1426218664/photo/child-playing-with-toy-pyramid-at-wooden-table-indoors-closeup-aba-therapy-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=rGNUD56VtBL1l0Td8tz6pnsPS_JTof8q6VnSFP1POTQ=",
  },
  {
    name: "Speech & Language Therapy",
    image:
      "https://plus.unsplash.com/premium_photo-1661724564774-69a5c92a56da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3BlZWNoJTIwVGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Occupational Therapy",
    image:
      "https://plus.unsplash.com/premium_photo-1661675788810-98afdba77747?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T2NjdXBhdGlvbmFsJTIwVGhlcmFweSUyMHdpdGglMjBjaGlsZHJlbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Special Education",
    image:
      "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U3BlY2lhbCUyMEVkdWNhdGlvbiUyMHdpdGglMjBjaGlsZHJlbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Parent Training & Support",
    image:
      "https://plus.unsplash.com/premium_photo-1663127497730-ec79d322ad58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFBhcmVudCUyMFRyYWluaW5nJTIwJTI2JTIwU3VwcG9ydHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Psychological Counseling",
    image:
      "https://plus.unsplash.com/premium_photo-1664908457645-f203e3402e68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHN5Y2hvbG9naWNhbCUyMENvdW5zZWxpbmclMjB3aXRoJTIwY2hpbGRyZW58ZW58MHx8MHx8fDA%3D",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-12 text-blue-800"
          data-aos="fade-up"
        >
          Our Core Services at Javika Therapy
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-blue-50 p-6 rounded shadow hover:shadow-lg transition h-full flex flex-col items-center">
                <div className="w-full h-48 rounded overflow-hidden mb-4">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 text-center">
                  {service.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
