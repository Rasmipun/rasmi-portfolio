import { motion } from "framer-motion"


//variants
const StairAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}


//calculate the reverse index fot staggered delay
const reverseIndex = (index) => {
    const totalStep = 6;
    return totalStep - index -1;
};

const Stairs = () => {
    return (
    <>
        {/* render 6 motion divs, each representing a step of the stairs. 
        Each div will have the same animation defined by the stairAnimation object
        The delay for each div is calculated sinamically based on it's reversed indec,
        creating a staggered effect with decreasing delay for each subseqent step.

         */ }

         {[...Array(6)].map((_, index) => {
            return (
                <motion.div key={index} variants={StairAnimation} initial="initial"
            animate="animate" exit="exit" transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reverseIndex(index) * 0.1,
            }}
                className="h-full w-full relative bg-red-300
"
            />
            )
         })}
    </>
    );
};

export default Stairs