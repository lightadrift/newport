"use client";
import Image from "next/image";
import { SpringRef, SpringValue, animated } from "@react-spring/web";

function Modal({
  img,
  isOpen,
  setIsOpen,
  style,
  api,
}: {
  img: string;
  isOpen: boolean;
  setIsOpen: (i: boolean) => void;
  style: {
    opacity: SpringValue<number>;
  };
  api: SpringRef<{
    opacity: number;
  }>;
}) {
  return (
    <>
      <animated.dialog
        style={{ ...style }}
        open={isOpen}
        className={` fixed top-0 z-50 ${
          isOpen ? "flex" : "hidden"
        } h-screen w-full place-content-center items-center bg-black/30 p-0 backdrop-blur-sm`}
      >
        <div className="relative m-2 md:aspect-video aspect-[16/10] w-full overflow-hidden bg-red-200 xl:m-0 xl:w-[80%]">
          <div
            onClick={() => {
              api.start({
                to: {
                  opacity: 0,
                },
                config: {
                  duration: 100,
                },
              });
              setIsOpen(false);
            }}
            className=" absolute left-0 top-0 z-[1] m-2 rounded-[50%] bg-black/60 p-2 text-black hover:scale-110 hover:cursor-pointer"
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8L16 16"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 8L8 16"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className=" relative aspect-[16/8] h-full w-full">
            <Image src={img} fill alt="zoom" className=" h-auto object-cover" />
          </div>
        </div>
      </animated.dialog>
    </>
  );
}

export default Modal;
