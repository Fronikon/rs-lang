import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { StoreType } from '../../store/store';
import HardWordCardsContainer from './HardWordCardsContainer/HardWordCardsContainer';
import WordCardsContainer from './WordCardsContainer/WordCardsContainer';

const Textbook = () => {
  const isLogin = useSelector((state: StoreType): boolean => state.auth.isLogin);

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