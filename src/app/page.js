import Image from "next/image";
import bg from "../../public/background/about-scripted.jpg"
import { RenderModel } from "@/components/RenderModel";
import Logo from "@/components/models/Logo";
import { Navigation } from "@/components/navigation";
import Wizard from "@/components/models/Wizard";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background image" fill className="w-full h-full object-cover object-center opacity-25" />

    <div className="w-full h-screen">
      {/* navigation and 3D model*/}
      
      <Navigation />
      <RenderModel>
        <Wizard />
      </RenderModel>

    </div>

    </main>
  );
}
