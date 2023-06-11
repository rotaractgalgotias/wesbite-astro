import * as React from "react";
import Carousel from "framer-motion-carousel";

type Props = {
  sliderImages: Array<{
    image: string;
    id: string;
    alt: string;
  }>;
};

export function HeroSlider(props: Props) {
  return (
    <div className={'bg-gray-200 h-full w-full rounded-lg overflow-hidden'}>
      <Carousel
        autoPlay={true}
        interval={4000}
        loop={true}
        renderArrowLeft={() => null}
        renderArrowRight={({ activeIndex, handleNext }) => null}
        renderDots={({ setActiveIndex, activeIndex }) => null}
      >
        {props.sliderImages.map((image, index) => {
          return (
            <div
              key={index}
              className={"flex h-full w-full cursor-grab active:cursor-grabbing"}
            >
              <img
                draggable={false}
                className={" mx-auto h-full rounded-md object-cover shadow-lg"}
                src={image.image}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>

    </div>
  );
}
