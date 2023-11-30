import { useCallback } from "react";

const PortfolioTemplate = () => {
  const onButtonClick = useCallback(() => {
    window.open("https://www.animaapp.com");
  }, []);

  return (
    <div className="relative bg-midnightblue-300 w-full flex flex-col items-center justify-start">
      <header className="self-stretch bg-midnightblue-600 flex flex-row flex-wrap items-center justify-between py-[0.63rem] pr-[8.75rem] pl-[2.63rem] sm:flex-row sm:gap-[1.5rem] sm:items-start sm:justify-start">
        <img
          className="relative w-[5.13rem] h-[3.06rem] object-cover"
          alt=""
          src="/slice-1-1@2x.png"
        />
        <nav className="m-0 flex flex-row items-start justify-start gap-[1.88rem] text-left text-[1.06rem] text-cornsilk-500 font-fredoka-one">
          <a className="[text-decoration:none] relative leading-[1.69rem] text-[inherit] flex items-center w-[3.25rem] shrink-0">
            About
          </a>
          <div className="relative leading-[1.69rem] text-cornsilk-700 flex items-center w-[4.19rem] shrink-0">
            Projects
          </div>
          <div className="relative leading-[1.69rem] text-cornsilk-100 flex items-center w-[4.13rem] shrink-0">
            Contact
          </div>
        </nav>
      </header>
      <section className="self-stretch bg-midnightblue-100 overflow-hidden flex flex-row items-center justify-between py-[0.25rem] px-[0rem]">
        <img
          className="relative w-[79.88rem] h-[35.63rem] object-cover"
          alt=""
          src="/slice-2-1@2x.png"
        />
      </section>
      <section className="self-stretch bg-cornsilk-200 flex flex-row flex-wrap items-center justify-between py-[2.63rem] px-[1.5rem] text-left text-[1.25rem] text-black font-body-text sm:items-center sm:justify-center">
        <div className="w-[38.75rem] flex flex-row items-center justify-center gap-[3rem] min-w-[20rem] max-w-[38.75rem] sm:flex-col">
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
          <button
            className="cursor-pointer [border:none] py-[1.5rem] px-[4rem] bg-midnightblue-500 rounded-9xl w-[12.88rem] flex flex-row items-center justify-center box-border"
            onClick={onButtonClick}
          >
            <div className="flex-1 relative text-[1.25rem] leading-[1.88rem] font-fredoka-one text-white text-center">
              Contact
            </div>
          </button>
        </div>
      </section>
      <section className="self-stretch bg-steelblue overflow-hidden flex flex-row items-center justify-center text-center text-[1.69rem] text-cornsilk-300 font-body-text">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[1.5rem]">
          <img
            className="relative w-[11.94rem] h-[31.5rem] object-cover sm:hidden"
            alt=""
            src="/slice-3-1@2x.png"
          />
          <div className="flex-1 bg-midnightblue-400 flex flex-col items-center justify-center py-[3rem] px-[2.63rem] box-border gap-[2.63rem] min-w-[20rem]">
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
      <section className="self-stretch bg-deepskyblue-100 overflow-hidden flex flex-col items-start justify-start py-[2.63rem] px-[1.5rem] gap-[2.63rem] text-center text-[2rem] text-black font-body-text">
        <h1 className="m-0 relative text-inherit leading-[2.63rem] font-semibold font-inherit">
          My Skills
        </h1>
        <div className="self-stretch bg-cornsilk-600 h-[21.56rem] flex flex-row flex-wrap items-start justify-start py-[4rem] px-[2.63rem] box-border gap-[2.63rem] min-w-[20rem] text-left text-[1.69rem]">
          <img
            className="relative w-[4rem] h-[4rem] hidden"
            alt=""
            src="/skills-card-icon3.svg"
          />
          <div className="flex-1 hidden flex-col items-start justify-start gap-[0.75rem] min-w-[12.5rem]">
            <div className="self-stretch relative leading-[2.63rem] font-semibold">
              Title
            </div>
            <div className="self-stretch relative text-[1.06rem] leading-[1.69rem]">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch bg-deepskyblue-200 flex flex-col items-center justify-start py-[2.63rem] px-[1.5rem] gap-[2.63rem] text-center text-[2.5rem] text-floralwhite font-fredoka-one">
        <h1 className="m-0 relative text-inherit leading-[2.63rem] font-normal font-inherit">
          Projects
        </h1>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.5rem] text-left text-[1.25rem] text-black font-body-text">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] min-w-[20rem]">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[20.63rem] shrink-0 object-cover"
              alt=""
              src="/image1@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="self-stretch relative leading-[1.88rem] font-semibold">
                Project title
              </div>
              <div className="self-stretch relative text-[1.06rem] leading-[1.69rem]">
                UI, Art drection
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] min-w-[20rem]">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[20.63rem] shrink-0 object-cover"
              alt=""
              src="/image2@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="self-stretch relative leading-[1.88rem] font-semibold">
                Project title
              </div>
              <div className="self-stretch relative text-[1.06rem] leading-[1.69rem]">
                UI, Art drection
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] min-w-[20rem]">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[20.63rem] shrink-0 object-cover"
              alt=""
              src="/image3@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="self-stretch relative leading-[1.88rem] font-semibold">
                Project title
              </div>
              <div className="self-stretch relative text-[1.06rem] leading-[1.69rem]">
                UI, Art drection
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] min-w-[20rem]">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[20.63rem] shrink-0 object-cover"
              alt=""
              src="/image4@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="self-stretch relative leading-[1.88rem] font-semibold">
                Project title
              </div>
              <div className="self-stretch relative text-[1.06rem] leading-[1.69rem]">
                UI, Art drection
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] min-w-[20rem]">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[20.63rem] shrink-0 object-cover"
              alt=""
              src="/image5@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="self-stretch relative leading-[1.88rem] font-semibold">
                Project title
              </div>
              <div className="self-stretch relative text-[1.06rem] leading-[1.69rem]">
                UI, Art drection
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] min-w-[20rem]">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[20.63rem] shrink-0 object-cover"
              alt=""
              src="/image6@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="self-stretch relative leading-[1.88rem] font-semibold">
                Project title
              </div>
              <div className="self-stretch relative text-[1.06rem] leading-[1.69rem]">
                UI, Art drection
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch bg-midnightblue-200 flex flex-row items-start justify-start pt-[2.63rem] px-[1.5rem] pb-[0.06rem] gap-[1.5rem] text-left text-[2rem] text-cornsilk-200 font-body-text">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[8.88rem]">
          <h1 className="m-0 relative text-inherit leading-[2.63rem] font-semibold font-inherit inline-block w-[39.13rem] shrink-0">
            Contact
          </h1>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[20rem] text-[1.06rem] text-cornsilk-400">
            <div className="self-stretch flex flex-col items-start justify-start gap-[2.63rem]">
              <p className="m-0 self-stretch relative leading-[1.69rem]">
                This is a template Figma file, turned into code using Anima.
                Learn more at AnimaApp.com This is a template Figma file, turned
                into code using Anima. Learn more at AnimaApp.com
              </p>
              <p className="m-0 self-stretch relative leading-[1.69rem]">
                aspenndungu@gmail.com
              </p>
            </div>
          </div>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[16.81rem] object-cover"
          alt=""
          src="/slice-4-11@2x.png"
        />
      </section>
    </div>
  );
};

export default PortfolioTemplate;
