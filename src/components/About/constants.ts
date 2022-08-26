import students from "../Footer/constants";
import Daniil from '../../assets/images/Daniil.jpg';
import Dmitriy from '../../assets/images/dmitriy.jpg';
import Andrey from '../../assets/images/Andrey.png';

export interface ICards {
  id: number,
  img: string,
  name: string,
  position: string,
  description: string,
}

const cards: ICards[] = [
  {
    id: students[0].id,
    img: `${Dmitriy}`,
    name: students[0].name,
    position: 'Team-lead',
    description: 'Сделал то и то и это и то и то и то и то',
  },
  {
    id: students[1].id,
    img: `${Andrey}`,
    name: students[1].name,
    position: 'Developer',
    description: 'Сделал то и то и это',
  },
  {
    id: students[2].id,
    img: `${Daniil}`,
    name: students[2].name,
    position: 'Developer',
    description: 'Сделал то и то и это',
  },
];

export default cards;