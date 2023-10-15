import { useState } from 'react';
import { useTypedSelector } from 'hooks/useTypedSelectors';
import { QuizLayout, QuizQuestion } from '.';
import { useActions } from 'hooks/useActions';

export const QuizGame = () => {
  const [selectAnswer, setSelectAnswer] = useState<null | string>(null);

  const { currentQuestion, currentQuestionId, questions, countryWithErrors, settings } = useTypedSelector(
    (store) => store.quiz
  );
  const { changeStatusQuiz, updateCurrentQuestion } = useActions();

  const checkLastQuestion = () => {
    return questions.length === currentQuestionId;
  };

  const handleButtonNext = () => {
    if (selectAnswer === null) return;

    setSelectAnswer(null);

    if (!checkLastQuestion()) {
      updateCurrentQuestion();
    }

    if (checkLastQuestion()) {
      changeStatusQuiz('finish');
    }
  };

  const handleClickAnswer = (answer: string) => {
    if (selectAnswer !== null) return;
    setSelectAnswer(answer);
    if (currentQuestion && answer !== currentQuestion?.rightAnswer) {
      countryWithErrors.push(currentQuestion.rightAnswer);
    }
  };

  const addClassesToAnswer = (answer: string): string => {
    if (selectAnswer === null || currentQuestion === null) return '';
    if (answer === currentQuestion.rightAnswer) return 'bg-quiz-answer_right';
    if (selectAnswer === answer && answer !== currentQuestion.rightAnswer)
      return 'bg-quiz-answer_error';
    return '';
  };

  return (
    <QuizLayout
      title={<QuizQuestion typeGame={settings.type} question={currentQuestion?.question || ''} />}
      buttonTitle={checkLastQuestion() ? 'Finish Game' : 'Next Question'}
      handleButtonClick={handleButtonNext}
      buttonDisabled={selectAnswer === null}
    >
      {!currentQuestion ? (
        'Something went wrong...'
      ) : (
        <ul className="flex flex-col justify-center items-center gap-4 w-full">
          {currentQuestion.answers.map((a) => (
            <li className="w-full" key={a}>
              <button
                className={`bg-quiz-answer text-quiz-answer w-full p-4 text-lg font-semibold rounded-md shadow-sm hover:opacity-75 transition-opacity ${addClassesToAnswer(
                  a
                )}`}
                type="button"
                onClick={() => handleClickAnswer(a)}
              >
                {a}
              </button>
            </li>
          ))}
        </ul>
      )}
    </QuizLayout>
  );
};
