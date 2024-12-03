import ButtonSkills from "./buttonSkills";


export default function Skills(){
    return <div className="flex flex-col py-8">
    <div className="flex justify-center">
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Skills
        </button>
    </div>
    <div className="flex gap-2 pt-8 justify-between">
        <ButtonSkills  title="React"/>
        <ButtonSkills  title="Next.js"/> 
        <ButtonSkills  title="Javascript"/> 
        <ButtonSkills  title="Typescript"/>
        <ButtonSkills  title="ExpressJs"/>
        <ButtonSkills  title="NodeJs"/>
        <ButtonSkills  title="PostgreSQL"/>
        <ButtonSkills  title="MongoDB"/>
    </div>
    <div className="flex gap-2 pt-4 justify-evenly">
        <ButtonSkills  title="Prisma"/>
        <ButtonSkills  title="Docker"/> 
        <ButtonSkills  title="Kubernetes"/> 
        <ButtonSkills  title="Github Actions"/>
        <ButtonSkills  title="TurboRepo"/>
        <ButtonSkills  title="NodeJs"/>
    </div>
    <div className="flex gap-2 pt-4 pb-8 justify-evenly">
        <ButtonSkills  title="Tailwind"/>
        <ButtonSkills  title="ShadCN"/> 
        <ButtonSkills  title="REST APis"/> 
        <ButtonSkills  title="Postman"/>
        <ButtonSkills  title="Vercel"/>
    </div>
    
</div>
}