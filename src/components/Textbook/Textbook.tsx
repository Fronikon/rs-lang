import { Route, Routes } from 'react-router-dom';
import { useCustomSelector } from '../../hooks/redax-hooks';
import HardWordCardsContainer from './HardWordCardsContainer/HardWordCardsContainer';
import WordCardsContainer from './WordCardsContainer/WordCardsContainer';

const Textbook = () => {
  const isLogin = useCustomSelector((state): boolean => state.auth.isLogin);

  return (
    <section className='container'>
      <Routes>
        <Route path="/" element={<WordCardsContainer isLogin={isLogin} />} />
        <Route path="hardwords" element={<HardWordCardsContainer isLogin={isLogin}/>} />
      </Routes>
    </section>
  );
};

export default Textbook;