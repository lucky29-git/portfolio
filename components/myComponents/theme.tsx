"use client"
import { div } from "framer-motion/client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import React from "react"


export default function ThemeToggle(){
    const [isDarkMode, setIsDarkMode] = useState(true)
    const root = document.documentElement;

    useEffect(() => {
        if(isDarkMode){
            root.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else{
            root.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [isDarkMode])

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return <div>
         <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent border border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
            >
            {isDarkMode ? <SunIcon/> : <MoonIcon/>}
        </button>
    </div>
}