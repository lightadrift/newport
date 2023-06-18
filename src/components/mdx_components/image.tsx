"use client";
import Image from "next/image";

export default function ImageComponent({ src }: { src: string }) {
  return (
    <>
      <div
        style={{
          backfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
        }}
        className="relative mb-16 mt-16 aspect-[16/9] max-w-3xl rounded-md border border-slate-700 shadow-md"
      >
        <Image src={src} alt="test" fill className="rounded-md object-cover" />
      </div>
    </>
  );
}
