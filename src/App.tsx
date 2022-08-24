import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Greeting } from './components/Greeting/Greeting';
import NavMenu from './components/NavMenu/NavMenu';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Authorization from './components/Autorization/Authorization';

function App() {
  return (
    <>
      <NavMenu />
      <Header />
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/auth" element={<Authorization />} />
        <Route path="/textbook" element={<div>Textbook Page</div>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
