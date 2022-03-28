import React from "react";

const CarouselItem = ({
  title,
  text,
  technologies,
  image,
  github,
  livesite,
  idx,
  activeIndex,
}) => {
  return (
    <div
      className={
        activeIndex !== idx
          ? "hidden"
          : "fadeIn bg-gray-light text-gray-darkest mx-2 border-4 border-gray-darkest rounded bg-gray-lightest shadow-xl"
      }
      id={idx}
    >
      <div className="lg:flex m-4 pb-5 border-b-2 border-gray-darkest">
        <img
          src={image}
          alt={title}
          className="h-30 md:h-60 rounded border-2 border-gray-darkest shadow-xl"
        />
        <div className="pl-4">
          <h1 className="font-semibold text-4xl">{title}</h1>
          <p className="text-xl">{text}</p>
        </div>
      </div>
      <div className="text-xl border-b-2 border-gray-darkest m-4 pb-4">
        <div className="font-semibold"> Technologies Used:</div>
        <ul className="list-disc list-inside grid grid-cols-4">
          {technologies.map(({ title }, idx) => (
            <li key={idx} className="mx-4 list-item">
              {title}
            </li>
          ))}
        </ul>
      </div>
      <div className="m-4 text-xl flex">
        <p className="font-semibold">Link to Github:</p>
        <a href={github} className="underline cursor-pointer pl-2">
          {github}
        </a>
      </div>
      {livesite && (
        <div className="m-4 text-xl flex">
          <p className="font-semibold">Link to live site:</p>
          <a href={livesite} className="underline cursor-pointer pl-2">
            {livesite}
          </a>
        </div>
      )}
    </div>
  );
};

export default CarouselItem;
