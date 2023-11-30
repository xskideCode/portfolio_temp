import { useCallback } from "react";
import { skills, projects } from "../constants";
import { arrow } from "../assets/icons";
import Link from "next/link";
import Image from "next/image";

const PortfolioTemplate = () => {
  return (
    <div className="relative bg-midnightblue-300 w-full flex flex-col items-center justify-start">
      <header className="self-stretch bg-midnightblue-600 flex flex-row items-center justify-between py-[0.63rem] pr-[8.75rem] pl-[2.63rem] sm:pl-1 sm:gap-[1.8rem] sm:items-center ">
        <img
          className="relative w-[5.13rem] h-[3.06rem] object-cover sm:w-[3.5rem] sm:h-[2.5rem]"
          alt=""
          src="/slice-1-1@2x.png"
        />
        <nav className="m-0 flex flex-row items-start justify-start gap-[1.88rem] sm:gap-2 text-left text-[1.06rem] text-cornsilk-500 font-fredoka-one">
          <Link href="#about" className="[text-decoration:none] relative leading-[1.69rem] text-[inherit] flex items-center w-[3.25rem] shrink-0">
            About
          </Link>
          <Link href="#projects" className="[text-decoration:none] relative leading-[1.69rem] text-cornsilk-700 flex items-center w-[4.19rem] shrink-0">
            Projects
          </Link>
          <Link href="#contact" className="[text-decoration:none] relative leading-[1.69rem] text-cornsilk-100 flex items-center w-[4.13rem] shrink-0">
            Contact
          </Link>
        </nav>
      </header>
      <section className="self-stretch bg-midnightblue-100 overflow-hidden flex flex-row items-center justify-center py-[0.25rem] px-[0rem]">
        <img
          className="relative w-[79.88rem] h-[35.63rem] sm:w-[59.88rem] sm:h-[25.63rem] object-cover"
          alt=""
          src="/slice-2-1@2x.png"
        />
      </section>
      <section className="self-stretch bg-cornsilk-200 flex flex-row flex-wrap items-center justify-center py-[2.63rem] px-[1.5rem] text-left text-[1.25rem] text-black font-body-text sm:items-center sm:justify-center">
        <div className="w-[38.75rem] flex flex-row items-center justify-center gap-[3rem] min-w-[18rem] max-w-[38.75rem] sm:flex-col">
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.94rem] sm:flex-[unset] sm:self-stretch">
            <h2 className="m-0 self-stretch relative text-inherit leading-[1.88rem] font-semibold font-inherit">{`Hi I’m Leon `}</h2>
            <h1 className="m-0 self-stretch relative text-[2.25rem] font-semibold font-inherit">
              Software developer
            </h1>
            <p className="m-0 self-stretch relative text-[1.06rem] leading-[1.69rem]">
              A passionate software engineering student focused on crafting
              clean code to bring ideas to life.
            </p>
          </div>
          <Link href="#contact">
          <button className="cursor-pointer [border:none] py-[1.5rem] px-[4rem] bg-midnightblue-500 rounded-9xl w-[12.88rem] flex flex-row items-center justify-center box-border">
            <div className="flex-1 relative text-[1.25rem] leading-[1.88rem] font-fredoka-one text-white text-center">
              Contact
            </div>
          </button>
          </Link>
        </div>
      </section>
      <section id="about" className="self-stretch bg-deepskyblue-100 overflow-hidden flex flex-row items-center justify-center text-center text-[1.69rem] text-cornsilk-300 font-body-text my-1">
        <div className="flex-1 flex flex-row flex-wrap items-center justify-center gap-[1.5rem]">
          <img
            className="relative w-[11.94rem] h-[31.5rem] object-cover sm:hidden"
            alt=""
            src="/slice-3-1@2x.png"
          />
          <div className="flex-1 bg-midnightblue-400 flex flex-col items-center justify-center sm:mt-[1rem] md:mt-[3rem] py-[3rem] px-[2.63rem] box-border gap-[2.63rem] min-w-[18rem]">
            <img
              className="relative w-[7.96rem] h-[7.75rem]"
              alt=""
              src="/skills-card-icon2.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[2.63rem] font-semibold font-inherit inline-block h-[2.63rem] shrink-0">
                About
              </h1>
              <p className="m-0 self-stretch relative text-[1.06rem] leading-[1.69rem]">
                <span className="block">
                  As a full-stack developer, I bring intuitive problem-solving
                  skills and a passion for creating user-focused applications
                  from start to finish.
                </span>
                <span className="block">
                  Leveraging experience with JavaScript, Python, SQL, and modern
                  frameworks, I build responsive front-end experiences that
                  connect seamlessly to back-end systems.
                </span>
                <span className="block">
                  I enjoy tackling challenges that make a difference in peoples’
                  lives and have a creative desire to transform ideas into
                  functional tools that solve real problems.
                </span>
              </p>
            </div>
          </div>
          <img
            className="relative w-[11.88rem] h-[31.56rem] object-cover sm:hidden"
            alt=""
            src="/slice-3-1-1@2x.png"
          />
        </div>
      </section>
      <section className="self-stretch bg-deepskyblue-100 overflow-hidden flex flex-col items-center justify-start py-[2.63rem] px-[1.5rem] gap-[2.63rem] text-center text-[2rem] text-black font-fredoka-one mb-1">
        <h1 className="m-0 relative text-inherit leading-[2.63rem] font-normal font-inherit">
          My Skills
        </h1>
        <div className="shadow-[5px_5px_0px_0px_rgba(109,40,217)] bg-midnightblue-500 p-8 flex flex-wrap items-center justify-center box-border min-w-[18rem] ">
        <div className="mt-16 flex flex-wrap gap-12 ">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl btn-back-black" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Image
                  className={`w-1/2 h-1/2 object-contain`}
                  height={`1/2`}
                  width={`1/2`}
                  src={skill.imageUrl}
                  alt={skill.name}
                />
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
      <section id="projects" className="self-stretch bg-deepskyblue-200 flex flex-col items-center justify-start py-[2.63rem] px-[1.5rem] gap-[2.63rem] text-center text-[2.5rem] text-black font-fredoka-one">
        <h1 className="m-0 relative text-inherit leading-[2.63rem] font-light font-inherit">
          Projects
        </h1>
        <div className="flex flex-wrap m-20 sm:m-4 gap-16">
          {projects.map((project) => (
            <div className="lg:w-[400px] w-full" key={project.name}>
              <div className="block-container w-12 h-12 ml-4">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <Image
                    src={project.iconUrl}
                    alt="threads"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col items-center text-mid">
                <h4 className=" font-poppins text-xl font-medium  ">{project.name}</h4>
                  <Image
                    src={project.imageUrl}
                    alt="threads"
                    className="w-full h-1/2 sm:w-[18rem] object-contain"
                  />
                <p className="mt-5 text-slate-950">{project.description}</p>
                <div className="mt-1 flex items-center gap-2 font-poppins">
                  <Link href={project.link} className=" text-mid text-blue-600">
                    Live Link
                  </Link>
                  <Image
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="self-stretch bg-midnightblue-200 flex flex-row items-start justify-start pt-[2.63rem] pl-[1.5rem] pb-[0.06rem] gap-[1.5rem] text-left text-[2rem] text-cornsilk-200 font-body-text">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[1.88rem]">
          <h1 className="m-0 relative text-inherit leading-[2.63rem] font-semibold font-inherit inline-block w-[39.13rem] sm:w-auto   shrink-0">
            Contact
          </h1>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[18rem] mb-4 text-[1.06rem] text-cornsilk-400">
            <div className="self-stretch flex flex-col items-start justify-start gap-[2.63rem]">
              <p className="m-0 self-stretch relative leading-[1.69rem]">
                If you have a project you'd like to discuss or are interested in
                bringing my skills and experience onto your software engineering
                team, please don't hesitate to get in touch
              </p>
              <p className="m-0 self-stretch relative leading-[1.69rem]">
                aspenndungu@gmail.com
              </p>
            </div>
          </div>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[16.81rem] object-cover rounded-tl-3xl"
          alt=""
          src="/slice-4-11@2x.png"
        />
      </section>
    </div>
  );
};

export default PortfolioTemplate;
