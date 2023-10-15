import { ISettingQuiz, TChangeSetting, TLevel } from 'types';

export const getRandomIndex = (arrLength: number): number => {
  return Math.floor(Math.random() * arrLength);
};

export const shuffleArray = <T>(arr: Array<T>): T[] => {
  const result = arr;
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export const getChangedIndex = (
  index: number,
  lengthArr: number,
  typeChange: TChangeSetting
): number => {
  if (index === lengthArr - 1 && typeChange === 'increase') return 0;
  if (index === 0 && typeChange === 'decrease') return lengthArr - 1;
  if (typeChange === 'decrease') return --index;
  return ++index;
};

export const LEVEL_INDEXES: Record<TLevel, number[]> = {
  easy: [0, 83],
  medium: [83, 166],
  hard: [166, 250],
};

export const SETTINGS_GAME: { [key in keyof ISettingQuiz]: ISettingQuiz[key][] } = {
  level: ['easy', 'medium', 'hard'],
  countQuestion: [5, 10],
  type: ['capital', 'flag'],
};
