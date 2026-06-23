import { motion } from 'framer-motion';

const Background = () => {
  return (
    <>
      {/* Animated orbs */}
      <div className="absolute inset-0 w-full h-full z-0">
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/30 blur-[128px]"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '20%', left: '15%' }}
        />
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/30 blur-[128px]"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '40%', right: '15%' }}
        />
        <motion.div 
          className="absolute w-[400px] h-[400px] rounded-full bg-indigo-600/30 blur-[128px]"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: '10%', left: '35%' }}
        />

        {/* Star field effect */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)',
          backgroundBlendMode: 'multiply',
        }}>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(white 1px, transparent 1px),
              radial-gradient(white 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            backgroundPosition: '0 0, 25px 25px',
            opacity: 0.15,
          }} />
        </div>
      </div>
    </>
  );
};

export default Background;
