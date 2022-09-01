import cn from 'classnames';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import { StoreType } from '../..';
import styles from './AudioChallenge.module.css';
import AudioStart from './AudioStart/AudioStart';
import QuestionPage from './QuestionPage/QuestionPage';

const AudioChallenge: React.FC = () => {
  const currentGroup = useSelector((state: StoreType): number => state.textbook.currentGroup);
  const currentPAge = Math.floor(Math.random() * 30);

  return (
    <section className={cn(styles.audio)}>
      <Routes>
        <Route path="/" element={<AudioStart />} />
        <Route path="/quest" element={<QuestionPage currentGroup={currentGroup}  currentPAge={currentPAge} />} />
      </Routes>
    </section>
  );
};

export default AudioChallenge;