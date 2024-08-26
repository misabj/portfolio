import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import { RenderModel } from "@/components/RenderModel";
import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import Logo from "@/components/models/Logo";

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <div className="w-full h-screen relative top-1/2 left-0">
        <RenderModel>
          <HatModel />
        </RenderModel>
          <div className="w-full  absolute top-1/3 h-screen -translate-y-1/4 flex flex-col justify-center ">
          <RenderModel>
            <Logo />
          </RenderModel>
          </div>
      </div>

      
      
        
      
      


       <div className="relative flex flex-col items-center text-center p-30"> 
      <AboutDetails />
       </div> 
    </>
  );
}
