
import CardDemo from "../cards-demo-1"
import CardDemo3, { CardDescription, CardSkeletonContainer, CardTitle } from "../cards-demo-3"


export default function ProjectCards(){

    return <div>
            <div className="grid grid-cols-2 gap-8 pt-6">
                <CardDemo3 img_path="/images/payzap.png" title="PayZap" date="Nov 2024" website_path="/notDeployed" code_path="https://github.com/lucky29-git/PayZap"
                    description= "A quick and secure payment application designed to make your daily transactions effortless with key features like Digital Wallet, P2P Transfers (Send money to someone instantly), Transaction Management." /> 

                <CardDemo3 img_path="/images/vichar.png" title="Vichar" date="Aug 2024" website_path="https://vichar-vert.vercel.app/" code_path="https://github.com/lucky29-git/Vichar"
                    description= "Built a full-stack blogging platform with a responsive UI and secure backend for sharing ideas and managing content. Leveraged PostgreSQL with Prisma, Zod for input validation, and TypeScript for robust, type-safe development." />  
                 
                <CardDemo3 img_path="/images/exammate.png" title="ExamMate" date="Apr 2024" website_path="/notDeployed" code_path="https://github.com/lucky29-git/ExamMate"
                    description= "Developed an education platform using the MERN stack, providing instant access to PYQs, notes, and lecture materials. Designed a user-friendly interface and robust backend for seamless and efficient study resource retrieval." />  
               
                <CardDemo3 img_path="/images/todo.png" title="Todo" date="June 2024" website_path="https://todo-mern-0zzu.onrender.com/" code_path="https://github.com/lucky29-git/todo-mern"
                    description= "Built a full-stack Todo application using the MERN stack (MongoDB, ExpressJS, ReactJS, and Node.js), enabling users to perform complete CRUD operations efficiently" />  
                 
                <CardDemo3 img_path="/images/usability.png" title="UsabilityHub Clone" date="Dec 2023" website_path="/notDeployed" code_path="https://github.com/lucky29-git/Clone-UsabilityHub"
                    description= "Developed a responsive clone of the Usability Hub website using HTML and CSS, with JavaScript integration for toggle functionality through DOM manipulation." />  
                 
                <CardDemo3 img_path="/images/newz.png" title="Newz 24" date="March 2024" website_path="/notDeployed" code_path="https://github.com/lucky29-git/News-Website"
                    description= "Built a website that displays current news articles by fetching live data from the News API, providing users with quick and easy access to trending stories." />  
                 
               
        </div>
    </div>
}