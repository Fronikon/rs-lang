import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { useCustomDispatch, useCustomSelector } from './hooks/redax-hooks';

import { useEffect, useState } from 'react';
import { getNewTokens } from './api/authApi';
import { actions } from './redux/actions';

import About from './components/About/About';
import AudioChallenge from './components/AudioChallenge/AudioChallenge';
import Authorization from './components/Autorization/Authorization';
import Footer from './components/Footer/Footer';
import Greeting from './components/Greeting/Greeting';
import Header from './components/Header/Header';
import NavMenu from './components/NavMenu/NavMenu';
import NotFound from './components/NotFound/NotFound';
import Sprint from './components/Sprint/Sprint';
import Statistics from './components/Statistics/Statistics';
import Textbook from './components/Textbook/Textbook';

function App() {
  const isNavMenuOpen = useCustomSelector((state): boolean => state.navMenu.isNavMenuOpen);
  const [isCheckLogin, setIsCheckLogin] = useState<boolean>(true);
  const token = JSON.parse((localStorage.getItem('token') as string));
  const timeLogin = Number(localStorage.getItem('timeLogin'));
  const limitTime = 4 * 60 * 60 * 1000 - 5 * 60 * 1000; // 3h 55m
  const dispatch = useCustomDispatch();

  useEffect(() => {
    if (isCheckLogin) {
      setIsCheckLogin(false);
      if (!token) return;
      else if ((Date.now() - timeLogin) < limitTime) dispatch(actions.switchIsLogin(true));
      else {
        getNewTokens().then((response) => {
          if (response.status === 200) {
            dispatch(actions.switchIsLogin(true));
            return response.json().then((res) => {
              localStorage.setItem('userId', JSON.stringify(res.userId));
              localStorage.setItem('token', JSON.stringify(res.token));
              localStorage.setItem('refreshToken', JSON.stringify(res.refreshToken));
              localStorage.setItem('timeLogin', JSON.stringify(Date.now()));
            });
          }
        });
      } 
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheckLogin]);


  return (
    <>
      {isNavMenuOpen && <NavMenu />}
      <Header />
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<Greeting />} />
          <Route path="/auth/*" element={<Authorization />} />
          <Route path='/textbook/*' element={<Textbook />} />
          <Route path="/about" element={<About />} />
          <Route path="/sprint" element={<Sprint />} />
          <Route path="/audio" element={<AudioChallenge />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
