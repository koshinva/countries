import { useTypedSelector } from 'hooks/useTypedSelectors';
import { QuizSetting } from './QuizSetting';
import { useActions } from 'hooks/useActions';

export const QuizStart = () => {
  const { settings } = useTypedSelector((store) => store.quiz);
  const { setCountQuestion, setLevelQuiz, setTypeQuiz, changeStatusQuiz } = useActions();
  const { type, level, countQuestion } = settings;
  return (
    <div className="h-full grid place-content-center">
      <div className="w-[600px] max-w-full min-h-[400px] bg-element p-8 rounded-xl shadow-md theme-text">
        <h2 className="text-center font-semibold text-2xl mb-6">Game settings</h2>
        <div className="flex flex-col items-center gap-4 mb-4">
          <QuizSetting
            title="Count Questions"
            value={countQuestion}
            handleDecrease={() => setCountQuestion('decrease')}
            handleIncrease={() => setCountQuestion('increase')}
          />
          <QuizSetting
            title="Level"
            value={level}
            handleDecrease={() => setLevelQuiz('decrease')}
            handleIncrease={() => setLevelQuiz('increase')}
          />
          <QuizSetting
            title="Type Game"
            value={type}
            handleDecrease={() => setTypeQuiz()}
            handleIncrease={() => setTypeQuiz()}
          />
        </div>
        <button
          type="button"
          className="block py-4 px-12 border mt-6 mx-auto rounded-md theme-text-invert bg-element-invert hover:opacity-75 transition-opacity text-lg font-semibold"
          onClick={() => changeStatusQuiz('progress')}
        >
          Start Game
        </button>
      </div>
    </div>
  );
};
