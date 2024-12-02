import MyExample from "@/components/myComponents/example";
import HomeComponent from "@/components/myComponents/home";
import Projects from "@/components/myComponents/projects";
import ThemeToggle from "@/components/myComponents/theme";
import Footer from "@/components/myComponents/footer";
import Navbar from "@/components/myComponents/navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Education from "@/components/myComponents/education";
import Skills from "@/components/myComponents/skills";
import Contact from "@/components/myComponents/contact";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4">
        <div className="h-screen" id="home">
          <HomeComponent/>
        </div>
        <div className="pt-10" id="projects">
          {/* <AuroraBackground showRadialGradient={true} > */}
            <Projects />
          {/* </AuroraBackground> */}
        </div>
        <div className="pt-10" id="education">
            <Education />
        </div>
        <div className="pt-10" id="skills">
            <Skills />
        </div>
        <div className="pt-10" id="skills">
            <Contact />
        </div>
        <div className="flex justify-center">
          <Footer/>
        </div>   
    </div>
  );
}