import cn from 'classnames';
import { StatDatasType } from '../../../types/types';
import { GameStatisticsType } from '../../../types/types';
import styles from '../Statistics.module.css';
import StatContainer from './StatContainer/StatContainer';

type PropsType = {
  audiochallenge: GameStatisticsType
  sprint: GameStatisticsType
}

const UserStat: React.FC<PropsType> = ({ audiochallenge, sprint }) => {
  const countNewWordsPerDay = audiochallenge.countNewWordsPerDay + sprint.countNewWordsPerDay;
  const countLearnedWordsPerDay = audiochallenge.countLearnedWordsPerDay + sprint.countLearnedWordsPerDay;
  const percent = Math.round((sprint.countSucсessAnswersPerDay +
    audiochallenge.countSucсessAnswersPerDay) * 100 /
    (sprint.countAnswersPerDay + audiochallenge.countAnswersPerDay));

  const percentSprint = Math.round(sprint.countSucсessAnswersPerDay * 100 / sprint.countAnswersPerDay);
  const percentAudio = Math.round(audiochallenge.countSucсessAnswersPerDay * 100 / audiochallenge.countAnswersPerDay);

  const statData: StatDatasType[] = [
    {
      key: 'stat0',
      title: 'Общая',
      list: [
        {key: 'item0', text: 'Количество новых слов', data: `${countNewWordsPerDay}`},
        {key: 'item1', text: 'Процент правильных ответов', data: `${percent || 0}%`},
        {key: 'item2', text: 'Количество изученных слов', data: `${countLearnedWordsPerDay}`}
      ]
    },
    {
      key: 'stat1',
      title: 'Спринт',
      list: [
        {key: 'item3', text: 'Количество новых слов', data: `${sprint.countNewWordsPerDay}`},
        {key: 'item4', text: 'Процент правильных ответов', data: `${percentSprint || 0}%`},
        {key: 'item5', text:'Самая длинная серия правильных ответов',
          data: `${sprint.seriesSucсessAnswersPerDay}`}
      ]
    },
    {
      key: 'stat2',
      title: 'Аудиовызов',
      list: [
        {key: 'item6', text: 'Количество новых слов', data: `${audiochallenge.countNewWordsPerDay}`},
        {key: 'item7', text: 'Процент правильных ответов', data: `${percentAudio || 0}%`},
        {key: 'item8', text: 'Самая длинная серия правильных ответов',
          data: `${audiochallenge.seriesSucсessAnswersPerDay}`}
      ]
    }
  ];
        
  return (
    <ul className={cn(styles.statistics)}>
      {statData.map(li => <StatContainer key={li.key} title={li.title} list={li.list} />)}
    </ul>
  );
};

export default UserStat;
