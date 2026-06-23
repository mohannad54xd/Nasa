import { motion } from "framer-motion";
import  { useState, useEffect } from "react";

const Hero = () => {
  const text = "Explore the Universe";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Adjust typing speed here

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <section className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="backdrop-blur-md bg-white/5 rounded-2xl p-12 transform hover:scale-105 transition-all duration-500 shadow-xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent flex items-center justify-center">
            {displayedText}
            <motion.span
              animate={{
                opacity: [1, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-1 h-12 bg-blue-400 ml-1"
            />
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Discover the wonders of stars, planets, and galaxies in an immersive journey through the cosmos.
          </p>
          
          <div className="space-x-4">
            <a 
              href="#explore" 
              className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors duration-300"
            >
              Start Journey
            </a>
            <a 
              href="#learn-more" 
              className="inline-block px-8 py-3 border border-blue-400 hover:border-blue-300 text-blue-400 hover:text-blue-300 rounded-full transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;