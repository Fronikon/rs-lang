import cn from 'classnames';
import styles from './About.module.css';
import Card from './Card';
import cards from './constants';

const About: React.FC = () => {
  return (
    <main className={cn(styles.main, 'container')}>
      <h2 className={cn(styles.title)}>Наша команда</h2>
      <section className={cn(styles.cards)}>
        {
          cards.map((card) => (
            <Card
              key={card.id}
              gitHub={card.gitHub}
              id={card.id}
              img={card.img}
              name={card.name}
              position={card.position}
              description={card.description}
            />
          ))
        }
      </section>
    </main>
  );
};

export default About;