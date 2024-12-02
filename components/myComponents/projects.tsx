import { div } from "framer-motion/client";
import { TracingBeam } from "../ui/tracing-beam";
import ProjectCards from "./projectCards";


export default function Projects(){

    return <div className="flex flex-col">
        <div className="flex  justify-center">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                My Projects
            </button>
        </div>
        <div className="font-bold text-4xl text-center pt-4">
            Check out my latest work 
        </div>
        <div className="font-light text-xl text-gray-500 pt-4 px-4 text-center">
            I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
        </div>
        <TracingBeam>
            <ProjectCards/>
        </TracingBeam>
    </div>
}