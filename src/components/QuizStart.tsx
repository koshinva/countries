import { useTypedSelector } from 'hooks/useTypedSelectors';
import { useActions } from 'hooks/useActions';
import { QuizLayout, QuizSetting } from '.';

export const QuizStart = () => {
  const { settings } = useTypedSelector((store) => store.quiz);
  const { setCountQuestion, setLevelQuiz, setTypeQuiz, changeStatusQuiz } = useActions();
  const { type, level, countQuestion } = settings;
  return (
    <QuizLayout
      title="Game settings"
      buttonTitle="Start Game"
      handleButtonClick={() => changeStatusQuiz('progress')}
    >
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
    </QuizLayout>
  );
};