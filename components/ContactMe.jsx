import React from "react";
// Assuming you have the URLs for each link
const links = {
  facebook: "https://web.facebook.com/profile.php?id=100088511213408",
  LinkedIn: "https://www.linkedin.com/in/jeffrey-entekume-330644259/",
  twitter: "https://twitter.com/entekume_j",
  Github: "https://github.com/Tachy-22",
};

const ContactMe = () => {
  return (
    <section id="contact" className="  to-gray-900 bg-gradient-to-b from-black py-[2rem] px-4 flex justify-center items-center flex-col ">
      <h2 className="xl:text-2xl text-xl font-extrabold text-center flex flex-col gap-3 capitalise pb-4 monoton">
        <p className="">What's_Next ?</p>
      </h2>
      <h3 className="flex font-bold lg:text-3xl text-xl capitalize text-center">
        Available for select freelance opportunities
      </h3>
      <p className="lg:w-[25rem] lg:my-[2rem] my-2 text-center lg:text-lg text-base text-gray-500">
        {" "}
        Have an exciting project you need help with? Send me an email or contact
        me via instant message!
      </p>
      <div className=" lg:pb-8 pb-4 ">
        <a
          href={`mailto:entekumeJeffrey@gmail.com`}
          className="bg-blue-500 hover:bg-blue-700 hover:underline underline-offset-2 text-white font-bold py-2 px-4 rounded"
        >
          Contact Me
        </a>
      </div>
      <div className="flex gap-3">
        {Object.entries(links).map(([text, url]) => (
          <a
            aria-label={`Go to ${text}`}
            key={text}
            href={url}
            target="_blank" // Opens the link in a new tab/window
            rel="noopener noreferrer" // Recommended for security reasons
            className=" text-blue-500 hover:text-blue-700 lg:text-lg text-sm"
          >
            {text}
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactMe;
