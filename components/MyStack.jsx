import Image from "next/image";
// ... import other logos similarly for each technology

// Import images for each technology

// ... import other logos similarly for each technology

const MyStack = () => {
  const stackItems = [
    {
      category: "Frontend Development",
      color: "pink",
      description:
        "Passionate about UI/UX. Over 1+ years of development experience in HTML, CSS, JS, React and NextJS frameworks",
      technologies: [
        {
          name: "HTML",
          description: "Markup language for web pages.",
          logo: "/assets/icons/html.svg",
        },
        {
          name: "CSS",
          description: "Styling language for web design.",
          logo: "/assets/icons/css.svg",
        },
        {
          name: "REACT JS",
          description: "Markup language for web pages.",
          logo: "/assets/icons/react.png",
        },
        {
          name: "NEXT.JS",
          description: "Styling language for web design.",
          logo: "/assets/icons/next-js.svg",
        },
      ],
    },
    {
      category: "Backend Development",
      color: "blue",
      description:
        "I have experience developing robust backend systems using  technologies such as Sanity.io and firebase that offers various backend services",
      technologies: [
        {
          name: "Firebase",
          description: "Platform offering various backend services.",
          logo: "/assets/icons/firebase.png",
        },
        {
          name: "Sanity",
          description: "Headless CMS for content management.",
          logo: "/assets/icons/sanity.svg",
        },
        // ... Add other backend technologies similarly
      ],
    },
    {
      category: "Database Management",
      color: "orange",
      description:
        "Proficient in handling data and managing databases for applications, using Mongoose ODM, Prisma ORM, and MongoDB",
      technologies: [
        {
          name: "Mongoose",
          description: "Object Data Modeling library for MongoDB and Node.js.",
          logo: "/assets/icons/mongoose.svg",
        },
        {
          name: "MongoDB",
          description:
            "NoSQL database for storing data in JSON-like documents.",
          logo: "/assets/icons/mongoDb.svg",
        },
        // ... Add other database technologies similarly
      ],
    },
  ];

  return (
    <div className=" flex flex-col w-full  py-8 bg-gradient-to-b from-black/5 to-black relative">
      <h1 className="text-3xl font-bold mb-8 text-center monoton">
        My_Tech_Stack
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%]  mx-auto z-10 md:gap-0 gap-3">
        {stackItems.map((stackItem, index) => (
          <div key={index} className="bg- border shadow-md  p-6 ">
            <h2 className="xl:text-2xl text-xl font-semibold mb-4 w-fit flex flex-col">
              {stackItem.category}
              <span
                style={{ backgroundColor: `${stackItem.color}` }}
                className="w-full h-2 mt-1 blur-sm -translate-y-2"
              ></span>
            </h2>
            <p className="mb-4">{stackItem.description}</p>
            <div className="grid xl:grid-cols-4 md:grid:cols-2 grid-cols-4 md:gap-2">
              {stackItem.technologies.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className=" p-1 rounded-md flex gap-1 items-center"
                >
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="min-w-12 w-12 max-h-12 h-12  bg-white p-1 rounded-full"
                    width={25}
                    height={25}
                  />
                  <div>
                    <h3 className="text-lg font-semibold  hidden">
                      {tech.name}
                    </h3>
                    {/* <p className="text-sm">{tech.description}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="hidden md:flex xl:hidden"></div>
      </div>
    </div>
  );
};

export default MyStack;
