import cn from 'classnames';
import styles from './About.module.css';
import Card from './Card';
import cards from './constants';

const About: React.FC = () => {
  const listCards = cards.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      img={card.img}
      name={card.name}
      position={card.position}
      description={card.description}
    />
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