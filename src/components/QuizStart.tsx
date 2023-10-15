import { useTypedSelector } from 'hooks/useTypedSelectors';
import { useActions } from 'hooks/useActions';
import { QuizLayout, QuizSetting } from '.';

const QuizTitle = () => {
  return <h3 className="text-center font-bold text-2xl mb-6 flex-1">Game settings</h3>;
}
export const QuizStart = () => {
  const { settings } = useTypedSelector((store) => store.quiz);
  const { countries } = useTypedSelector((store) => store.countries);
  const { setCountQuestion, setLevelQuiz, setTypeQuiz, changeStatusQuiz, setQuestions } = useActions();
  const { type, level, countQuestion } = settings;

  const handleStartGame = () => {
    changeStatusQuiz('progress');
    setQuestions(countries);
  }

  return (
    <QuizLayout title={<QuizTitle />} buttonTitle="Start Game" handleButtonClick={handleStartGame}>
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