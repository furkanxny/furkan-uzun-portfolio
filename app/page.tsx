"use client";
import { Contact } from "@/componants/Contact";
import { Counter } from "@/componants/Project";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-400 min-h-screen">
      <div className="bg-gray-300 max-w-8xl w-full mx-auto h-auto px-4 sm:px-6 lg:px-8 space-y-72 pb-12">
        <section
          id="hero"
          className="flex flex-row justify-center h-156 items-center gap-86 pt-56 scroll-mt-24"
        >
          <div className="flex flex-col items-center justify-center gap-4 w-1/4">
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
          <div className="w-128 h-128 bg-gray-200 rounded-full overflow-hidden">
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
          <div className="bg-green-500 w-256 h-128">
            <Counter />
          </div>
        </section>
        <section id="carrers" className="bg-orange-500 w-full h-156 mt-96">
          Carrers
        </section>
        <Contact />
      </div>
    </main>
  );
}
