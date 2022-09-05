import students from "../Footer/constants";
import Daniil from '../../assets/images/Daniil.jpg';
import Dmitriy from '../../assets/images/dmitriy.jpg';
import Andrey from '../../assets/images/Andrey.png';

export interface ICards {
  id: number,
  gitHub: string,
  img: string,
  name: string,
  position: string,
  description: string,
}

const cards: ICards[] = [
  {
    id: students[0].id,
    gitHub: 'https://github.com/Fronikon',
    img: `${Dmitriy}`,
    name: students[0].name,
    position: 'Team-lead',
    description: 'Настроил приложение, разработал дизайн, создал меню навигации, сделал учебник, помогал в разработке игр, настроил взаимодействие между играми и учебником.',
  },
  {
    id: students[1].id,
    gitHub: 'https://github.com/InnokentyKedrov',
    img: `${Andrey}`,
    name: students[1].name,
    position: 'Developer',
    description: 'Впервые что-то делал на React, но всё-таки сумел сделать авторизацию, игру "Аудиовызов", страницу статистики, главную страницу и настроил сервер.',
  },
  {
    id: students[2].id,
    gitHub: 'https://github.com/karap9s',
    img: `${Daniil}`,
    name: students[2].name,
    position: 'Developer',
    description: 'Тоже впервые увидел React, но смог сделать игру "Спринт", адаптировал приложение под разные экраны, сделал footer и header, а также сделал ту страницу, на которой вы это читаете.',
  },
];

export default cards;