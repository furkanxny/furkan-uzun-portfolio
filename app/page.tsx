"use client";
import { Contact } from "@/componants/Contact";
import { Counter } from "@/componants/Project";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-400 min-h-screen">
      <div className="bg-gray-300 max-w-8xl w-full mx-auto h-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-72 pb-12">
        <section
          id="hero"
          className="flex flex-col-reverse lg:flex-row justify-center min-h-[70vh] items-center gap-12 lg:gap-24 pt-56 scroll-mt-24"
        >
          <div className="flex flex-col items-center justify-center gap-4 w-full lg:w-1/2">
            <h3 className="text-lg text-gray-600">
              Software Engineer | Full Stack Developer
            </h3>
            <h1 className="text-4xl font-bold">Hi there, I'm Furkan Uzun</h1>
            <p className="text-lg text-gray-600">
              I’m a software engineer who loves the process of building things
              from scratch. I spend my time working across the full stack,
              solving tricky problems and trying to make apps that actually feel
              good to use.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Download CV
            </button>
          </div>
          <div className="w-48 h-48 lg:w-96 lg:h-128 rounded-full overflow-hidden">
            <Image
              src="/furkan-uzn.jpeg"
              alt="Furkan Uzun"
              width={600}
              height={600}
              className="rounded-full"
            />
          </div>
        </section>
        <section
          id="projects"
          className="flex flex-col items-center justify-center gap-4 scroll-mt-32"
        >
          <h1 className="text-4xl font-bold">Projects</h1>
          <div className="bg-green-500 w-full max-w-4xl h-128">
            <Counter />
          </div>
        </section>
        <section
          id="carrers"
          className=" w-full h-156 flex flex-col lg:flex-row items-center justify-center mt-24 lg:mt-96 "
        >
          <div className="flex flex-col items-start justify-start gap-4 w-1/2 pl-24">
            <h2 className="text-gray-600 text-xl font-bold">
              Turkish Airlines Cargo | Software Engineer Intern (May 2024 -
              January 2025)
            </h2>
            <p className="text-lg text-gray-600">
              • Engineered and deployed an on-premises Large Language Model
              (LLM) on a server.
            </p>
            <p className="text-lg text-gray-600">
              • Developed an automated cargo screening and handling system,
              alongside an automated quote pricing mechanism based on
              destination.
            </p>
            <p className="text-lg text-gray-600">
              • Developed algorithms for optimizing cargo space utilization and
              scheduling.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 w-1/2">
            <Image
              src="/internship-on-site.png"
              alt="Turkish Airlines Cargo"
              width={1000}
              height={1000}
              className="rounded-full w-128"
            />
          </div>
        </section>
        <Contact />
      </div>
    </main>
  );
}
