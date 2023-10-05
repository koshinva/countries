import { createSlice } from '@reduxjs/toolkit';
import { ICountryData } from 'types/countryApi.types';

const getRandomIndex = (arrLength: number): number => {
  return Math.floor(Math.random() * arrLength)
}

const shuffleArray = <T>(arr: Array<T>): T[] => {
  const result = arr;
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const levelIndexes: Record<TLevel, number[]> = {
  easy: [0, 83],
  medium: [83, 166],
  hard: [166, 250],
};

type TLevel = 'hard' | 'medium' | 'easy';

interface ISettingQuiz {
  countQuestion: 5 | 10;
  type: 'capital' | 'flag';
  level: TLevel;
}

type TStatus = 'start' | 'progress' | 'finish'; 

type TQuestion = {
  question: string;
  answers: string[];
  rightAnswer: string;
};

interface IQuizInitialState {
  settings: ISettingQuiz;
  status: TStatus;
  questions: TQuestion[];
}

const initialState: IQuizInitialState = {
  settings: {
    countQuestion: 5,
    type: 'capital',
    level: 'easy',
  },
  status: 'start',
  questions: [],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setSettings(state, { payload }: { payload: ISettingQuiz }) {
      state.settings.countQuestion = payload.countQuestion;
      state.settings.type = payload.type;
      state.settings.level = payload.level;
    },
    changeStatus(state, { payload }: { payload: TStatus }) {
      state.status = payload;
    },
    setQuestions(state, { payload }: { payload: ICountryData[] }) {

      const [start, end] = levelIndexes[state.settings.level];
      const {countQuestion, type} = state.settings;

      const countries = payload
        .slice(start, end)
        .map((c) => ({ country: c.name, capital: c.capital, flag: c.image }));

      const countCountries = countries.length;

      if (!countCountries) return;

      const randomIndexArray: number[][] = [];

      while (randomIndexArray.length < countQuestion) {
        const randomIdx = getRandomIndex(countCountries);
        if (randomIndexArray.filter((i) => i[0] === randomIdx).length) {
          continue;
        }
        randomIndexArray.push([randomIdx]);
      }
      
      for (let i = 0; i < randomIndexArray.length; i++) {
        while (randomIndexArray[i].length < 4) {
          const randomIdx = getRandomIndex(countCountries);
          if (randomIndexArray[i].includes(randomIdx)) {
            continue;
          }
          randomIndexArray[i].push(randomIdx);
        }
      }

      state.questions = randomIndexArray.map((i) => {
        const question: string = countries[i[0]][type];
        const rightAnswer: string = countries[i[0]].country;
        const answers: string[] = shuffleArray(i).map(e => countries[e].country);

        return {question, rightAnswer, answers};
      })
    },
  },
});

export const { setQuestions, setSettings, changeStatus } = quizSlice.actions;

export default quizSlice.reducer;

