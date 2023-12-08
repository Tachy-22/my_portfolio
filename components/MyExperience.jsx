"use client";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const MyExperience = () => {
  return (
    <div className="bg-black flex flex-col gap-6 pb-[3rem] sm:px-6 px-2">
      {" "}
      <h2 className="xl:text-4xl text-3xl font-extrabold text-center flex flex-col gap-3 capitalise pb-[0.5rem] monoton">
        <p className="">Professional</p>
        <p className="">Experience</p>
      </h2>
      <Accordion />
    </div>
  );
};

export default MyExperience;

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

const workExperience = [
  {
    date: ["May 2023", "Nov 2023"],
    companyName: "Prodigal AI",
    descriptionOfWorkDone:
      "Managed frontend development and collaborated on various projects.",
    companyLogo: "/assets/images/prodigal_ai_logo.jpeg",
    position: "Frontend Developer intern",
    techStackUsed: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"],
    companySite: "http://prodigalai.com.au",
    location: "Sydney, AU",
    remote: true,
  },
  {
    date: ["Jun 2023", "Aug 2023"],
    companyName: "N3Clouds ",
    descriptionOfWorkDone:
      "Worked as an intern in the development of several custom components using typescript.",
    companyLogo: "/assets/images/N3clouds.jpeg",
    position: "Frontend Developer intern",
    techStackUsed: ["React", "Typescript", "HTML", "CSS"],
    companySite: "https://www.n3clouds.com/",
    location: "Kolkata, IN",
    remote: true,
  },
  {
    date: ["Jun 2023", "Aug 202"],
    companyName: "Headway Vision",
    descriptionOfWorkDone:
      "Managed frontend development and collaborated on two projects.",
    companyLogo: "/assets/images/Headway.jpeg",
    position: "Frontend Web Developer",
    techStackUsed: ["CSS", "HTML5", "Recat js", "Google sheets"],
    companySite: "https://www.Headwayvision.com",
    location: " Bellingham, Be",
    remote: true,
  },
];

const Accordion = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [itemHeights, setItemHeights] = useState({});
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      setItemHeights((prev) => ({
        ...prev,
        [index]: activeItem === index ? `${ref.scrollHeight}px` : "0px",
      }));
    });
  }, [activeItem]);

  const toggleItem = useCallback((index) => {
    setActiveItem((prev) => (prev === index ? null : index));
  }, []);

  const addItemRef = useCallback((ref) => {
    if (ref && !contentRefs.current.includes(ref)) {
      contentRefs.current.push(ref);
    }
  }, []);

  useEffect(() => {
    if (activeItem !== null) {
      const timeout = setTimeout(() => {
        const yOffset = 5120 + activeItem * 75;
        window.scrollTo({ top: yOffset, behavior: "smooth" });
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [activeItem]);

  return (
    <div className="max-w-full  flex flex-col lg:text-md text-sm  mx-auto">
      {workExperience.map((experience, index) => (
        <div key={index} className="b w-full   ">
          <div
            id="head"
            className={`" ${
              activeItem === index ? "bg-purple-700" : "bg-purple-900"
            } flex justify-between items-center rounded-lg py-3 cursor-pointer  lg:px-[2rem] px-3 w-full "`}
            onClick={() => toggleItem(index)}
          >
            <div className="flex items-center  gap-2">
              {" "}
              <h2 className="lg:text-lg font-semibold items-center">
                {experience.position}
              </h2>
              <p className="w-">@{experience.companyName}</p>
            </div>
            <div className="flex justify-end items-center gap-4  w- ">
              <p className=" md:flex hidden">{experience.date.join(" - ")}</p>

              <div className="bg-black/10 px-5 py-1 rounded-full">
                <svg
                  className={`w-6 h-6 transition-transform   transform ${
                    activeItem === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={activeItem === index ? "M20 12H4" : "M12 6v12m-6-6h12"}
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            ref={(ref) => addItemRef(ref)}
            style={{
              maxHeight: itemHeights[index],
              overflow: "hidden",
              transition: "max-height 0.5s ease",
            }}
            className=" bg-purple-500/25 my-3 rounded-lg lg:text-md text-sm"
            id="body"
          >
            <div className="lg:px-[2rem]   px-3 pb-3 lg:flex-row flex-col flex justify-between w-full  items-center ">
              <div className="w-full pt-4 lg:hidden flex">
                {" "}
                <Image
                  src={experience.companyLogo}
                  alt={experience.companyName}
                  className="w-12 h-12 object-contain   "
                  width={24}
                  height={24}
                />
              </div>
              <div key={index} className="my-4 cursor-pointer flex flex-col">
                <div className="md:flex-row flex flex-col gap-3 py-1 space-mono font-thin ">
                  <p className=" flex items-center gap-2">
                    <IoLocationSharp className="text-lg text-purple-500" />(
                    {experience.remote ? "Remote" : "On Site"})
                    {experience.location}
                  </p>
                  <a
                    href={experience.companySite}
                    className="  hover:underline underline-offset-2 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="text- text-purple-500" />

                    {experience.companySite}
                  </a>
                </div>
                <p className="mt-2 w-[80%]">
                  {experience.descriptionOfWorkDone}
                </p>
                <div className="mt-2">
                  <ul className="list-disc list-inside flex lg:gap-4 gap-2">
                    {experience.techStackUsed.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <Image
                src={experience.companyLogo}
                alt={experience.companyName}
                className="w-12 h-12 object-contain mr-4 lg:flex hidden "
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
