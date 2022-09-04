import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Greeting } from './components/Greeting/Greeting';
import NavMenu from './components/NavMenu/NavMenu';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Textbook from './components/Textbook/Textbook';
import About from './components/About/About';
import Sprint from './components/Sprint/Sprint';
import Statistics from './components/Statistics/Statistics';
import Authorization from './components/Autorization/Authorization';
import AudioChallenge from './components/AudioChallenge/AudioChallenge';
import styles from './App.module.css';
import { StoreType } from '.';
import { getRefreshToken } from './api/api';
import { serverResponse } from './types/types';
import { actions } from './redux/actions';

function App() {
  const isNavMenuOpen = useSelector((state: StoreType): boolean => state.navMenu.isNavMenuOpen);
  const [isCheckLogin, setIsCheckLogin] = useState<boolean>(false);
  const user: serverResponse = JSON.parse((localStorage.getItem('user') as string));
  const timeLogin = Number(localStorage.getItem('timeLogin'));
  const limitTime = 4 * 60 * 60 * 1000 - 5 * 60 * 1000; // 3h 55m
  const dispatch = useDispatch();

  useEffect(() => {
    setIsCheckLogin(true);
    if (isCheckLogin) {
      if (!user) return;
      else if ((Date.now() - timeLogin) < limitTime) dispatch(actions.switchIsLogin());
      else {
        (function refresh() {
          getRefreshToken(user).then((response) => {
            if (response.status === 200) {
              dispatch(actions.switchIsLogin());
              return response.json().then((res) => {
                localStorage.setItem('user', JSON.stringify(res));
                localStorage.setItem('timeLogin', JSON.stringify(Date.now()));
              });
            }
          });
        })();
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
          <Route path="/auth" element={<Authorization />} />
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
