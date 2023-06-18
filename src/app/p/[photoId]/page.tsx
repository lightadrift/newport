"use client"
import Image from "next/image";
import { useState } from "react";
export default function Page({
  params,
}: {
  params: { photoId: string };
}) {
  const { photoId } = params;
  const [test, setTest] = useState(false)
  const a = { b: "unhe"}
  const s = structuredClone(a)
  
  return (
    <>
      <dialog open={test} className="p-1 relative">
        <Image src={`/${photoId}`} width={400} height={400} alt="aaa"/>
      </dialog>
      <div onClick={() => setTest(!test)}>aaaa</div>
    </>
  );
}
