// src/components/Techniques.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const techniques = [
  {
    title: "Discrete Trial Training (DTT)",
    description:
      "Breaking skills into small steps with clear instructions and reinforcement.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xUWXVn_8zqJZ-PGqwXDuMUhcf5R1zK0IOg&s",
  },
  {
    title: "Natural Environment Teaching (NET)",
    description:
      "Teaching skills through everyday activities encouraging natural generalization.",
    image:
      "https://plus.unsplash.com/premium_photo-1681140560898-bc854a3b8b1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmF0dXJhbCUyMEVudmlyb25tZW50JTIwVGVhY2hpbmclMjAoTkVUKXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Positive Reinforcement",
    description:
      "Rewarding desired behavior with praise, tokens, or preferred activities tailored to the child.",
    image:
      "https://plus.unsplash.com/premium_photo-1682091460158-20415d935e47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UG9zaXRpdmUlMjBSZWluZm9yY2VtZW50JTIwd2l0aCUyMGNoaWxkcmVufGVufDB8fDB8fHww",
  },
  {
    title: "Prompting",
    description:
      "Providing verbal, visual, or physical cues that are gradually faded as the child gains independence.",
    image:
      "https://plus.unsplash.com/premium_photo-1683147687657-4e4dde6541c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJvdmlkaW5nJTIwdmVyYmFsJTJDJTIwdmlzdWFsJTJDJTIwb3IlMjBwaHlzaWNhbCUyMGN1ZXMlMjB0aGF0JTIwYXJlJTIwZ3JhZHVhbGx5JTIwZmFkZWQlMjBhcyUyMHRoZSUyMGNoaWxkJTIwZ2FpbnMlMjBpbmRlcGVuZGVuY2UufGVufDB8fDB8fHww",
  },
  {
    title: "Task Analysis",
    description:
      "Breaking complex routines (like brushing teeth) into smaller teachable steps.",
    image:
      "https://plus.unsplash.com/premium_photo-1661868374252-3d506d3e2223?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QnJlYWtpbmclMjBjb21wbGV4JTIwcm91dGluZXMlMjAobGlrZSUyMGJydXNoaW5nJTIwdGVldGgpJTIwaW50byUyMHNtYWxsZXIlMjB0ZWFjaGFibGUlMjBzdGVwcy58ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Behavior Management",
    description:
      "Using strategies like redirection and communication to reduce challenging behaviors.",
    image:
      "https://plus.unsplash.com/premium_photo-1663089662335-f04d55ce328b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJlaGF2aW9yJTIwTWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Generalization",
    description:
      "Ensuring skills transfer across different settings, people, and situations.",
    image:
      "https://images.unsplash.com/photo-1722963220475-979db2dbf216?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEVuc3VyaW5nJTIwc2tpbGxzJTIwdHJhbnNmZXIlMjBhY3Jvc3MlMjBkaWZmZXJlbnQlMjBzZXR0aW5ncyUyQyUyMHBlb3BsZSUyQyUyMGFuZCUyMHNpdHVhdGlvbnMufGVufDB8fDB8fHww",
  },
  {
    title: "Visual Supports",
    description:
      "Using visual schedules, choice boards, or social stories to support communication and understanding.",
    image:
      "https://images.unsplash.com/photo-1676276375900-dd41f828c985?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VXNpbmclMjB2aXN1YWwlMjBzY2hlZHVsZXMlMkMlMjBjaG9pY2UlMjBib2FyZHMlMkMlMjBvciUyMHNvY2lhbCUyMHN0b3JpZXMlMjB0byUyMHN1cHBvcnQlMjBjb21tdW5pY2F0aW9uJTIwYW5kJTIwdW5kZXJzdGFuZGluZy58ZW58MHx8MHx8fDA%3D",
  },
];

export default function Techniques() {
  return (
    <section className="mx-auto px-6 py-9 bg-white rounded-lg">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-10">
        Common ABA Therapy Techniques Used at Home
      </h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {techniques.map((technique, index) => (
          <SwiperSlide key={index}>
            <div className="bg-blue-50 p-6 rounded shadow hover:shadow-lg transition h-full flex flex-col items-center">
              <div className="w-full h-48 rounded overflow-hidden mb-4">
                <img
                  src={technique.image}
                  alt={technique.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-semibold text-yellow-400 text-center">
                {technique.title}
              </h3>
              <p className="text-gray-600 text-sm">{technique.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
