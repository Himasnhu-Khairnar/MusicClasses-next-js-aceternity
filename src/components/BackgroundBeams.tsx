"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how can we assit in
          your musical journey
        </p>
        <input
          type="text"
          placeholder="Email"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 p-2 bg-neutral-950 placeholder:text-neutral-700"
        />
      <textarea placeholder="Your Message" className="p-2 border  w-full mt-4 h-[10rem] rounded-lg "></textarea>
        <button className="mt-4  p-2 w-[8rem] rounded-md bg-cyan-900">
          Submit
        </button>
      </div>

      <BackgroundBeams />
    </div>
  );
}
