import { Icon } from 'ui/Icon';
import { QuizLayout } from '.';
import { useTypedSelector } from 'hooks/useTypedSelectors';
import { Link } from 'react-router-dom';
import { generateSlug } from 'utils/functions';
import { useActions } from 'hooks/useActions';

const QuizTitle = () => {
  return (
    <div className="flex flex-col items-center gap-4 mb-4">
      <Icon icon="BiSolidTrophy" className="w-20 h-20" fill="gold" />
      <h2 className="font-bold text-3xl uppercase">Results</h2>
    </div>
  );
};
export const QuizFinish = () => {
  const { settings, countryWithErrors } = useTypedSelector((store) => store.quiz);
  const { resetQuiz } = useActions();

  const getRightAnswers = () => {
    return settings.countQuestion - countryWithErrors.length;
  };

  const handleEndGame = () => {
    resetQuiz();
  };

  return (
    <QuizLayout title={<QuizTitle />} buttonTitle="Try Again" handleButtonClick={handleEndGame}>
      <div className="flex flex-col items-center gap-4 mb-4">
        <p className="text-xl">
          You got <span className="text-4xl font-bold text-yellow-400">{getRightAnswers()}</span>{' '}
          correct answers
        </p>
        <p className="text-xl">You can repeat: </p>
        {countryWithErrors.length > 0 ? (
          <ul>
            {countryWithErrors.map((c, index) => (
              <li key={c} className="inline">
                <Link
                  to={`/country/${generateSlug(c)}`}
                  target="_blank"
                  className="hover:text-yellow-500 transition-colors"
                >
                  {c}
                </Link>
                {index === countryWithErrors.length - 1 ? '' : ', '}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </QuizLayout>
  );
};
