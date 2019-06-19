import React from 'react';
import './App.css';

import {
  Header, About, Resume, Portfolio, Testimonials, Contact, Footer
} from './components'

function App() {
  return (
    <div className="App">
        <Header />
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
