const page = () => {
  return (
    <div className="relative bg-midnightblue-300 h-fit w-full flex flex-col items-center justify-start">
      <div class="flex min-h-[80vh] items-start justify-center px-40 md:px-10">
        <div class="grid grid-cols-12 ">
          <div class="col-span-12 lg:col-start-4 lg:col-span-6">
            <h5 class="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mb-1 font-bold !text-cornsilk-100">
              {" "}
              Hi! 👋 My name is Leon and I am a software engineer.?{" "}
            </h5>
            <div class="block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-cornsilk-700">
              {" "}
              I am a web developer with more than a year of experience in
              creating responsive web applications from scratch. I use the
              latest technologies and frameworks. I am also passionate about
              artificial intelligence and how it can transform businesses and
              people’s lives. I am always eager to learn new skills and explore
              new challenges in the field of AI.
            </div>
            <hr class="my-6 border-blue-cornsilk-50" />
            <h5 class="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-bold !text-cornsilk-200">
              {" "}
              EDUCATION{" "}
            </h5>
            <div class="block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-cornsilk-700">
              {" "}
              Bachelor of Science in Information Technology Jomo Kenyatta
              University of Agriculture and Technology Relevant coursework: Web
              Development, Database Systems, Software Engineering.
            </div>
            <hr class="my-6 border-blue-cornsilk-50" />
            <hr class="my-6 border-blue-cornsilk-50" />
            <h5 class="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-bold !text-cornsilk-200">
              {" "}
              TECHNICAL SKILLS{" "}
            </h5>
            <div class="block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-cornsilk-700">
              {" "}
              Programming Languages: JavaScript, Python, SQL Web Development:
              React, Node.js Tools and Frameworks: Git, MongoDB
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
