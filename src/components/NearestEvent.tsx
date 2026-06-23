import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const NearestEvent = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedDetails, setExpandedDetails] = useState<string | null>(null);

  useEffect(() => {
    // Set your target date here
    const targetDate = new Date('2026-12-31');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const additionalEvents = [
    {
      id: "lunar-eclipse",
      name: "Lunar Eclipse",
      date: "September 18, 2024",
      type: "Lunar Event",
      location: "Europe and Americas",
      description: "A lunar eclipse occurs when the Moon moves into the Earth's shadow.",
      details: {
        visibility: "Visible from Europe and the Americas",
        duration: "3 hours and 22 minutes",
        maxEclipse: "10:17 PM EDT",
        viewing: "No special equipment needed",
        weather: "Clear skies recommended",
        tips: [
          "Find a dark location away from city lights",
          "Allow eyes to adjust to darkness",
          "Best viewed with naked eye or binoculars"
        ]
      }
    },
    {
      id: "meteor-shower",
      name: "Meteor Shower",
      date: "August 12, 2024",
      type: "Meteor Event",
      location: "Northern Hemisphere",
      description: "The Perseid meteor shower, producing up to 60 meteors per hour.",
      details: {
        visibility: "Best viewed from Northern Hemisphere",
        duration: "Peak viewing hours: 11 PM - 4 AM",
        rate: "Up to 60 meteors per hour",
        viewing: "No equipment needed",
        weather: "Clear, moonless night ideal",
        tips: [
          "Lie flat on your back",
          "Look toward the constellation Perseus",
          "Allow 30 minutes for eyes to adjust"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4" id='events' >
      <motion.section className="max-w-4xl w-full mx-auto relative z-10">
        <motion.div className="relative backdrop-blur-md bg-white/5 rounded-2xl p-12 transform transition-all duration-500 shadow-xl border border-white/10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center"
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
            Next Cosmic Event
          </motion.h2>

          <div className="grid grid-cols-4 gap-4 mb-8">
            {Object.entries(timeLeft).map(([key, value]) => (
              <motion.div
                key={key}
                className="text-center p-4 backdrop-blur-lg bg-white/5 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span 
                  className="block text-3xl md:text-4xl font-bold text-blue-400"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {value}
                </motion.span>
                <span className="text-sm text-gray-400 capitalize font-orbitron">{key}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center space-y-6 relative z-20">
            <p className="text-xl text-gray-300">
              Total Solar Eclipse
            </p>
            <motion.div 
              className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: "0%" }}
                animate={{ width: "75%" }}
                transition={{ duration: 2 }}
              />
            </motion.div>
            <div className="flex justify-center gap-4 mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold cursor-pointer"
              >
                Set Reminder
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold cursor-pointer"
              >
                {isExpanded ? "Show Less" : "See More"}
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 space-y-4 overflow-hidden relative z-20"
              >
                <motion.hr 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  className="border-white/10 my-6"
                />
                
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Upcoming Events</h3>
                
                <div className="grid gap-4">
                  {additionalEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors"
                    >
                      <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        {event.name}
                      </h4>
                      <p className="text-gray-400 mt-2">{event.date}</p>
                      <p className="text-gray-300 mt-2">{event.description}</p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-gray-300">{event.location}</span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setExpandedDetails(expandedDetails === event.id ? null : event.id)}
                          className="text-sm px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-white/80 hover:text-white"
                        >
                          {expandedDetails === event.id ? "Hide Details" : "Show Details"}
                        </motion.button>
                      </div>
                      
                      <AnimatePresence>
                        {expandedDetails === event.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 space-y-4 overflow-hidden"
                          >
                            <motion.hr 
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              className="border-white/10"
                            />
                            
                            <div className="grid gap-4 text-sm">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h5 className="font-semibold text-purple-400">Visibility</h5>
                                  <p className="text-gray-300">{event.details.visibility}</p>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-purple-400">Duration</h5>
                                  <p className="text-gray-300">{event.details.duration}</p>
                                </div>
                              </div>
                              
                              <div>
                                <h5 className="font-semibold text-purple-400">Viewing Tips</h5>
                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                  {event.details.tips.map((tip, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.1 }}
                                    >
                                      {tip}
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div 
            className="absolute inset-0 -z-10 opacity-50 pointer-events-none"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {/* Add background patterns or decorative elements */}
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};


export default NearestEvent;