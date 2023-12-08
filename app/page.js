"use client";

import Hero from "next/components/Hero";
import dynamic from "next/dynamic";
import Loading from "./Loading";

const MyProjects = dynamic(() =>
  import("next/components/MyProjects", {
    loading: () => <Loading />,
  })
);
const MyStack = dynamic(() =>
  import("next/components/MyStack", {
    loading: () => <Loading />,
  })
);
const MyExperience = dynamic(() =>
  import("next/components/MyExperience", {
    loading: () => <Loading />,
  })
);
const ContactMe = dynamic(() =>
  import("next/components/ContactMe", {
    loading: () => <Loading />,
  })
);

const sections = [
  <Hero />,
  <MyStack />,
  <MyProjects />,
  <MyExperience />,
  <ContactMe />,
];



export default function Home() {
  return (
    <div className="flex w-full flex-col">
      {sections.map((section, i) => section)}
    </div>
  );
}
