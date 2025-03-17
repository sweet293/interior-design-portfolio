import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaBehance } from 'react-icons/fa'

const FooterLinks = [
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Projects",
        link: "/#projects",
    },
    {
        title: "Career",
        link: "/#career",
    },
];
const HelpLinks = [
    {
      title: "Customer Support",
      link: "/#support",
    },
    {
      title: "Delivery Details",
      link: "/#delivery-details",
    },
    {
      title: "Privacy Policy",
      link: "/#policy",
    },
  ];
  const ResourcesLinks = [
    {
      title: "Follow KAISER on Behance",
      link: "/#ebooks",
    },
    {
      title: "Follow KAISER on instagram",
      link: "/#blogs",
    },
    {
      title: "Subscribe KIDA",
      link: "https://www.youtube.com",
    },
  ];


const Footer = () => {
    return (
        <div className="bg-dark text-white">
          <section className="container py-10">
            <div className=" grid md:grid-cols-3 py-5">
              {/* company Details */}
              <div className=" py-8 px-4 ">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                  KAISER Interior Design Agency
                </h1>
                <p className="text-sm">
                We craft stunning interiors that blend style and functionality, bringing your vision to life with 
                creativity and precision. Transform your space with expert design solutions tailored just for you.{" "}
                </p>
                <br />
                {/* Social Handle */}
                <div className="flex items-center gap-4 mt-6">
                  <a href="#">
                    <FaInstagram className="text-2xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-2xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-2xl hover:text-primary duration-300" />
                  </a>
                </div>
              </div>
              {/* Links */}
              <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
                <div className="">
                  <div className="py-8 px-4 ">
                    <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                      Company
                    </h1>
                    <ul className={`flex flex-col gap-3`}>
                      {FooterLinks.map((link) => (
                        <li
                          key={link.title}
                          className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                        >
                          <span>{link.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="">
                  <div className="py-8 px-4 ">
                    <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                      Help
                    </h1>
                    <ul className="flex flex-col gap-3">
                      {HelpLinks.map((link) => (
                        <li
                          key={link.title}
                          className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                        >
                          <span>{link.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="">
                  <div className="py-8 px-4 ">
                    <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                      Resources
                    </h1>
                    <ul className="flex flex-col gap-3">
                      {ResourcesLinks.map((link) => (
                        <li
                          key={link.title}
                          className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                        >
                          <span>{link.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
};

export default Footer
