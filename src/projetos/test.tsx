"use client"


import { useState } from "react";


export default function Test() {
  const [a, setA] = useState(0)
  return (
    <div onClick={() => setA(a + 1)}>
      {a}
    </div>
  );
}
