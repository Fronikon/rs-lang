import cn from 'classnames';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import { StoreType } from '../..';
import styles from './AudioChallenge.module.css';
import AudioStart from './AudioStart/AudioStart';
import QuestionPage from './AudioStart/QuestionPage/QuestionPage';

const AudioChallenge: React.FC = () => {
  const currentGroup = useSelector((state: StoreType): number => state.textbook.currentGroup),
    currentPage = useSelector((state: StoreType): number => state.textbook.currentPage);


  return (
    <main className={cn(styles.audio)}>
      <Routes>
        <Route path="/" element={<AudioStart currentGroup={currentGroup}  currentPage={currentPage}/>} />
        <Route path="/quest" element={<QuestionPage />} />
        
      </Routes>
    </main>
  );
};

export default AudioChallenge;