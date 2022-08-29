type TOptions = {
  chapter: string;
  color: string;
  group: number;
}

export const options: TOptions[] = [
  {
    chapter: '1 раздел',
    color: 'red',
    group: 0,
  },
  {
    chapter: '2 раздел',
    color: 'green',
    group: 1,
  },
  {
    chapter: '3 раздел',
    color: 'purple',
    group: 2,
  },
  {
    chapter: '4 раздел',
    color: 'orange',
    group: 3,
  },
  {
    chapter: '5 раздел',
    color: 'yellow',
    group: 4,
  },
  {
    chapter: '6 раздел',
    color: 'plum',
    group: 5,
  },
];

export const randomWord1 = Math.floor(Math.random() * (20 - 0) + 0);
export const randomWord2 = Math.floor(Math.random() * (20 - 0) + 0);
export const randomPage = Math.floor(Math.random() * (30 - 1) + 1);
export const randomNumber = Math.round(Math.random() * (1 - 0) + 0);