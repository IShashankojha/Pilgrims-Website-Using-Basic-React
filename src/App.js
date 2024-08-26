import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PopularSites from './components/PopularSites';
import UpcomingEvents from './components/UpcomingEvents';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <PopularSites />
      <UpcomingEvents />
      <Testimonials />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
