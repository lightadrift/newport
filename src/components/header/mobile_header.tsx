import { useState } from "react";

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

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  let color = "#ffffff";
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="m-2 mr-4 rounded-full bg-surface_dark_color p-2 active:scale-90"
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
            fill="#ffffff"
          />
        </svg>
      </button>
      <dialog open={isOpen} className=" absolute -right-[50%] top-2 p-0 rounded-md ">
        <nav className=" flex p-2 gap-5 ">
          {Object.entries(itens).map(([path, { name }]) => {
            // const isActive = path === pathname;
            return <div key={path}>{name}</div>;
          })}
        </nav>
      </dialog>
    </>
  );
}

export default MobileHeader;
