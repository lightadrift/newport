"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { animated, easings, useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import style from "./header.module.css";
import useWindowDimensions from "hooks/useDimensions";
import MobileHeader from "./mobile_header";

const itens = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/about": {
    name: "about",
  },
};

const Item = ({ name, href }: { name: string; href: string }) => {
  const [props, set] = useSpring(() => ({
    scale: 1,
    y: 0,
    marginLeft: 0,
    marginRight: 0,
    config: {
      easing: easings.linear,
      mass: 20,
      duration: 110,
    },
  }));

  return (
    <>
      <animated.div
        style={props}
        onMouseEnter={() =>
          set.start({ scale: 1.5, y: -6, marginLeft: 12, marginRight: 12 })
        }
        onMouseLeave={() =>
          set.start({ scale: 1, y: 0, marginLeft: 0, marginRight: 0 })
        }
      >
        <Link href={href}>{name}</Link>
      </animated.div>
    </>
  );
};

export function Header() {
  const [mouseCoords, setMouseCoords] = useState({ x: 100, y: 100 });
  const [isMounted, setIsMounted] = useState(false);
  const { width, height } = useWindowDimensions(setIsMounted);
  const [opacity, setOpacity] = useState(0);

  function HandleMouse(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setMouseCoords({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  }

  const circleStyle = {
    "--mouse-x": `${mouseCoords.x}px`,
    "--mouse-y": `${mouseCoords.y}px`,
    accentColor: "initial",
  };

  const circleStyle2 = {
    "--mouse-x": `${mouseCoords.x}px`,
    "--mouse-y": `${mouseCoords.y}px`,
    "--opacity-2": `${opacity}`,
    accentColor: "initial",
  };
  // useEffect(() => {
  //   const card = document.querySelector('.card');
  //   card.style.setProperty('--mouse-x', `${mouseCoords.x}px`);
  //   card.style.setProperty('--mouse-y', `${mouseCoords.y}px`);
  // }, [mouseCoords]);

  let pathname = usePathname() || "/";
  return (
    <div className="relative mt-2 flex w-full justify-end h-14 mb-10 overflow-hidden ">
      {isMounted ? (
        width! > 1200 && width != undefined ? (
          <animated.div
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            onMouseMove={HandleMouse}
            style={circleStyle}
            className={` ${style.card} relative m-2 flex h-auto w-[20%] rounded-md bg-background_dark p-2 transition-opacity duration-500 before:absolute before:left-0 before:top-0 before:h-full before:w-full  before:rounded-[inherit] before:bg-gradient-radial before:opacity-0 before:content-[""] before:hover:opacity-100 `}
          >
            <div
              style={circleStyle2}
              className={`${style.card_element} absolute right-[-2px] top-[-2px] z-[-1] m-[1px] h-[calc(100%+2px)] w-[calc(100%+2px)] rounded-[inherit] bg-slate-700`}
            ></div>
            <div className="mr-4 font-bold">Ron</div>
            <div className="relative flex w-full justify-end">
              <nav className="relative flex gap-4 ">
                {Object.entries(itens).map(([path, { name }]) => {
                  // const isActive = path === pathname;
                  return <Item key={path} href={path} name={name} />;
                })}
              </nav>
            </div>
          </animated.div>
        ) : (
          <MobileHeader />
        )
      ) : null}
    </div>
  );
}
