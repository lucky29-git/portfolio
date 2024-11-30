import { div } from "framer-motion/client";
import { BackgroundLines } from "../ui/background-lines";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

export default function MyExample(){
    return <div>
        {/* <BackgroundLines children={ChildrenCompo()}/> */}
        {/* <BackgroundBeamsWithCollision children={ChildrenCompo()} /> */}
    </div>
}

function ChildrenCompo(){
    return <div className="text-center ">
        Hello world
    </div>
}