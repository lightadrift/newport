"use client";

import {
  SpringValue,
  animated,
  easings,
  useSpring,
  Controller,
} from "@react-spring/web";
import { useEffect } from "react";

// useSpring não funcionando com use client

function Introduction() {
  const FirstAnimation = new Controller({
    from: {
      opacity: 0,
      x: -1000,
    },
    config: {
      duration: 300,
      easing: easings.easeInCubic,
    },
  });
  const SecondAnimation = new Controller({
    from: {
      x: -1000,
      opacity: 0,
    },
  });

  const IntroducitonAnimationChain = async () => {
    await FirstAnimation.start({
      to: {
        opacity: 1,
        x: 0,
      },
    });
    await SecondAnimation.start({
      to: [{ opacity: 1, x: 0, delay: 20 }],
      config: {
        duration: 300,
        easing: easings.easeInCubic,
      },
    });
  };

  useEffect(() => {
    IntroducitonAnimationChain();
  }, []);

  return (
    <>
      <div className="w-full overflow-hidden pl-10">
        <animated.h1
          style={FirstAnimation.springs}
          className=" text-8xl font-black "
        >
          Ronaldo Monteiro
        </animated.h1>
        <animated.h2
          style={SecondAnimation.springs}
          className=" text-4xl font-semibold"
        >
          Software Engineer
        </animated.h2>
        <animated.p className=" w-2/3 text-base">i make things</animated.p>
      </div>
    </>
  );
}

export default Introduction;
