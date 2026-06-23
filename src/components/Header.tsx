import { motion } from 'framer-motion';

const Header = () => {
  const title = "Solar Trek";
  
  return (
    <motion.header 
      className="relative z-10 backdrop-blur-xsm p-8 mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
        <div className="container mx-auto">
          <h1 className="text-6xl font-bold">
            {[...title].map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-110 transition-transform"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>
    </motion.header>
  )
}

export default Header