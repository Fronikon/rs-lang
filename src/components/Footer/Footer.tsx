import cn from 'classnames';
import styles from './Footer.module.css';
import rssLogo from '../../assets/logo/rssLogo.svg';
import listStudents from './constants';

const Footer: React.FC = () => {
  return (
    <footer className={cn(styles.footer, 'container')}>
      <div className="rs_logo-container">
        <a href="https://rs.school/js/">
          <img src={rssLogo} alt="rss-logo" width={130} height={47} />
        </a>
      </div>
      <div className="students">
        {listStudents}
      </div>
      <div className="creation-year">
        <p className={cn(styles['student'])}>2022</p>
      </div>
    </footer>
  );
};

export default Footer;