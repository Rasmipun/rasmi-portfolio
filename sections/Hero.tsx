
import Image from "next/image";
import AutoTypeTitle from "./../Components/ui/AutoTypeTitle";

const HeroSection = () => {
  return (
    <section
      className="
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        gap-8
        px-6
        py-20

        md:flex-row
        md:gap-10
        md:px-12
        md:py-20

        lg:gap-20
        lg:px-100
      "
    >
      {/* Image */}
      <div
        className="
          order-1
          flex
          w-full
          justify-center

          md:order-2
          md:w-1/2
          md:justify-end
          
        "
      >
        <Image
          src="/Image/rasmi.png"
          alt="Profile of Rasmi"
          width={300}
          height={300}
          className="
            h-auto
            w-48
            sm:w-56
            md:w-64
            lg:w-72
            bg-amber-200
          "
          priority
        />
      </div>

      {/* Content */}
      <div
        className="
          order-2
          flex
          w-full
          flex-col
          gap-2
          text-center
          text-xl
          text-white

          md:order-1
          md:w-1/2
          md:text-left
          md:text-2xl
        "
      >
        <h1 className="font-semibold">
          HY! Myself Rasmi Pun.
        </h1>

        <div>
          I am a <AutoTypeTitle />
        </div>
      </div>
    </section>
  );
};

export { HeroSection };

