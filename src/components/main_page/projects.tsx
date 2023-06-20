import Image from "next/image";
import Style from "./components.module.css";
const Data = [
  {
    title: "Vaulthief",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium justo non lacus elementum, eget imperdiet arcu facilisis. Quisque venenatis nec sapien finibus bibendum.",
    main_stack: "typescript",
  },
  {
    title: "Moth Kubit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium justo non lacus elementum, eget imperdiet arcu facilisis. Quisque venenatis nec sapien finibus bibendum.",
    main_stack: "typescript",
  },
  {
    title: "Vaulthief",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium justo non lacus elementum, eget imperdiet arcu facilisis. Quisque venenatis nec sapien finibus bibendum.",
    main_stack: "typescript",
  },
  {
    title: "Vaulthief",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium justo non lacus elementum, eget imperdiet arcu facilisis. Quisque venenatis nec sapien finibus bibendum.",
    main_stack: "typescript",
  },
  {
    title: "Vaulthief",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium justo non lacus elementum, eget imperdiet arcu facilisis. Quisque venenatis nec sapien finibus bibendum.",
    main_stack: "typescript",
  },
];

function Projects() {
  return (
    <>
      <div className=" relative flex w-full place-content-start p-2">
        <div className=" grid grid-cols-2  ">
          {Data.map((item, index) => {
            return (
              <div
                key={index}
                className="m-2 
                rounded-md bg-surface_dark_color p-2"
              >
                <div className="p-1 text-xs">{item.main_stack} </div>
                <div className="p-1 text-lg">{item.title}</div>
                <p className="p-1 text-sm text-[#999CA0]">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
