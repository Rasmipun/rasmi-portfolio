
import Image from "next/image";
import AutoTypeTitle from "./../Components/ui/AutoTypeTitle";
import Navbar from "@/Components/ui/Navbar";

const HeroSection = () => {
  return (
   <div className=" min-h-screen bg-amber-200">
    {/* Navbar */}
    {/* <div className="z-50
        fixed bottom-0 left-0 right-0
        flex justify-center backdrop-blur-2xl
      bg-white/15 
        md:bottom-auto
        md:fixed "
        
        >
      <Navbar />
    </div> 

    {/* content section*/}
     <div
      className="
        flex flex-row
        items-center justify-center gap-8 
        bg-amber-800
        
      "
    >
      <div className="bg-pink-300">1</div>
     <div className="bg-pink-600">2</div>
    </div>

   </div>
  );
};

export { HeroSection };

