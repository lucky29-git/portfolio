import Navbar from "./navbar";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { div } from "framer-motion/client";
import { BotIcon } from "lucide-react";


const word = [{
    text: `I'm Chandrashekhar Choudha 👋`
}]
export default function Introduction(){
    return (
        <div className="flex flex-col min-h-screen w-full max-w-4xl">
            <div className="w-full">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex justify-end">
                        <Navbar/>
                    </div>     
                </div>
            </div>
            <div className="px-12 flex flex-1 justify-center pt-10">
                <div>
                    <div className="font-semibold text-3xl dark:text-gray-200">
                        Hey! 
                    </div>
                    <div className="">
                        <TypewriterEffectSmooth words={word} />
                    </div>
                    <div className="mt-7 font-normal dark:text-gray-300">
                        I'm a full-stack developer, and a final-year Computer Science Engineering undergraduate from UIT RGPV. 
                        I am very passionate about softwares, which drives my interest in solving real-world problems. I enjoy teaching tech concepts in an easy-to-understand way and am always eager to learn new technologies.
                    </div>
                    <div className="pt-12 font-semibold text-2xl dark:text-white">
                        Work Experience
                    </div>
                    
                    <div className="pt-4 flex items-center gap-2">
                        <div className="w-8 h-8 flex justify-center items-center rounded-full border-black border-2 dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 dark:border-transparent dark: transition-all duration-300">
                            <BotIcon/>
                        </div>
                        <div className="font-semibold dark:text-white">
                            SDE Intern @
                        </div>
                        <div className="font-bold text-lg dark:text-white">
                            Appointy
                        </div>

                    </div>
                    <div className="pl-10 pt-1 text-sm dark:text-gray-400">
                        May, 2024 - July 2024
                    </div>
                    <div className="pl-10 pt-2 dark:text-gray-300 text-base/7 ">
                        <li>Developed an AI model for text-to-speech conversion, including support for Indian languages.</li>
                        <li>Worked on backend services using Golang frameworks and libraries such as Gin, Fiber, and Native.</li>
                        <li>Created REST wrappers for gRPC, improving benchmarks for APIs by 10 times faster.</li>
                        <li>Learned and gained knowledge about core computer science fundamentals</li>
                    </div>
                </div>
            </div>
        </div>
    )
}