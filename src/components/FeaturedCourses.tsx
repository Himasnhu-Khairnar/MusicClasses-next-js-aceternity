"use client";
import CousreData from "../data/musical_course.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
interface Courses {
  id: number;
  title: string;
  description: string;
  price: number;
  isFeatured: boolean;
  slug: string;
  instructor: string;
}
export function FeaturedCourses() {
  const featurecourses = CousreData.courses.filter(
    (item: Courses) => item.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900 ">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-whitesm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featurecourses.map((item: Courses, index) => {
            return (
              <div className="flex justify-center" key={index}>
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{item.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{item.description}</p>
                                <Link href={`/courses/${item.slug}`}>
                                Learn More
                                </Link>
                            </div>
                </BackgroundGradient>{" "}
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center mt-20">
        <Link
          href={"/courses "}
          className="px-4 py-2 rounded border-neutral-600 text-neutral-800 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}
