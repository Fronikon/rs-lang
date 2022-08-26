import cn from 'classnames';
import { Route, Routes } from 'react-router';
import styles from './AudioChallenge.module.css';
import AudioStart from './AudioStart/AudioStart';

const AudioChallenge: React.FC = () => {
  return (
    <main className={cn(styles.audio)}>
      <Routes>
        <Route path="/" element={<AudioStart />} />
      </Routes>
    </main>
  );
};

export default AudioChallenge;