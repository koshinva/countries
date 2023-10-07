import { createSlice } from '@reduxjs/toolkit';
import { ICountryData } from 'types/countryApi.types';
import { IQuizInitialState, TChangeSetting, TStatus } from 'types';
import { SETTINGS_GAME, LEVEL_INDEXES, getRandomIndex, shuffleArray, getChangedIndex } from 'utils';

const initialState: IQuizInitialState = {
  settings: {
    countQuestion: SETTINGS_GAME.countQuestion[0],
    type: SETTINGS_GAME.type[0],
    level: SETTINGS_GAME.level[0],
  },
  status: 'start',
  questions: [],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setTypeQuiz(state) {
      state.settings.type = state.settings.type === 'capital' ? 'flag' : 'capital';
    },
    setCountQuestion(state, { payload }: { payload: TChangeSetting }) {
      const arrSettings = SETTINGS_GAME.countQuestion;
      const newIndex = getChangedIndex(
        arrSettings.indexOf(state.settings.countQuestion),
        arrSettings.length,
        payload
      );
      state.settings.countQuestion = arrSettings[newIndex];
    },
    setLevelQuiz(state, { payload }: { payload: TChangeSetting }) {
      const arrSettings = SETTINGS_GAME.level;
      const newIndex = getChangedIndex(
        arrSettings.indexOf(state.settings.level),
        arrSettings.length,
        payload
      );
      state.settings.level = arrSettings[newIndex];
    },
    changeStatusQuiz(state, { payload }: { payload: TStatus }) {
      state.status = payload;
    },
    setQuestions(state, { payload }: { payload: ICountryData[] }) {
      const [start, end] = LEVEL_INDEXES[state.settings.level];
      const { countQuestion, type } = state.settings;

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
        const answers: string[] = shuffleArray(i).map((e) => countries[e].country);

        return { question, rightAnswer, answers };
      });
    },
  },
});

export const { setQuestions, changeStatusQuiz, setCountQuestion, setLevelQuiz, setTypeQuiz } =
  quizSlice.actions;

export default quizSlice.reducer;
