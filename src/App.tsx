import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Loader from './components/Loader';
import Home from './components/Home';


import Article from './components/Article';
import Exoplanets from './components/Exoplanets';
import GameChooser from './components/GameChooser';
import SpaceQuizChallenge from './components/games/SpaceQuizChallenge';
import SpaceAdventure from './components/games/SpaceAdventure';
import QuizGame from './components/games/QuizGame';
import About from './components/About';
import SolarSystem from './components/SolarSystem';
import Seismic from './components/Seismic';

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Show loader for 1.5 seconds

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <Loader />;
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/seismic-events" element={<Seismic />} />
        <Route path="/exoplanets" element={<Exoplanets />} />
        <Route path="/games" element={<GameChooser />} />
        <Route path="/games/*">
          <Route path="space-quiz-challenge" element={<SpaceQuizChallenge />} />
          <Route path="space-adventure" element={<SpaceAdventure />} />
          <Route path="quiz/play" element={<QuizGame />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/solar-system" element={<SolarSystem />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;