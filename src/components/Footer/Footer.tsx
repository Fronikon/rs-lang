import cn from 'classnames';
import styles from './Footer.module.css';
import rssLogo from '../../assets/logo/rssLogo.svg';
import authorsData from '../../data/authors';

const Footer: React.FC = () => {
  const listStudents = authorsData.map((data) => (
    <a
      className={cn(styles.student)}
      href={data.gitHub}
      key={data.id}
    >{data.name}</a>
  ));

  return (
    <footer className={cn(styles.footer, 'container')}>
      <div className={cn(styles.rs_logo_container)}>
        <a href="https://rs.school/js/">
          <img src={rssLogo} alt="rss-logo" width={'100%'} height={'100%'} />
        </a>
      </div>
      <div className={cn(styles.students)}>{listStudents}</div>
      <div className={cn(styles.creation)}>
        <span className={cn(styles['creation_year'])}>2022</span>
      </div>
    </footer>
  );
};

export default Footer;