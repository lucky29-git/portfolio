import { div } from "framer-motion/client";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import Introduction from "./introduction";
import { AuroraBackground } from "../ui/aurora-background";


export default function HomeComponent(){
    return <div className="h-screen">
       
            <BackgroundBeamsWithCollision children={<Introduction/>} />
    </div>
}