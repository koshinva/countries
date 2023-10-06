import { useTypedSelector } from 'hooks/useTypedSelectors';
import { Icon } from 'ui/Icon';

export const QuizStart = () => {
  const { settings } = useTypedSelector((store) => store.quiz);
  const { type, level, countQuestion } = settings;
  return (
    <div className="h-full grid place-content-center">
      <div className="w-[600px] max-w-full min-h-[400px] bg-element p-8 rounded-xl shadow-md theme-text">
        <h2 className="text-center font-semibold text-2xl mb-6">Game settings</h2>
        <div className="flex flex-col items-center gap-4">
          <div className="">
            <p className="font-semibold text-lg mb-2">Count Questions</p>
            <div className="flex justify-center items-center gap-5">
              <button className="p-2" type="button">
                <Icon icon="FaAngleLeft" />
              </button>
              <p>{countQuestion}</p>
              <button className="p-2" type="button">
                <Icon icon="FaAngleRight" />
              </button>
            </div>
          </div>
          <div className="">
            <p className="font-semibold text-lg mb-2">Level</p>
            <div className="flex justify-center items-center gap-5">
              <button className="p-2" type="button">
                <Icon icon="FaAngleLeft" />
              </button>
              <p>{level}</p>
              <button className="p-2" type="button">
                <Icon icon="FaAngleRight" />
              </button>
            </div>
          </div>
          <div className="">
            <p className="font-semibold text-lg mb-2">Type Game</p>
            <div className="flex justify-center items-center gap-5">
              <button className="p-2" type="button">
                <Icon icon="FaAngleLeft" />
              </button>
              <p>{type}</p>
              <button className="p-2" type="button">
                <Icon icon="FaAngleRight" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
