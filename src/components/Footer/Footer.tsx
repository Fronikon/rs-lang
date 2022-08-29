import cn from 'classnames';
import styles from './Footer.module.css';
import rssLogo from '../../assets/logo/rssLogo.svg';
import students from './constants';

const Footer: React.FC = () => {
  const listStudents = students.map((student) => (
    <a className={cn(styles['student'])} href={student.link} key={student.id}>
      {student.name}
    </a>
  ));

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
        <span className={cn(styles['student'])}>2022</span>
      </div>
    </footer>
  );
};

export default Footer;