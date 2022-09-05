import Game from '../Game/Game';

const AudioChallenge: React.FC = () => {
  return <Game 
    limit={20}
    gameTipe='audioChallenge'
    title='Аудиовызов'
    description='Улучшай своё восприятие английской речи на слух.'
  />;
};

export default AudioChallenge;