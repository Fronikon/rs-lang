import cn from 'classnames';
import styles from './Sprint.module.css';
import ArrowDown from '../../assets/logo/Vector.svg';
import Close from '../../assets/logo/close-sign.svg';
import FirstFox from '../../assets/images/first_fox.png';
import Megaphone from '../../assets/logo/megaphone.svg';

const Sprint: React.FC = () => {
  return (
    <main className={cn(styles.main)}>
      <a href="/">
        <img className={cn(styles.close)} src={Close} alt="close" />
      </a>

      <div className={cn(styles.start_wrapper)}>
        <h2 className={cn(styles.heading)}>Спринт</h2>
        <p className={cn(styles.description)}>
          Успей за отведенное время набрать как можно больше очков. За каждые
          четыре правильно угаданных слова количество получаемых очков
          увеличивается.
        </p>
        <div className={cn(styles.buttons_wrapper)}>
          <button className={cn(styles.start)}>
            <p className={cn(styles.start_text)}>Начать</p>
          </button>
          <button className={cn(styles.chapter)}>
            <p className={cn(styles.chapter_text)}>1 раздел</p>
            <img
              className={cn(styles.chapter_arrow)}
              src={ArrowDown}
              alt="Arrow Down"
            />
          </button>
        </div>
      </div>

      <div className={cn(styles.general_game_wrapper)}>
        <p className={cn(styles.total)}>0</p>
        <div className={cn(styles.timer)}>60</div>
        <div className={cn(styles.game_wrapper)}>
          <div className={cn(styles.points)}>+10</div>
          <div className={cn(styles.checkboxes)}>
            <input className={cn(styles.checkbox)} type="checkbox" />
            <input className={cn(styles.checkbox)} type="checkbox" />
            <input className={cn(styles.checkbox)} type="checkbox" />
          </div>
          <img className={cn(styles.picture)} src={FirstFox} alt="fox" />
          <h3 className={cn(styles.english_word)}>hello</h3>
          <p className={cn(styles.russian_word)}>привет</p>
          <div className={cn(styles.line)}></div>
          <div className={cn(styles.game_buttons_wrapper)}>
            <button className={cn(styles.true)}>
              <p className={cn(styles.true_text)}>Верно</p>
            </button>
            <button className={cn(styles.false)}>
              <p className={cn(styles.false_text)}>Не верно</p>
            </button>
          </div>
        </div>
      </div>

      <div className={cn(styles.result_game_wrapper)}>
        <h2 className={cn(styles.result)}>Результат</h2>
        <div className={cn(styles.results_wrapper, 'wrong')}>
          <div className={cn(styles.counter, 'dont_know')}>
            <h3 className={cn(styles.counter_heading)}>Не знаю</h3>
            <div className={cn(styles.wrong_count)}>18</div>
          </div>
          <div className={cn(styles.words)}>
            <div className={cn(styles.word)}>
              <img
                className={cn(styles.word_icon)}
                src={Megaphone}
                alt="megaphone"
              />
              <p className={cn(styles.eng_bold_word)}>duck</p>
              —
              <p className={cn(styles.rus_standart_word)}>утка</p>
            </div>
            <div className={cn(styles.word)}>
              <img
                className={cn(styles.word_icon)}
                src={Megaphone}
                alt="megaphone"
              />
              <p className={cn(styles.eng_bold_word)}>duck</p>
              —
              <p className={cn(styles.rus_standart_word)}>утка</p>
            </div>
          </div>
        </div>
        <div className={cn(styles.line)}></div>
        <div className={cn(styles.results_wrapper, 'right')}>
          <div className={cn(styles.counter, 'know')}>
            <h3 className={cn(styles.counter_heading)}>Знаю</h3>
            <div className={cn(styles.right_count)}>2</div>
          </div>
          <div className={cn(styles.words)}>
            <div className={cn(styles.word)}>
              <img
                className={cn(styles.word_icon)}
                src={Megaphone}
                alt="megaphone"
              />
              <p className={cn(styles.eng_bold_word)}>duck</p>
              —
              <p className={cn(styles.rus_standart_word)}>утка</p>
            </div>
            <div className={cn(styles.word)}>
              <img
                className={cn(styles.word_icon)}
                src={Megaphone}
                alt="megaphone"
              />
              <p className={cn(styles.eng_bold_word)}>duck</p>
              —
              <p className={cn(styles.rus_standart_word)}>утка</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sprint;