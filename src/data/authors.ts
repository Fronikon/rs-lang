import Daniil from '../assets/images/Daniil.jpg';
import Dmitriy from '../assets/images/dmitriy.jpg';
import Andrey from '../assets/images/Andrey.png';
import { IAuthorData } from '../types/types';

const authorsData: IAuthorData[] = [
  {
    id: 1,
    gitHub: 'https://github.com/Fronikon',
    img: `${Dmitriy}`,
    name: 'Dmitriy Beresnev',
    position: 'Team-lead',
    description: 'Настроил приложение, разработал дизайн, создал меню навигации, сделал учебник, помогал в разработке игр, настроил взаимодействие между играми и учебником.',
  },
  {
    id: 2,
    gitHub: 'https://github.com/InnokentyKedrov',
    img: `${Andrey}`,
    name: 'Andrey Lavrenov',
    position: 'Developer',
    description: 'Впервые что-то делал на React, но всё-таки сумел сделать авторизацию, игру "Аудиовызов", страницу статистики, главную страницу и настроил сервер.',
  },
  {
    id: 3,
    gitHub: 'https://github.com/karap9s',
    img: `${Daniil}`,
    name: 'Daniil Sharenkov',
    position: 'Developer',
    description: 'Тоже впервые увидел React, но смог сделать игру "Спринт", адаптировал приложение под разные экраны, сделал footer и header, а также сделал ту страницу, на которой вы это читаете.',
  },
];

export default authorsData;