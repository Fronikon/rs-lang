import cn from 'classnames';
import styles from './Footer.module.css';
import rssLogo from '../../assets/logo/rssLogo.svg';

const Footer: React.FC = () => {
  return (
    <footer className={cn(styles.footer, 'container')}>
      <div className="rs_logo-container">
        <a href="https://rs.school/js/">
          <img src={rssLogo} alt="rss-logo" width={130} height={47} />
        </a>
      </div>
      <div className="students">
        <a
          className={cn(styles['student'])}
          href="https://github.com/Fronikon"
        >
          Dmitriy Beresnev
        </a>
        <a
          className={cn(styles['student'])}
          href="https://github.com/InnokentyKedrov"
        >
          Andrey Lavrenov
        </a>
        <a
          className={cn(styles['student'])}
          href="https://github.com/karap9s"
        >
          Daniil Sharenkov
        </a>
      </div>
      <div className="creation-year">
        <p className={cn(styles['student'])}>2022</p>
      </div>
    </footer>
  );
};

export default Footer;