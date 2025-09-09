import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ResourcesPage from './pages/ResourcesPage';
import MediaPage from './pages/MediaPage';
import ContactPage from './pages/ContactPage';
import NewsPage from './pages/media/NewsPage';
import EventsPage from './pages/media/EventsPage';
import PicturesPage from './pages/media/PicturesPage';
import Y3Cs from './pages/projects/Y3Cs';
import EconomyLagos from './pages/projects/EconomyLagos';
import LetOurLagosBreathe from './pages/projects/LetOurLagosBreathe';
import Mission5050 from './pages/projects/Mission5050';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/y3cs" element={<Y3Cs />} />
          <Route path="/projects/economy-lagos" element={<EconomyLagos />} />
          <Route path="/projects/let-our-lagos-breathe" element={<LetOurLagosBreathe />} />
          <Route path="/projects/mission-50-50" element={<Mission5050 />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/media/news" element={<NewsPage />} />
          <Route path="/media/events" element={<EventsPage />} />
          <Route path="/media/pictures" element={<PicturesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;