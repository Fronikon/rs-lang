import styles from "./VoiceButton.module.css";
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from "../../../../..";
import { actions } from "../../../../../redux/actions";

type PropsType = {
  audio: string
  audioMeaning: string
  audioExample: string
}

const VoiceButton: React.FC<PropsType> = (props) => {
  const music: string[] = [props.audio, props.audioMeaning, props.audioExample];

  const dispatch = useDispatch();
  const currentAudio = useSelector((state: StoreType) => state.textbook.currentAudio);

  const onClickPlayVoice = () => {
    if (currentAudio) {
      currentAudio.pause();
      dispatch(actions.setAudio(null));
    }
    playVoice(0);
  };

  function playVoice(num: number) {
    if (num !== music.length) {
      const audio = new Audio();
      audio.src = music[num];
      audio.autoplay = true;
      dispatch(actions.setAudio(audio));

      audio.onended = () => playVoice(num + 1);
    }
  }

  return (
    <div onClick={onClickPlayVoice} className={cn(styles['voice-button'], 'icon-button')}></div>
  );
};

export default VoiceButton;