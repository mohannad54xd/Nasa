import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 backdrop-blur-xl bg-gradient-to-r from-black/50 via-purple-900/30 to-blue-900/30 border-t border-white/10 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
          >
            <motion.p 
              className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
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
              Team Aliens <motion.span 
                className="text-white inline-block"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👽
              </motion.span>
            </motion.p>
            <p className="text-sm text-gray-400">
              Made with <motion.span 
                className="inline-block"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ❤️
              </motion.span> in Egypt
            </p>
          </motion.div>
          
          <div className="flex space-x-6">
            {[
              { Icon: FaGithub, href: "https://github.com" },
              { Icon: FaTwitter, href: "https://twitter.com" },
              { Icon: FaLinkedin, href: "https://linkedin.com" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 360 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.Icon size={24} />
              </motion.a>
            ))}
          </div>
          
          <motion.p 
            className="text-xs text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            © 2024 Team Aliens. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;