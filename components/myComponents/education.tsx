import { BotIcon } from "lucide-react";


export default function Education(){
    return( 
    <div className="flex flex-col pt-2">
        <div className="flex justify-center">
            <button className=" hover:cursor-pointer inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Education
            </button>
        </div>
        <div className="pt-10 flex items-center gap-2">
                        <div className="w-8 h-8 flex justify-center items-center rounded-full border-black border-2 dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 dark:border-transparent dark: transition-all duration-300">
                            <BotIcon/>
                        </div>
                        <div className="font-semibold dark:text-white">
                            B.Tech CSE @
                        </div>
                        <div className="font-bold text-lg dark:text-white">
                            University Insitute of Technology, RGPV
                        </div>

                    </div>
                    <div className="pl-10 pt-1 text-sm dark:text-gray-400">
                        Aug, 2021 - May 2025
                    </div>
                    <div className="pl-10 pt-2 dark:text-gray-300 text-base/7 ">
                        <li>Developed an AI model for text-to-speech conversion, including support for Indian languages.</li>
                        <li>Worked on backend services using Golang frameworks and libraries such as Gin, Fiber, and Native.</li>
                        <li>Created REST wrappers for gRPC, improving benchmarks for APIs by 10 times faster.</li>
                        <li>Learned and gained knowledge about core computer science fundamentals</li>
                    </div>
    </div>
    )
}