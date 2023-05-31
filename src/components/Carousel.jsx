import { useState } from "react";
import { carouselSlider } from "../constants";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const prevSlide = () => {
    setSlide((slide + carouselSlider.length - 1) % carouselSlider.length);
  };

  const nextSlide = () => {
    setSlide((slide + 1) % carouselSlider.length);
  };

  return (
    <section className="max-w-[1240px] mx-auto px-4 py-16 relative flex items-center justify-center">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl fill-white cursor-pointer left-8"
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl fill-white cursor-pointer right-8"
      />
      {carouselSlider.map(({ id, url }) => (
        <div
          key={id}
          className={
            id === slide ? "opacity-100 duration-300 ease-in" : "opacity-0"
          }
        >
          {id === slide && (
            <img
              src={url}
              alt="Fotos das praias"
              className="w-full h-full object-cover rounded-md"
            />
          )}
        </div>
      ))}
    </section>
  );
};

export default Carousel;
