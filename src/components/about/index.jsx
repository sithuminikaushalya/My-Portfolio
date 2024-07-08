import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            "custom-bg col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            About Me
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            <div>
              <ul >
                <li>🌱 Works in Web Application Development (MERN) and AI including Machine Learning, DevOps.</li>
                <li>🎓 Currently pursuing BSc (Hons) degree in Computer Engineering.</li>
                <li>🏫 Studies at the Faculty of Engineering, University of Ruhuna, Galle, Sri Lanka.</li>
                <li>🎯 Learning Cloud Computing, Web Hosting and DevOps </li>
                <li>📚 Previously studied at Vijayaba National School, Hambantota, Sri Lanka.</li>
                <li>🏡 Lives in Deraniyagala,Kegalle Sri Lanka.</li>
                <li>🔍 Interest to take new challenges and share knowledge with others</li>
              </ul>
            </div></p>

        </ItemLayout>

        <ItemLayout
          className={" custom-bg col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+ <sub className="font-semibold text-base">Individual & Group Projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"custom-bg col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base">Volenteering Events</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"custom-bg col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={'https://github-readme-stats.vercel.app/api/top-langs??username=sithuminikaushalya&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false'}
            alt="sithumini"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"custom-bg col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api?username=sithuminikaushalya&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="sithumini"
            loading="lazy"
          />
        </ItemLayout>


        <ItemLayout className={"custom-bg col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=c,cpp,cs,js,py,java,html,css,bootstrap,react,nodejs,express,flask,androidstudio,flutter,firebase,figma,kotlin,mongodb,mysql,anaconda,aws,github,git,pytorch,sklearn,tailwind,tensorflow,vscode`}
            alt="sithumini"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"custom-bg col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`http://github-readme-streak-stats.herokuapp.com?user=sithuminikaushalya&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="sithumini"
            loading="lazy"
          />
        </ItemLayout>

        {/* <ItemLayout className={"custom-bg col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/sithuminikaushalya/Plant-Disease-Detecting-Project"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`https://github-readme-stats.vercel.app/api/pin/?username=sithuminikaushalya&repo=Plant-Disease-Detecting-Project&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="sithumini"
              loading="lazy"
            />
          </Link>
        </ItemLayout> */}
      </div>
    </section>
  );
};

export default AboutDetails;
