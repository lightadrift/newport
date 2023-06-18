"use client";

import { useCallback, useState } from "react";
import { animated, easings, useSpring, useTransition } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import Modal from "./modal";
import TestDialog from "./test";

export default function Gallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  // const onClick = useCallback(
  //   () => setIndex((state) => (state + 1) % images.length),
  //   []
  // );

  const [props, api] = useSpring(() => ({
    from: {
      opacity: 0,
    },
  }));
  const trasitions = useTransition(index, {
    from: { opacity: 0, x: -140 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 140 },
    config: {
      easing: easings.easeInCubic,
      duration: 300,
    },
    keys: index,
    exitBeforeEnter: true,
  });

  return (
    <>
      <section className="mt-10 flex h-fit w-full flex-col overflow-hidden">
        {trasitions((style, item) => {
          const image = images[item];
          return (
            <>
              <animated.div
                style={style}
                key={item}
                onClick={() => {
                  api.start({
                    to: {
                      opacity: 1,
                    },
                    config: {
                      duration: 400,
                      easing: easings.linear,
                    },
                  });
                  setIsOpen(true);
                }}
                className="relative aspect-[16/8] rounded-md border border-slate-700"
              >
                <Image
                  src={image}
                  fill
                  alt={""}
                  sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                  className="z-40 cursor-zoom-in rounded-md object-cover "
                />
              </animated.div>
              <Modal
                img={image}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                style={props}
                api={api}
              />
            </>
          );
        })}
        {/* <div onClick={onClick} className="w-10 bg-white">
          a
        </div> */}
        <div className="m-2 mt-4 flex place-content-center gap-2">
          {images.slice(0, 5).map((_, i) => {
            return (
              <div
                key={i}
                style={{
                  height: "13px",
                  width: "13px",
                  borderRadius: "50%",
                  border: "2px solid white",
                  backgroundColor: i === index ? "white" : "transparent",
                  cursor: "pointer",
                  transition:
                    "background-color 500ms cubic-bezier(0.4, 0, 0.2, 1) ",
                }}
                onClick={() => {
                  setIndex(i);
                }}
              ></div>
            );
          })}
        </div>
      </section>
    </>
  );
}
