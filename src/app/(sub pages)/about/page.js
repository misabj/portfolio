import Image from "next/image";
import bg from "../../../../public/background/projects-background.png"
import { RenderModel } from "@/components/RenderModel";
import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import Logo from "@/components/models/Logo";



export default function Home() {
  return (
    <>
      <Image src={bg} alt="background image"  className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" />


    <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">
      <RenderModel>
        <HatModel />
       
      </RenderModel>
    </div>

    <div className="relative w-full h-screen flex flex-col items-center justify-center py-10 mt-20">

      <RenderModel>
      <Logo />
      </RenderModel>
    
       
        {/* <h1 className="font-bold text-9xl text-accent">Scripted</h1> */}
        {/* <Image src={test} alt="logo image"  /> */}
       
    </div>
    {/* <div className="w-full h-screen flex flex-col justify-center "> */}
    {/* <p className="font-light text-lg text-accent">Meet the wizards behind this website</p>  */}
    {/* </div> */}

    <AboutDetails />
    </>
  );
}
