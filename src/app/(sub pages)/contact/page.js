import Image from "next/image";
import bg from "../../../../public/background/contact-background2.png";
import Form from "@/components/contact/Form";
import RenderModel from "@/components/RenderModel";
import { Ball } from "@/components/models/Ball";

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="z-[-50] fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <article className=" relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className=" text-accent font-semibold text-center text-4xl capitalize">
            Contact Me
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            <strong>Get in Touch</strong>
            <br />
            I'm excited to connect with you! Whether you have questions, feedback, or opportunities, feel free to reach out. I'll get back to you as soon as possible.
          </p>

        </div>
        <Form />

        <RenderModel className="flex left-1 -top-2 w-full h-20">
          <Ball />
        </RenderModel>
      </article>
    </>
  );
}
