import { GameType } from '../../types/enums';
import Game from '../Game/Game';

const AudioChallenge: React.FC = () => {
  return <Game 
    limit={20}
    gameType={GameType.audioChallenge}
    title='Аудиовызов'
    description='Улучшай своё восприятие английской речи на слух.'
  />;
};

export default AudioChallenge;