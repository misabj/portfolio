import Image from "next/image";
import bg from "../../public/background/home-background.png";
import { RenderModel } from "@/components/RenderModel";
import { Navigation } from "@/components/navigation";
import Wizard from "@/components/models/Wizard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background image"
        fill
        className="w-full h-full object-cover object-center opacity-25"
      />

      <div className="w-full h-screen">
        {/* navigation and 3D model*/}

        <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 bg-opacity-15">
          <RenderModel>
            <Wizard />
          </RenderModel>
        </div>
      </div>
      <Navigation />
    </main>
  );
}
