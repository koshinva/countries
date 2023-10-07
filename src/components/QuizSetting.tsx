import { FC } from 'react';
import { Icon } from 'ui/Icon';

interface IProps {
  title: string;
  value: string | number;
  handleIncrease: () => void;
  handleDecrease: () => void;
}

export const QuizSetting: FC<IProps> = ({ title, value, handleIncrease, handleDecrease }) => {
  return (
    <div className="w-full">
      <p className="font-semibold text-lg mb-2 text-center">{title}</p>
      <div className="flex justify-center items-center gap-5">
        <button
          className="p-2 hover:opacity-80 transition-opacity duration-200"
          type="button"
          onClick={handleDecrease}
        >
          <Icon icon="FaAngleLeft" fill="gray" />
        </button>
        <p className="w-1/4 text-center">{value}</p>
        <button
          className="p-2 hover:opacity-80 transition-opacity duration-200"
          type="button"
          onClick={handleIncrease}
        >
          <Icon icon="FaAngleRight" fill="gray" />
        </button>
      </div>
    </div>
  );
};
