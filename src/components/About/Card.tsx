import cn from 'classnames';
import styles from './About.module.css';
import { ICards } from './constants';

const Card: React.FC<ICards> = (props) => {
  return (
    <div className={cn(styles.card)} key={props.id}>
      <img src={props.img} alt={props.name} width={300} height={295} />
      <div className={styles.card__content}>
        <a href={props.gitHub}>
          <h3 className={styles.name}>{props.name}</h3>
        </a>
        <h4 className={styles.position}>{props.position}</h4>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
