import React, { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import { projectInfo } from "../data/data";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = projectInfo.length - 1;
    } else if (newIndex >= projectInfo.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 10000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div>
      <div
        className="pt-5"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {projectInfo.map(
          ({ title, text, technologies, img, github, livesite }, idx) => (
            <CarouselItem
              title={title}
              text={text}
              technologies={technologies}
              image={img}
              github={github}
              livesite={livesite}
              idx={idx}
              key={idx}
              activeIndex={activeIndex}
            />
          )
        )}
      </div>
      <div className="pt-2 flex justify-center items-center">
        <button
          className="bg-gray-darkest text-gray-lightest px-2 rounded py-0.5"
          onClick={() => updateIndex(activeIndex - 1)}
        >
          Previous
        </button>
        {projectInfo.map((item, index) => {
          return (
            <button
              className={`rounded-full border-gray-darkest border-2 h-4 w-4 mx-2 ${
                activeIndex === index && `bg-gray-darkest`
              }`}
              onClick={() => updateIndex(index)}
              key={index}
              id={index}
            ></button>
          );
        })}
        <button
          className="bg-gray-darkest text-gray-lightest rounded px-2 py-0.5"
          onClick={() => updateIndex(activeIndex + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
