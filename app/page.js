"use client";
import { useState, useEffect, useRef } from "react";
import useInfiniteScroll from "next/controls/useInfiniteScroll";

import Hero from "next/components/Hero";
import dynamic from "next/dynamic";
import Loading from "./Loading";


const sectionsToLoad = [
  { component: Hero, loaded: false },
  {
    component: dynamic(() => import("next/components/MyStack"), {
      loading: () => <Loading />,
    }),
    loaded: false,
  },
  {
    component: dynamic(() => import("next/components/MyProjects"), {
      loading: () => <Loading />,
    }),
    loaded: false,
  },
  {
    component: dynamic(() => import("next/components/MyExperience"), {
      loading: () => <Loading />,
    }),
    loaded: false,
  },
  {
    component: dynamic(() => import("next/components/ContactMe"), {
      loading: () => <Loading />,
    }),
    loaded: false,
  },
];

export default function Home() {
  const [visibleSections, setVisibleSections] = useState([]);
  const lastSectionRef = useRef(null);
  const numberOfSectionsInView = useInfiniteScroll(lastSectionRef);

  useEffect(() => {
    const loadSections = async () => {
      const sections = [...visibleSections]; // Clone the current state
      for (let i = sections.length; i < numberOfSectionsInView; i++) {
        if (!sectionsToLoad[i]?.loaded) {
          const Component = await sectionsToLoad[i].component;
          sectionsToLoad[i].loaded = true;
          sections.push(
            <div
              key={i}
              ref={i === numberOfSectionsInView - 1 ? lastSectionRef : null}
              style={{ opacity: 0, transition: "opacity 0.5s ease" }}
            >
              <Component />
            </div>
          );
        }
      }
      setVisibleSections(sections);
    };

    loadSections();
  }, [numberOfSectionsInView]);

  useEffect(() => {
    // Update opacity after components load
    const sectionNodes = lastSectionRef.current?.parentNode?.childNodes;
    if (sectionNodes) {
      sectionNodes.forEach((node, index) => {
        node.style.opacity = 1;
      });
    }
  }, [visibleSections]);

  return (
    <div className="flex w-full flex-col">
      {visibleSections.map((section, i) => section)}
    </div>
  );
}
