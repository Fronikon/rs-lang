import cn from 'classnames';
import styles from './Footer.module.css';

interface IStudents {
  id: number;
  name: string;
  link: string;
}

const students: IStudents[] = [
  {
    id: 1,
    name: 'Dmitriy Beresnev',
    link: 'https://github.com/Fronikon',
  },
  {
    id: 2,
    name: 'Andrey Lavrenov',
    link: 'https://github.com/InnokentyKedrov',
  },
  {
    id: 3,
    name: 'Daniil Sharenkov',
    link: 'https://github.com/karap9s',
  },
];

export const listStudents = students.map((student) => (
  <a className={cn(styles['student'])} href={student.link} key={student.id}>
    {student.name}
  </a>
));


export default listStudents;
