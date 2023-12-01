import { email } from "../assets/icons";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <section
        id="contact"
        className="self-stretch bg-midnightblue-200 flex flex-row items-start justify-start pt-[2.63rem] pl-[1.5rem] pb-[0.06rem] gap-[1.5rem] text-left text-[2rem] text-cornsilk-200 font-body-text"
      >
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[1.88rem]">
          <h1 className="m-0 relative text-inherit leading-[2.63rem] font-semibold font-inherit inline-block w-[39.13rem] md:w-auto   shrink-0">
            Contact
          </h1>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[18rem] mb-4 text-[1.06rem] text-cornsilk-400">
            <div className="self-stretch flex flex-col items-start justify-start gap-[2.63rem]">
              <p className="m-0 self-stretch relative leading-[1.69rem]">
                If you have a project you'd like to discuss or are interested in
                bringing my skills and experience onto your software engineering
                team, please don't hesitate to get in touch
              </p>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0.63rem]">
                <Image
                  src={email}
                  alt="arrow"
                  className="w-6 h-6 object-contain pr-3"
                />
                <p className="m-0 self-stretch relative items-center leading-[1.69rem]">
                  aspenndungu@gmail.com
                </p>
              </div>
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
  )
}

export default Footer