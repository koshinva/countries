import { FC } from 'react';
import { useTypedSelector } from 'hooks/useTypedSelectors';
import { QuizFinish, QuizGame, QuizStart } from '.';
import { TStatus } from 'types/quizSlice.types';


export const Quiz = () => {
  const STATUS_COMPONENT: Record<TStatus, FC> = {
    start: QuizStart,
    progress: QuizGame,
    finish: QuizFinish,
  };
  
  const { status } = useTypedSelector((store) => store.quiz);

  const Component = STATUS_COMPONENT[status];

  return <Component />;
};
