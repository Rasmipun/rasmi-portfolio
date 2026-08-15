// "use client"
// import { useEffect, useState } from "react";

// const words = ["Frontend Debeloper", "React Developer", "Next.js Developer", "UI/UX Designer"]

// const AutoTypeTitle = () => {
//     const [wordIndex, setWordIndex] = useState(0); //this keeps track of which word we are currently typing.
//     const [text, setText] = useState(""); //it stores what is currently display on screen.
//     const [isDeleting, setIsDeleting] = useState(false); //this contain wheather the word typing or deleting / after one complete other word appears

//     useEffect (() =>  {
//         const currentword = words[wordIndex];

//         const speed = isDeleting ? 60 : 120;

//         const timer = setTimeout (() => {
//             if (!isDeleting) {
//                 setText(currentword.slice(0, text.length +1));

//                 if (text.length + 1 === currentword.length) {
//                     setTimeout(() => setIsDeleting(true), 1000);
//                 }
//                 else {
//                     setText(currentword.slice(0, text.length - 1));

//                     if (text.length === 0 ) {
//                         setIsDeleting(false);
//                         setWordIndex((prev) => (prev + 1) % words.length);
//                     }
//                 }
//             }
//         },speed);

//             return () => clearTimeout(timer);
//         }, [text, isDeleting, wordIndex]);
  


//             return (
//                 <span className="text-primary">
//                     {text}
//                     <span className="animate-pulse">|</span>
//                 </span>
//     );
// };

// export default AutoTypeTitle;

"use client"

import { TypeAnimation } from 'react-type-animation';



const AutoTypeTitle = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Frontend Developer',
        1000, // wait 1s before replacing " Frontend Developer" with "React Develope"
        '  React Developer',
        1000,
        '  Nextjs Developer',
        1000,
        '  UI/UX Designer ',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '30px', display: 'inline-block', fontFamily: "var(--font-geist-sans)", color: "pink"}}
      repeat={Infinity}
    />
  );
};

export default AutoTypeTitle;