"use client"

export default function ButtonSocials({title, path}: {
    title: string,
    path: string
}){
    return  <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400" 
        onClick={() => {
            window.open(path)
        }}
    >
        {title}
    </button>
}