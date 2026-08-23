import Image from "next/image";
import AutoTypeTitle from "./../Components/ui/AutoTypeTitle";

const HeroSection = () => {
  return (
    <section className="md:min-h-163  sm:min-h-200 bg-amber-200">

      <div className="
        flex
        min-h-80
        items-center
        justify-center
        gap-8
        bg-green-400
      ">
        <div className="bg-pink-300">
          1
        </div>

        <div className="bg-pink-600">
          2
        </div>
      </div>

    </section>
  );
};

export { HeroSection };