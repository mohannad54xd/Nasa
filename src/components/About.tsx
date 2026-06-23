import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const teamMembers = [
  {
    name: "Mohannad Essam Saad",
    role: "Space Explorer",
    image: "/members/mohannad.jpg",
    bio: "Exploring the frontiers of web development and pushing the boundaries of what's possible.",
    links: {
      github: "https://github.com/mohannad54xd",
      linkedin: "https://www.linkedin.com/in/mohannad-essam-092aa02b9/",
      instagram: "https://www.instagram.com/trz_mohannad112/"
    }
  },
  {
    name: "Mohannad AbdEl-Naby ",
    role: "Cosmic Developer",
    image: "/members/mands.jpg",
    bio: "Crafting stellar experiences through code and creativity.",
    links: {
      github: "https://github.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      instagram: "https://www.instagram.com/_mands_s_/"
    }
  }
];

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4" id='contact' >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Meet Our Team
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500"
            >
              <div className="relative mb-6 group">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {member.name}
              </h3>
              
              <p className="text-blue-300 text-center mb-4">{member.role}</p>
              <p className="text-gray-300 text-center mb-6">{member.bio}</p>
              
              <div className="flex justify-center space-x-4">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={member.links.github}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={member.links.linkedin}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FaLinkedin size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={member.links.instagram}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FaInstagram size={24} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;