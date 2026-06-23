import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Background from './Background';
import Stars from './Stars';
import Navbar from './Navbar';
import Footer from './Footer';

const Exoplanets = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/games');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />
      <Background />
      <Stars />

      {/* Hero Section */}
      <div className="relative z-10">
        <motion.div 
          className="hero min-h-[60vh] flex items-center justify-center text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-3xl">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Discover New Worlds
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Explore the universe through NASA's cutting-edge exoplanet data and visualization tools
            </motion.p>
            <motion.button
              onClick={handleExplore}
              className="px-8 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full 
                text-white/80 hover:text-white border border-white/10 hover:border-white/20 
                transition-all duration-300 relative group overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Exploring
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16 space-y-16">
          <motion.section 
            className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Exoplanet Explorer
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Exoplanet Explorer is dedicated to providing users with a comprehensive platform for exploring exoplanets using cutting-edge technology derived from NASA's extensive research and data resources.
              </p>
              <p>
                Utilizing data from NASA's Exoplanet Archive and Eyes on Exoplanets, we aim to make this information accessible and engaging.
              </p>
              <p>
                Whether you're a beginner or a seasoned researcher, Exoplanet Explorer has something for everyone!
              </p>
            </div>
          </motion.section>

          <motion.section 
            className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              NASA Resources
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                This website leverages various NASA resources to provide you with in-depth information about exoplanets and their exploration. Our mission is to connect you with tools and data from NASA's Exoplanet Archive, Eyes on Exoplanets, and educational materials from the Jet Propulsion Laboratory (JPL).
              </p>
              <p>
                Explore the characteristics of exoplanets, their potential habitability, and the scientific missions dedicated to discovering new worlds beyond our solar system.
              </p>
            </div>
          </motion.section>
        </div>

        {/* Footer */}
      <Footer />
      </div>
    </div>
  );
};

export default Exoplanets;