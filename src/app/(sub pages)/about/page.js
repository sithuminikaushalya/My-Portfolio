import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
// import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
//import Hat from "@/components/models/Hat";
import profile from "../../../../public/background/proff.png";
import ItemLayout from "@/components/about/ItemLayout";
import dynamic from "next/dynamic";

const Hat = dynamic(() => import("@/components/models/Hat"), {
  ssr: false,
});
export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="fixed top-0 left-0 object-cover object-center w-full h-full opacity-50 -z-50"
      />

      <div className="absolute left-0 w-full -translate-y-1/2  h-3/5 xs:h-3/4 sm:h-screen top-1/2 -z-10">
        <RenderModel>
          <Hat />
        </RenderModel>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full h-screen">
        <div className="absolute flex flex-col items-center text-center top-[55%] sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="mt-5 text-5xl font-bold xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
            Welcome!
          </h1>
          <p className="text-lg font-light text-foreground">
            Welcome to my enchanted portfolio, where magic and creativity collide! Dive into a world of innovation and inspiration, and explore the unique projects that showcase my passion and skills.
          </p>

        </div>
      </div>

      <ItemLayout>
        <div className="grid w-full grid-cols-12 gap-4 bg-transparent xs:gap-6 md:gap-8">
          <div className="flex items-center justify-center col-span-12 md:col-span-6 lg:col-span-5">
            <Image
              priority
              sizes="100vw"
              src={profile}
              alt="profile"
              className="w-auto h-auto rounded-full max-w-100 max-h-80"
            />

          </div>
          <div className="flex flex-col items-center justify-center col-span-12 px-0 md:col-span-6 lg:col-span-7 md:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-8xl text-accent ">
              Sithumini Kaushalya
            </h1>
            <p
              className="items-center justify-center text-xs font-light text-foreground lg:text-lg -mb:1 lg:mb-8"
              loading
            >
              <span>Computer Engineer</span>
              <span>(UG)</span> | Full Stack Developer | UI/UX Designer |
              MERN Developer | Laravel Developer | DevOps Enthusiast
            </p>
          </div>
        </div>
      </ItemLayout>

      <AboutDetails />
    </>
  );
}
