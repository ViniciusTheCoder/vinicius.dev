import ProjectContent from "@/components/project-content";
import type {Metadata} from "next";
import {getMetadata} from "@/lib/utils";
import Footer from "@/components/footer";

export const metadata: Metadata = getMetadata("home")

const Projects = () => {
    return (
        <ProjectContent/>
    )
}


export default Projects;