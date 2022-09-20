import cn from 'classnames';
import { IAuthorData } from '../../types/types';
import styles from './About.module.css';

const Card: React.FC<IAuthorData> = (props) => {
  return (
    <div className={cn(styles.card)} key={props.id}>
      <img src={props.img} alt={props.name} />
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
