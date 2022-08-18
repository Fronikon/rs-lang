import React from 'react';
import NavMenu from './components/NavMenu/NavMenu';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <NavMenu />
      <Header />
      <Routes>
        <Route path='/' element={<div>Main Page</div>} />
        <Route path='/auth' element={<div>Auth Page</div>} />
        <Route path='/textbook' element={<div>Textbook Page</div>} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
