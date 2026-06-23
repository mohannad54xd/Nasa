import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Background from './Background';
import Stars from './Stars';
import Navbar from './Navbar';

const games = [
  {
    title: "Space Quiz Challenge",
    path: "/games/space-quiz-challenge",
    description: "Test your knowledge of space and astronomy",
    gradient: "from-blue-400 to-purple-500",
    icon: "🚀"
  },
  {
    title: "Space Adventure",
    path: "/games/space-adventure",
    description: "Embark on an interactive journey through space",
    gradient: "from-purple-400 to-pink-500",
    icon: "🌌"
  }
];

const GameChooser = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />
      <Background />
      <Stars />

      <div className="relative z-10 container mx-auto px-4 py-12 mt-12">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center"
          animate={{ 
            backgroundPosition: ["0%", "100%", "0%"],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: "200% 100%"
          }}
        >
          Choose Your Space Adventure
        </motion.h1>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <Link to={game.path} className="block">
                <div className={`h-64 backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 
                  flex flex-col items-center justify-center text-center cursor-pointer
                  transition-all duration-300 group-hover:border-white/20`}
                >
                  <span className="text-5xl mb-4">{game.icon}</span>
                  <h2 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${game.gradient} bg-clip-text text-transparent`}>
                    {game.title}
                  </h2>
                  <p className="text-gray-300">
                    {game.description}
                  </p>
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      zIndex: -1
                    }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 mb-8">
            Choose your game mode and embark on an educational journey through space!
          </p>
        </motion.div>
      </div>

    </div>
  );
};

export default GameChooser;
