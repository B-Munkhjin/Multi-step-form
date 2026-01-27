"use client";

import { useState } from "react";
import { First } from "./components/First";
import { Second } from "./components/Second";
import { Third } from "./components/Third";

export default function Home() {
  return (
    <div className="m-auto relative top-45.5 w-120 h-full rounded-lg p-8 bg-white gap-7">
      <div className="flex flex-col h-32.25 gap-2 justify-start">
        <img src="/pinecone.png" className="w-15 h-15" />
        <h1 className="font-semibold text-6.5 text-[#202124] text-shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          Join Us! 😎
        </h1>
        <p className="text-lg text-[#8E8E8E] ">
          Please provide all current information accurately.
        </p>
      </div>
      <div className="flex flex-col">
        <div className="relative top-7">
          {/* <First /> */}
          {/* <Second /> */}
          <Third />
        </div>
      </div>
    </div>
  );
}
