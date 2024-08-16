import Image from "next/image";
import bg from "../../../../public/background/projects-scripted.jpeg"
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import { RenderModel } from "@/components/RenderModel";
import Scroll from "@/components/models/Scroll";



export default function Home() {
  return (
    <>
      <Image src={bg} alt="background image"  className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" />

    <ProjectList projects={projectsData} />

    <div className="flex items-center justify-center fixed top-20 -left-1 h-screen">
      <RenderModel>
        <Scroll />
      </RenderModel>
    </div>
    </>
  );
}
