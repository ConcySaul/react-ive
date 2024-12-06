import React, { useEffect, useState } from "react";

interface TypewritterEffectProps {
    words: String[];
}

const TypewritterEffect: React.FC<TypewritterEffectProps> = ({words}) => {
    const [word, setWord] = useState<string>("");
    const [wordIndex, setWordIndex] = useState<number>(0);
    const [letterIndex, setLetterIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
  
    useEffect(() => {
      const currentWord = words[wordIndex];
  
      const typewriter = setTimeout(() => {
        if (!isDeleting) {
          setWord(currentWord.slice(0, letterIndex + 1));
          setLetterIndex((prev) => prev + 1);
  
          if (letterIndex === currentWord.length - 1) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          setWord(currentWord.slice(0, letterIndex - 1));
          setLetterIndex((prev) => prev - 1);
  
          if (letterIndex === 1) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      }, isDeleting ? 50 : 150);
  
      return () => clearTimeout(typewriter); // Nettoyer le timeout
    }, [letterIndex, isDeleting, wordIndex, words]);

    return (
        <span className="text-[#f18ecd]">{word}</span>
    )
}

function AboutMe() {
    const words = ['forward-thinker', 'Innovative', 'Proficient', 'Problem-solving', 'Detail-oriented'];

    return(
        <section id="aboutMe" className="h-screen flex flex-col md:flex-row z-20">
            <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: 'url("public/img/me.jpg")' }}>
            </div>
            <div className="h-screen w-full bg-[#0a011e] flex flex-col justify-center p-8">
                <div id="about" className="text-[#f18ecd] text-4xl font-goldman">
                    ABOUT ME
                </div>
                <div className="flex justify-end text-[#580C45] font-orbitron text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                    <p>
                        I'm a <TypewritterEffect words={words}/> developer dedicated to <span className="text-[#f18ecd]">solving digital challenges</span> with cutting-edge web development and design.
                        With a passion for creating <span className="text-[#f18ecd]">future-proof solutions</span>,
                        i specialize in building <span className="text-[#f18ecd]">responsive</span>, <span className="text-[#f18ecd]">user-centric experiences</span> powered by React.
                        I transform <span className="text-[#f18ecd]">bold ideas</span> into <span className="text-[#f18ecd]">reality</span>, one line of code at a time.
                        Let's react, innovate, and elevate your digital presence!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;