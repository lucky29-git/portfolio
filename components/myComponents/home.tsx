import { div } from "framer-motion/client";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import Introduction from "./introduction";


export default function HomeComponent(){
    return <div className="h-screen">
        <BackgroundBeamsWithCollision children={<Introduction/>} />
    </div>
}