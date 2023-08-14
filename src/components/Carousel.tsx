"use client";

import React, { useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { useState } from "react";
import { Button } from "./ui/Button";

export const CarouselItem = ({ children, width }: any) => {
  return (
    <div
      className="inline-flex items-center justify-center h-52 bg-green-500 text-white"
      style={{ width: width }}
    >
      {children}
    </div>
  );
};

const Carousel = ({ children }: any) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  const updateIndex = (newIndex: any) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 4000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="whitespace-nowrap transition-all duration-300"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="flex justify-around my-2 ">
        <Button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className="rounded-[2vh]"
        >
          Prev
        </Button>
        <Button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          className="rounded-[2vh]"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Carousel;
