"use client";
import { useCallback, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    name: "Project-1",
    category: "Web Applications",
    image: "project1.jpg",
    githubLink: "https://github.com/username/project1",
    liveSiteLink: "https://www.project1.com",
  },
  {
    name: "Project-2",
    category: "E-commerce",
    image: "project2.jpg",
    githubLink: "https://github.com/username/project2",
    liveSiteLink: "https://www.project2.com",
  },
  {
    name: "Project-3",
    category: "Landing Page",
    image: "project1.jpg",
    githubLink: "https://github.com/username/project1",
    liveSiteLink: "https://www.project1.com",
  },
  {
    name: "Project-4",
    category: "E-commerce",
    image: "project2.jpg",
    githubLink: "https://github.com/username/project2",
    liveSiteLink: "https://www.project2.com",
  },
  // Add more projects similarly
];

const MyProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Web Applications", "Landing Page", "E-commerce"]; // Your category array

  const [isMobileDropdown, setIsMobileDropdown] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  const toggleMobileDropdown = useCallback(() => {
    setIsMobileDropdown((prev) => !prev);
  }, []);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="bg-black h-full w-full flex flex-col justify-center items-center pt-[10rem] sm:pt-[18rem] lg:pt-[18rem] xl:pt-[20rem] py-[4rem] relative">
      <div className="w-full  flex justify-center items-center  absolute lg:-top-[5rem] -top-10  brightness-[30%]  bg- ">
        <Image
          src={`/assets/images/htmlMockup.webp`}
          alt={`htmlMockup`}
          className="lg:w-[60%] md:w-[40%] xl:w-[45%] h-full w-[90%] "
          width={400}
          height={150}
        />
      </div>{" "}
      <div className="flex lg:flex-row flex-col w-[95%] md:w-[w-90%] xl:w-[90%] xxl:w-[70%] justify-between ">
        <div className="  text-start xl:w-full  ">
          <h2 className="xl:text-7xl p-2 lg:text-5xl text-4xl font-extrabold text-start flex flex-col gap-3 uppercase monoton">
            <p className="">My</p>
            <p className="">Projects</p>
          </h2>
          <p className="xl:py-[3rem] py-[1rem] p-2 xl:w-[90%] tracking-wide space-mono font-light xl:text-2xl text-lg">
            Deployed scalable travel, event and telemedicine web and hybrid
            mobile apps using React SPA and PWA. Collaborated in 140+ projects
            with 50+ clients all around the world. I am also interested in data
            analytics and visualization
          </p>
        </div>
        <aside className=" w-full  lg:flex-row flex flex-col-reverse gap-4  justify-between items-end p-2 ">
          <div className="flex flex-col gap-4 space-mono text-xl  w-full ">
            <Image
              src={`/assets/images/arrow.png`}
              alt={`arrow`}
              className="w-full h-full  z-20 lg:block hidden "
              width={120}
              height={40}
            />
            <p className="">Browse through my repository</p>
            <button
              class="bg-purple-600 w-fit h-fit text-white border-2 border-purple-600 py-2 px-1 text-base xl:px-4 rounded-md shadow-md hover:bg-purple-700 hover:border-purple-700 focus:outline-none focus:border-purple-700 focus:ring focus:ring-purple-300"
              role="button"
              aria-label="View Repository"
            >
              View Repo
            </button>
          </div>
          <div className="flex h-full">
            {" "}
            <Image
              src={`/assets/images/repo.webp`}
              alt={`repo`}
              className="w-full h-fit    xl:hover:scale-[1.5]  lg:hover:scale-110 xl:hover:-translate-y-[6rem] xl:hover:-translate-x-[3.5rem] transition-all duration-1000  "
              width={1890}
              height={955}
            />
          </div>
        </aside>
      </div>
      <div className="w-[90%] md:w-[w-80%] xl:w-[90%] mx-auto py-8 text-base ">
        <div className="flex xl:justify-center items-center mb-4  gap-2">
          <p className="text-shadow-smooth  w-fit flex  ">Filter by</p>
          <div className={`flex gap-3 pl-3`}>
            {/* Button group for larger screens */}
            <div className={`hidden md:flex gap-4`}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className={`py-2 font-semibold text-shadow-smooth ${
                    selectedCategory === category
                      ? "text-[#F5BD02]"
                      : "text-gray-300"
                  }`}
                >
                  / {category}
                </button>
              ))}
            </div>

            {/* Dropdown for smaller screens */}
            <div className={`md:hidden relative w-full`}>
              <button
                onClick={toggleMobileDropdown}
                className={`py-1 font-semibold text-gray-300 border border-gray-800 rounded-md px-2 relative z-10`}
              >
                {selectedCategory ? (
                  selectedCategory
                ) : (
                  <p className="text-shadow-smooth  w-fit">Filter by</p>
                )}
              </button>
              {isMobileDropdown && (
                <div
                  className={`absolute w-[10rem] top-full left-0 right-0 bg-black/70 border border-gray-800 rounded-md z-20 mt-1`}
                >
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        handleCategorySelect(category);
                        toggleMobileDropdown();
                      }}
                      className={`block py-2 px-4 w-full text-left hover:bg-gray-100/20 `}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Add more category buttons similarly */}
        </div>

        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1  gap-4 mx-auto w-full ">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg- xxl:w-[30rem] xl:w-[25rem]  max-w-full  overflow-hidden  "
            >
              <div
                style={{ backgroundImage: "url(assets/images/bgImg.webp)" }}
                className="w-full xxl:h-[20rem]  h-[15rem] bg-cover hover:scale-105 transition-all duration-700 "
              ></div>
              <div className="p-4 gap-4 bg-gray-900/20 w-full flex flex-col ">
                <div className="flex justify-between items-center gap-4 ">
                  {" "}
                  <h3 className="xl:text-lg uppercase   font-semibold    ">
                    {project.name}
                  </h3>
                  <div className="w-full bg-yellow-400/40 h-[0.1rem]"></div>
                  <div className="flex">
                    <a
                      aria-label="Github link"
                      href={project.githubLink}
                      className="mr-2 text-gray-500 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="md:text-2xl" />
                    </a>
                    <a
                      aria-label="Live-site link"
                      href={project.liveSiteLink}
                      className="text-gray-500 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="md:text-xl" />
                    </a>
                  </div>
                </div>
                <div className=" overflow-hidden ">
                  <p className="text-sm md:text-base">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna."
                  </p>
                  <span className="text-[#F5BD02] w-full cursor-pointer hover:bg-gray-300/10 transition-all duration-500 rounded-md px-1 my-2">
                    -Learn more -
                  </span>
                </div>
                <p className="mb-2 text-gray-400 text-sm md:text-base">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
