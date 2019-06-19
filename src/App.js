import React from 'react';
import './App.css';

import {
  Header, About, Resume, Portfolio, Testimonials, Contact, Footer
} from './components'

import resumeData from './resumeData'

function App() {
  return (
    <div className="App">
        <Header resumeData={resumeData}/>
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
