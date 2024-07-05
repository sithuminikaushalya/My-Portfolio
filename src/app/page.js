import Image from "next/image";
import bg from "../../public/background/home-background2.png";
import RenderModel from "@/components/RenderModel";
//import Witch from "@/components/models/Wizard";
import Navigation from "@/components/navigation";
import dynamic from "next/dynamic";

const Witch = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className=" -z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Witch />
        </RenderModel>
      </div>
    </main>
  );
}
