import MyExample from "@/components/myComponents/example";
import HomeComponent from "@/components/myComponents/home";
import Projects from "@/components/myComponents/projects";
import ThemeToggle from "@/components/myComponents/theme";
import Footer from "@/components/myComponents/footer";
import Navbar from "@/components/myComponents/navbar";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 ">
        <div className="h-screen">
          <HomeComponent/>
        </div>
        <div>
          <Projects/>
        </div>
        <div className="flex justify-center">
          <Footer/>
        </div>   
    </div>
  );
}
