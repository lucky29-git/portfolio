import { BotIcon } from "lucide-react";


export default function Education(){
    return( 
    <div className="flex flex-col py-8">
        <div className="flex justify-center">
            <button className=" hover:cursor-pointer inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Education
            </button>
        </div>
        <div className="pt-10 flex items-center gap-2">
            <div className="w-8 h-8 flex justify-center items-center rounded-full border-black border-2 dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 dark:border-transparent dark: transition-all duration-300">
                <BotIcon/>
            </div>
            <div className="font-semibold dark:text-white ">
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
            I am currently pursuing a Bachelor of Technology in Computer Science and Engineering at the University Institute of Technology. My studies focus on core areas such as software development, problem-solving, and foundational subjects like data structures and algorithms, operating systems, and computer networks. This program enhances both my theoretical understanding and practical skills.
        </div>

        <div className="pt-10 flex items-center gap-2">
            <div className="w-8 h-8 flex justify-center items-center rounded-full border-black border-2 dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 dark:border-transparent dark: transition-all duration-300">
                <BotIcon/>
            </div>
            <div className="font-semibold dark:text-white ">
                Higher secondary school @ 
            </div>
            <div className="font-bold text-lg dark:text-white">
                Mar Thoma Gram Jyoti School, Sihora 
            </div>   
        </div>
        <div className="pl-10 pt-1 text-sm dark:text-gray-400">
            2020
        </div>
        <div className="pl-10 pt-2 dark:text-gray-300 text-base/7 ">
            I secured 85.6% in my 12th standard under the CBSE board.
        </div>
    </div>
    )
}