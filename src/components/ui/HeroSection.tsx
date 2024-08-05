import Link from "next/link";
import { Spotlight } from "./Spotlight";
import { Button } from "../ui/moving-border";

export default function HeroSection() {
  return (
    <div className=" h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden m mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-2 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="relative p-4 z-10 w-full text-center mt-20">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b  from-neutral-50  to-neutral-400">
          Master the Art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you&apos;re a beginner or looking to refine
          your ckille. doin us to unlock vour true notential.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            {" "}
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
