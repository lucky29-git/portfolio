import Navbar from "./navbar";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";


const word = [{
    text: `I'm Chandrashekhar Choudha 👋`
}]
export default function Introduction(){
    return (
        <div className="fixed top-0 w-full">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex justify-end">
                    <Navbar/>
                </div>
                <div className="px-12">
                    <div className="font-semibold text-3xl">
                        Hey! 
                    </div>
                    <div className="">
                        <TypewriterEffectSmooth words={word} />
                    </div>
                    <div className="mt-12 font-normal">
                        I'm a full-stack developer, and a final-year Computer Science Engineering undergraduate from UIT RGPV. 
                        I am very passionate about softwares, which drives my interest in solving real-world problems. I enjoy teaching tech concepts in an easy-to-understand way and am always eager to learn new technologies.
                        
                    </div>
                </div>
            </div>
        </div>
    )
}