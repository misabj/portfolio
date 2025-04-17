import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <article className="relative w-full flex flex-col items-center justify-center p-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Send a Message
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Got a thought to share or an idea brewing?
            <br /> Whether it’s a new adventure or just a friendly hello, feel
            free to reach out.
            <br /> I’m always open to meaningful conversations and exciting
            collaborations.
          </p>
        </div>

        <Form />
      </article>
    </>
  );
}
