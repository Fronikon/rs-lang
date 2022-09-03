/* eslint-disable no-console */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
import { StoreType } from '.';
import { getRefreshToken } from './api/api';

type Response = {
  "message": "string",
  "token": "string",
  "refreshToken": "string",
  "userId": "string",
  "name": "string"
}

const user: Response = JSON.parse((localStorage.getItem('user') as string));

const checkAuth = async() => {
  console.log('localStorage.getItem(user): ', localStorage.getItem('user'));

  if (!localStorage.getItem('token')) return console.log('Вы не авторизованы');  
  else {
    const refresh = await getRefreshToken(user.userId, user.refreshToken).then((response) => {
      console.log('refresh status: ', response.status);
      if (response.status === 200) {
        return response.json().then((res) => {
          localStorage.setItem('user', JSON.stringify(res));
          return res.token;        
        });
      }
    });
    if (refresh) console.log('Вы авторизованы');
    else console.log('Время сессии истекло');
  }
};

function App() {
  const isNavMenuOpen = useSelector((state: StoreType): boolean => state.navMenu.isNavMenuOpen);
  // const isLogin = useSelector((state: StoreType): boolean => state.auth.isLogin);

  checkAuth();

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
