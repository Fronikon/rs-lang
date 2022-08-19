import cn from 'classnames';
import styles from './About.module.css';
import cards from './constants';

const About: React.FC = () => {
  const listCards = cards.map((card) => (
    <div className={cn(styles.card)} key={card.id}>
      <img src={card.img} alt={card.name} width ={300} height={295}/>
      <h3 className={styles.name}>{card.name}</h3>
      <h4 className={styles.position}>{card.position}</h4>
      <p className={styles.description}>{card.description}</p>
    </div>
  ));
  return (
    <main className={cn(styles.main)}>
      <h2 className={cn(styles.h2)}>Наша команда</h2>
      <section className={cn(styles.cards)}>
        {listCards}
      </section>
    </main>
  );
};

export default About;