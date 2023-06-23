import Image from "next/image";
import Style from "./components.module.css";
import Link from "next/link";

const Data = [
  {
    title: "Vaulthief",
    description: "Um site de noticias sobre o mundo dos games e geek",
    main_stack: "typescript",
    url: "/Vaulthief",
  },
  {
    title: "Moth Kubit",
    description: "Um site showcase para ",
    main_stack: "typescript",
    url: "/Moth-Kubit",
  },
  {
    title: "Bots",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium justo non lacus elementum, eget imperdiet arcu facilisis. Quisque venenatis nec sapien finibus bibendum.",
    main_stack: "typescript",
    url: "/Bots",
  },
  {
    title: "Interpretes Studies",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium justo non lacus elementum, eget imperdiet arcu facilisis. Quisque venenatis nec sapien finibus bibendum.",
    main_stack: ["java", "C", "GO"],
    url: "/Interprete",
  },
  {
    title: "Voxel Engine",
    description: "Um estudo sobre como uma engine para voxel funciona",
    main_stack: "C++",
    url: "/Voxel-Engine",
  },
  {
    title: "Mods",
    description:
      "Um pouco sobre o que eu faço nesse grande universo dos video games ",
    main_stack: "C++",
    url: "/Mods",
  },
];

function Projects() {
  return (
    <>
      <div className=" relative flex w-full place-content-start p-2 pl-8 pr-8">
        <div className=" grid grid-cols-2  ">
          {Data.map((item, index) => {
            return (
              <Link href={`/projects/${item.url}`} key={index}>
                <div
                  // key={index}
                  className=" relative m-2 
                rounded-md bg-surface_dark_color p-2 transition-all hover:cursor-pointer"
                >
                  {Array.isArray(item.main_stack) ? (
                    <div className="flex w-full">
                      {item.main_stack.map((i, index) => {
                        return (
                          <div className="p-1 text-xs" key={index}>
                            {i}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-1 text-xs">{item.main_stack} </div>
                  )}
                  <div className="p-1 text-lg">{item.title}</div>
                  <p className="p-1 text-sm text-[#999CA0]">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
