import { GearIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FloatingDock } from "../ui/floating-dock";
import { HouseIcon, MoonIcon, SquareChevronRightIcon } from "lucide-react"
const item = [
    {
        title: "Home",
        icon: <HouseIcon/>,
        href: "#home"
    },
    {
        title: "Projects",
        icon: <SquareChevronRightIcon/>,
        href: "#projects"
    },
    {
        title: "Skills",
        icon: <GearIcon/>,
        href: "#education"
    },
    {
        title: "LinkedIn",
        icon: <LinkedInLogoIcon/>,
        href: "https://www.linkedin.com/in/chandrashekhar-in/"
    },
    {
        title: "Github",
        icon: <GitHubLogoIcon/>,
        href: "https://github.com/lucky29-git"
    }
    // {
    //     title: "Toggle Mode",
    //     icon: <MoonIcon/>,
    //     href: "#github"
    // }
]

export default function Footer(){

    return <div className="fixed bottom-0 pb-4">
      <FloatingDock items={item} />
  </div>
}
