import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Greeting } from './components/Greeting/Greeting';
import NavMenu from './components/NavMenu/NavMenu';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Textbook from './components/Textbook/Textbook';
import About from './components/About/About';
import Sprint from './components/Sprint/Sprint';
import Authorization from './components/Autorization/Authorization';
import AudioChallenge from './components/AudioChallenge/AudioChallenge';
import styles from './App.module.css';
import { useSelector } from 'react-redux';
import { StoreType } from '.';

function App() {
  const isNavMenuOpen = useSelector((state: StoreType): boolean => state.navMenu.isNavMenuOpen);

  return (
    <>
      {isNavMenuOpen && <NavMenu />}
      <Header />
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<Greeting />} />
          <Route path="/auth" element={<Authorization />} />
          <Route path='/textbook/*' element={<Textbook />} />
          <Route path="/about" element={<About />} />
          <Route path="/sprint" element={<Sprint />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/audio//*" element={<AudioChallenge />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
