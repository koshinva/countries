export type TLevel = 'hard' | 'medium' | 'easy';

export type TTypeGame = 'capital' | 'flag';

export type TCountQuestion = 5 | 10;

export type TStatus = 'start' | 'progress' | 'finish';

export interface ISettingQuiz {
  countQuestion: TCountQuestion;
  type: TTypeGame;
  level: TLevel;
}

export type TQuestion = {
  question: string;
  answers: string[];
  rightAnswer: string;
};

export interface IQuizInitialState {
  settings: ISettingQuiz;
  status: TStatus;
  questions: TQuestion[];
}

export type TChangeSetting = 'increase' | 'decrease';