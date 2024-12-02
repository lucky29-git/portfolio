import ButtonSocials from "./buttonSocials";


export default function Contact(){
    return <div className="flex flex-col pb-24">
    <div className="flex justify-center">
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Contact
        </button>
    </div>
    <div className="font-bold text-4xl text-center pt-4">
            Get in Touch
    </div>
    <div className="font-light text-xl text-gray-500 pt-4 px-4 text-center">
        Want to chat? Let's connect 😉
    </div>
    <div className="font-light text-xl text-gray-500 pt-4 px-4 text-center">
        Shoot me a DM, and I’ll hit you back as soon as I can!
    </div>
    <div className="flex justify-center gap-6 pt-12">
        
        <ButtonSocials title="LinkedIn" path="https://www.linkedin.com/in/chandrashekhar-in/" />
        <ButtonSocials title="Github" path="https://github.com/lucky29-git" />
        <ButtonSocials title="Mail" path="mailto:chandrashekharchoudha@gmail.com?subject=Hey Chandrashekhar&body=Hi there!" />
    </div>
    
    
</div>
}