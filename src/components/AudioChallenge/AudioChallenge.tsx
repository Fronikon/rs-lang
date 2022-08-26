import cn from 'classnames';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import { StoreType } from '../..';
import QuestionPage from './QuestionPage/QuestionPage';
import styles from './AudioChallenge.module.css';
import AudioStart from './AudioStart/AudioStart';

const AudioChallenge: React.FC = () => {
  const currentGroup = useSelector((state: StoreType): number => state.textbook.currentGroup);

  return (
    <main className={cn(styles.audio)}>
      <Routes>
        {/* <Route path="/" element={<AudioStart currentGroup={currentGroup} />} /> */}
        <Route path="/" element={<QuestionPage />} />
        
      </Routes>
    </main>
  );
};

export default AudioChallenge;