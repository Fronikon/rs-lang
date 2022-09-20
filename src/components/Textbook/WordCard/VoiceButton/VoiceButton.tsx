import styles from "./VoiceButton.module.css";
import cn from 'classnames';
import { actions } from "../../../../redux/actions";
import { useCustomDispatch, useCustomSelector } from "../../../../hooks/redax-hooks";

type PropsType = {
  audio: string
  audioMeaning: string
  audioExample: string
}

const VoiceButton: React.FC<PropsType> = (props) => {
  const music: string[] = [props.audio, props.audioMeaning, props.audioExample];

  const dispatch = useCustomDispatch();
  const currentAudio = useCustomSelector((state) => state.textbook.currentAudio);

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