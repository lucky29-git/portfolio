import MyExample from "@/components/myComponents/example";
import MyNavbar from "@/components/myComponents/myNavbar";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto h-screen px-4 ">
        <div>
          <MyExample/>
        </div>
        <div className="flex justify-center">
          <MyNavbar/>
        </div>   
    </div>
  );
}
