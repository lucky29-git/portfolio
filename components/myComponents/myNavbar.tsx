import { GearIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FloatingDock } from "../ui/floating-dock";
import { HouseIcon, SquareChevronRightIcon } from "lucide-react"
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
        href: "#skills"
    },
    {
        title: "LinkedIn",
        icon: <LinkedInLogoIcon/>,
        href: "#linkedin"
    },
    {
        title: "Github",
        icon: <GitHubLogoIcon/>,
        href: "#github"
    }
]

export default function MyNavbar(){

    return <div className="fixed bottom-0 pb-4">
      <FloatingDock items={item} />
  </div>
}
