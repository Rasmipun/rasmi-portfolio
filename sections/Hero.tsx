import Image from "next/image";
import AutoTypeTitle from './../Components/ui/AutoTypeTitle';

const HeroSection = () => {
    return (

            <section className=" flex justify-between px-70 mt-30 h-100 gap-50 bg-amber-900 ">
               <div className=" bg-amber-300 w-full text-black text-2xl">
                   <h1 className="font-semibold">HY! Myself Rasmi pun.</h1>
                   I am a  <AutoTypeTitle />
               </div>
               
                <div className="w-full h-full bg-black">
                <Image
                    src="/Image/rasmi.png"
                    alt="Profile of rasmi"
                    width={300}
                    height={300}
                    className=""
                    loading="eager" //Load this image immediately instead of waiting.
                    />
                </div>

            </section>
    )
}

export {HeroSection};