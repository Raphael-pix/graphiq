"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    imageUrl: "/assets/images/pic1.webp",
    name: "Kelly Lübbers",
    title: "Head Of Marketing",
    text: "Serious Business helped us bring our brand perception to a whole new level. At first the team challenged us to simplify our company’s narrative to then provide us with a new web and corporate design that we feel confident with that fits to our values and our market.",
  },
  {
    id: 2,
    imageUrl: "/assets/images/pic4.webp",
    name: "Alex Johnson",
    title: "CEO, TechCorp",
    text: "Graphiq helped us elevate our brand beyond expectations. Their team is exceptional at what they do!",
  },
  {
    id: 3,
    imageUrl: "/assets/images/pic3.webp",
    name: "Samantha Lee",
    title: "Marketing Director, StartupX",
    text: "The branding and storytelling expertise at Graphiq are unparalleled. They truly bring brands to life.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const textRef = useRef(null);
  const imageRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);
  const timerRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="px-6 py-12 lg:px-24 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className=" w-full flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/3">

          <div className="w-full flex justify-between items-center border-b pb-2 border-gray-300">
            <h1 className="text-xs font-medium uppercase text-gray-700 tracking-wide">
              Testimonials
            </h1>
            <span className="text-xs text-gray-600">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>

          <div className="text-center w-full flex flex-col items-center">
            <div
              ref={imageRef}
              className="w-24 h-24 rounded-full overflow-hidden mt-6"
            >
              <Image
                src={testimonials[currentIndex].imageUrl}
                alt={testimonials[currentIndex].name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>

            <p ref={nameRef} className="text-base font-semibold mt-4">
              {testimonials[currentIndex].name}
            </p>
            <p ref={titleRef} className="text-sm text-gray-500">
              {testimonials[currentIndex].title}
            </p>

            <div className="flex items-center justify-center gap-4 mt-4 w-full">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full border bg-neutral-white border-gray-400 hover:border-black transition"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className=" relative p-2 rounded-full border bg-neutral-white border-gray-400 hover:border-black transition"
                aria-label="Next testimonial"
              >
                <ArrowRight size={16} />
                <svg
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 -rotate-90"
                  viewBox="0 0 100 100"
                >
                  <circle
                    ref={timerRef}
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3">
          <p
            ref={textRef}
            className="text-2xl lg:text-3xl font-light leading-relaxed text-gray-800 font-serif"
          >
            “{testimonials[currentIndex].text}”
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
