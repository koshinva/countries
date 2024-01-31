import { FC } from 'react';
import { TTypeGame } from 'types/quizSlice.types';

interface IProps {
  typeGame: TTypeGame;
  question: string;
}

export const QuizQuestion: FC<IProps> = ({ typeGame, question }) => {
  if (typeGame === 'capital')
    return (
      <h3 className="font-semibold text-md sm:text-xl mb-3 sm:mb-6">
        <strong className="text-lg sm:text-2xl">{question}</strong> is the capital of which country?
      </h3>
    );
  if (typeGame === 'flag')
    return (
      <div className="flex flex-wrap items-center gap-6 mb-6">
        <img src={question} alt="country flag" className="w-40 self-start" />
        <h3 className="basis-full sm:basis-auto font-semibold text-xl flex-1">What country's flag is in the picture</h3>
      </div>
    );
};
