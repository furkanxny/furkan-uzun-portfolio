"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Counter = () => {
  const [selected, setSelected] = useState(0);

  const project = [
    {
      name: "Astral Divina",
      image: "/astraldivina.png",
      github: "https://github.com/furkanxny/Astral-Divina",
      description: [
        "Built a full-stack astrology platform featuring tarot readings, horoscopes, and AI-powered dream analysis.",
        "Engineered automated scrapers with cron jobs to provide daily, weekly, and monthly horoscope updates.",
        "Integrated Gemini API to generate personalized AI interpretations for dreams and tarot readings.",
      ],
      link: "https://astraldivina.com",
      tech: [
        "Java",
        "Spring Boot",
        "ReactJS",
        "PostgreSQL",
        "Docker",
        "S3 bucket",
        "EC2",
        "nginx",
      ],
    },
    {
      name: "Vital Vues",
      image: "/vital-vues.png",
      github: "https://github.com/LukeStrazz/VitalVues",
      description: [
        "Worked on a comprehensive health and wellness platform built with C# and ASP.NET Core as a senior capstone project.",
        "Engineered a health journaling module that generates dynamic PDF reports, synthesizing user data such as blood work, workout history, and personal goals.",
        "Developed a weekly workout planner and goal-tracking system to help users manage their fitness routines and health milestones.",
      ],
      tech: ["C#", "ASP.NET Core", "MySQL", "Bootstrap", "JavaScript"],
    },
  ];

  const next = () => {
    if (selected < project.length - 1) {
      setSelected(selected + 1);
    } else {
      setSelected(0);
    }
  };

  return (
    <div className="w-full h-full">
      <Image
        src={project[selected].image}
        alt="Furkan Uzun"
        className="w-full h-full object-cover"
        width={1280}
        height={720}
      />
      <div className="flex flex-row items-center justify-between mt-2">
        <div className="flex flex-row gap-2">
          {project[selected].link ? (
            <Link href={project[selected].link} target="_blank">
              <p className="text-2xl font-bold text-gray-600 bg-gray-200 px-4 py-2 rounded-md w-fit">
                {project[selected].name}
              </p>
            </Link>
          ) : (
            <p className="text-2xl font-bold text-gray-600 bg-gray-200 px-4 py-2 rounded-md w-fit">
              {project[selected].name}
            </p>
          )}
          <Link target="_blank" href={project[selected].github}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="Github"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <button
          onClick={next}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>
      <div className="flex flex-row gap-2 mt-4 mb-4 flex-wrap">
        {project[selected].tech.map((tech, index) => (
          <p
            key={index}
            className="text-gray-600 bg-gray-200 px-4 py-2 rounded-md"
          >
            {tech}
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        {project[selected].description.map((desc, index) => (
          <div key={index}>
            <p className="text-gray-600"> • {desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
