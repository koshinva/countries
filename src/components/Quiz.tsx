import { useTypedSelector } from 'hooks/useTypedSelectors';
import { QuizFinish, QuizGame, QuizStart } from '.';

export const Quiz = () => {
  const { status } = useTypedSelector((store) => store.quiz);

  if (status === 'start') return <QuizStart />;
  if (status === 'progress') return <QuizGame />;
  if (status === 'finish') return <QuizFinish />;
};
