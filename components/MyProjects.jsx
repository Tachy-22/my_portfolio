"use client";
import { useCallback, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    name: "Hexashop",
    category: "E-commerce",
    image: "/assets/images/Hexashop.webp",
    githubLink: "https://github.com/Tachy-22/Hexashop",
    liveSiteLink: "https://hexashop-nine.vercel.app/",
    description:
      "A simple e-commerce application, where users can login, browse through items, add them to a cart and check out their goods.",
  },
  {
    name: "Vibeverse",
    category: "Web Application",
    image: "/assets/images/vibeverse.webp",
    githubLink: "https://github.com/Tachy-22/vibeverse",
    liveSiteLink: "https://vibeverse-eosin.vercel.app/",
    description:
      "An easy to use chat and messaging application, with login features, chat rooms and private chats.",
  },
  {
    name: "Chat_GPT_CLONE",
    category: "Web Application",
    image: "/assets/images/chatgpt.webp",
    githubLink: "https://github.com/Tachy-22/ChatGpt_Clone",
    liveSiteLink: "https://chat-gpt-clone-tachy-22.vercel.app/",
    description:
      "A clone application of OpenAI's GPT-3 language model built using Node.js, Express, and ReactJS.",
  },
  {
    name: "Countries_API",
    category: "Web Application",
    image: "/assets/images/countries.webp",
    githubLink: "https://github.com/Tachy-22/react-cuntries-api",
    liveSiteLink: "https://react-cuntries-api.vercel.app/",
    description:
      "A simple web appliction that users can use to search for countries and get basic intormation on them.",
  },
  {
    name: "Buildz",
    category: "Landing Page",
    image: "/assets/images/Buildz.webp",
    githubLink: "https://github.com/Tachy-22/Bulidz_landingpage",
    liveSiteLink: "https://bulidz-landingpage.vercel.app/",
    description:
      "Buildz is a base for future bussiness project which includes all aspects and makes a forcast about your project's payback.",
  },
  {
    name: "The_Dictionary",
    category: "Web Application",
    image: "/assets/images/dictionary.webp",
    githubLink: "https://github.com/Tachy-22/_Dictionary_app",
    liveSiteLink: "https://dictionary-app-tachy-22.vercel.app/",
    description: "A simple dictionary web appliction.",
  },
  {
    name: "Manage",
    category: "Landing Page",
    image: "/assets/images/manage.webp",
    githubLink: "https://github.com/Tachy-22/quiz_grad_app",
    liveSiteLink:
      "https://639a08fc9e0b6c2c77a82c8b--calm-monstera-2b3097.netlify.app/",
    description:
      "A web app that users can use to have fun as well as learn cool facts during the processs.",
  },
  {
    name: "QuizGrad",
    category: "Web application",
    image: "/assets/images/QuizGrad.webp",
    githubLink: "https://github.com/Tachy-22/quiz_grad_app",
    liveSiteLink: "https://bulidz-landingpage.vercel.app/",
    description:
      "A web app that users can use to have fun as well as learn cool facts during the processs.",
  },
  {
    name: "Crowdfund",
    category: "Landing Page",
    image: "/assets/images/crowdfund.webp",
    githubLink: "https://github.com/Tachy-22/Crowd_funding",
    liveSiteLink: "https://tachy-22.github.io/Crowd_funding/",
    description: "A crowdfunding landing page.",
  },

  // Add more projects similarly
];

const MyProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Web Application", "Landing Page", "E-commerce"]; // Your category array

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
    <section
      id="my-projects"
      className="bg-black h-full w-full flex flex-col justify-center items-center pt-[10rem]  sm:pt-[13rem] md:pt-[10rem] lg:pt-[18rem] xl:pt-[20rem] py-[4rem] relative"
    >
      <div className="w-full  flex justify-center items-center  absolute lg:-top-[5rem] md:-top-[0rem] -top-10  brightness-[30%]  bg- ">
        <Image
          src={`/assets/images/htmlMockup.webp`}
          alt={`htmlMockup`}
          className="lg:w-[70%] sm:w-[80%] md:w-[50%] xl:w-[50%] h-full w-[90%] z-0"
          width={400}
          height={150}
        />
      </div>{" "}
      <div className="flex lg:flex-row flex-col w-[90%] z-10 lg:gap-[2rem]  md:w-[w-90%] xl:w-[90%] xxl:w-[70%] justify-between ">
        <div className="  text-start w-full lg:w-[45%]  flex flex-col justify-end  ">
          <h2 className="xl:text-7xl p-2 lg:text-5xl text-4xl font-extrabold text-start flex flex-col gap-3 uppercase monoton">
            <p className="">My</p>
            <p className="">Projects</p>
          </h2>
          <p className="xl:py-[3rem] py-[1rem] p-2  h-fit  tracking-wide space-mono font-light xl:text-2xl text-lg">
            Deployed scalable e-commerce, social media web apps and static sites
            using React and Next Js. Collaborated in a number of projects
            including, a web3 application and a security company website. I am
            also interested in data analytics and visualization as well as
            Machine Learning and AI technologies.
          </p>
        </div>
        <aside className=" lg:w-[55%] xl:w-[60%]   flex flex-col-reverse gap-4  justify-between  p-2 ">
          <div className="flex flex-col gap-4 space-mono text-xl  w-fit ">
            <Image
              src={`/assets/images/arrow.webp`}
              alt={`arrow`}
              className="w-[10rem] h-full  z-20 lg:block hidden "
              width={150}
              height={40}
            />
            <p className="">Browse through my repository</p>
            <button
              class="bg-purple-600 w-fit h-fit text-white border-2 border-purple-600 py-2 px-1 text-base xl:px-4 rounded-md shadow-md hover:bg-purple-700 hover:border-purple-700 focus:outline-none focus:border-purple-700 focus:ring focus:ring-purple-300"
              role="button"
              aria-label="View Repository"
            >
              <a
                href="https://github.com/Tachy-22"
                target="_blank"
                className=""
              >
                {" "}
                View Repo
              </a>
            </button>
          </div>
          <div className="flex h-full w-full  ">
            {" "}
            <a href="https://github.com/Tachy-22" target="_blank" className="">
              {" "}
              <Image
                src={`/assets/images/repo.webp`}
                alt={`repo`}
                className="w-full h-fit  lg:translate-y-[5rem]   xl:hover:-translate-x-[3.5rem] transition-all duration-1000  "
                width={1890}
                height={955}
              />
            </a>
          </div>
        </aside>
      </div>
      <div className="sm:w-[90%] w-[80%] md:w-[w-80%] xl:w-[70%] mx-auto py-8 text-base ">
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
                  className={`absolute w-[10rem] top-full left-0 right-0 bg-black/90 border border-gray-800 rounded-md z-20 mt-1`}
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

        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-cols-1  gap-4 mx-auto w-full ">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-  xl:w-[20rem]  max-w-full   overflow-hidden flex flex-col h-[25rem] "
            >
              <Image
                src={project.image}
                className="w-full  bg-center  h-[18rem] bg-cover hover:scale-105 transition-all duration-700 "
                width={1920}
                height={997}
              />
              <div className="p-4 gap-4 bg-gray-900/20 w-full h-full flex-grow flex flex-col ">
                <div className="flex justify-evenly items-center gap-4 ">
                  {" "}
                  <h3 className="xl:text-lg uppercase   font-semibold w-fit flex">
                    <p className="w-full flex"> {project.name}</p>
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
                  <p className="text-sm md:text-base"> {project.description}</p>
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
