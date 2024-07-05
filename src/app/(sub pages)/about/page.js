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
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className=" w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 -z-10">
        <RenderModel>
          <Hat />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[55%] sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold  text-5xl xs:text-7xl sm:text-8xl  lg:text-9xl text-accent mt-5">
            Welcome!
          </h1>
          <p className="font-light text-foreground text-lg">
            Step into my enchanted portfolio, where magic and creativity
            collide!
          </p>
        </div>
      </div>

      <ItemLayout>
        <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full bg-transparent">
          <div className="col-span-12 md:col-span-6 lg:col-span-5 flex items-center justify-center">
            <Image
              priority
              sizes="100vw"
              src={profile}
              alt="profile"
              className=" w-auto h-auto  max-w-100 max-h-150"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-7 flex flex-col justify-center px-0 md:px-6 lg:px-8 items-center">
            <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl text-accent mb-4 ">
              Sithumini Kaushalya
            </h1>
            <p
              className="font-light text-foreground text-xs lg:text-lg  -mb:1 lg:mb-8 items-center justify-center"
              loading
            >
              <span>Computer Engineer</span>
              <span>(UG)</span> | Full Stack Developer | Ui/UX Designer |
              Programmer | DevOps Enthusiast 
            </p>
          </div>
        </div>
      </ItemLayout>

      <AboutDetails />
    </>
  );
}
