import React, { FC } from 'react';
import { Icon } from 'ui/Icon';

interface IProps {
  title: string;
  buttonTitle: string;
  handleButtonClick: () => void;
  children: React.ReactNode;
  buttonDisabled?: boolean;
}

export const QuizLayout: FC<IProps> = ({
  title,
  buttonTitle,
  handleButtonClick,
  children,
  buttonDisabled = false,
}) => {
  return (
    <div className="h-full grid place-content-center">
      
      <h2 className='uppercase text-4xl font-bold  text-blue-950 dark:text-blue-400 mb-2'>Country Quiz</h2>
      <div className="w-[600px] max-w-full min-h-[400px] bg-element p-8 rounded-xl shadow-md theme-text relative">
        <Icon icon='FcGlobe' className='absolute w-40 h-40 -top-32 right-4'/>
        <h3 className="text-center font-bold text-2xl mb-6">{title}</h3>
        {children}
        <button
          type="button"
          className={`block py-4 px-12 border mt-6 mx-auto rounded-md theme-text-invert bg-element-invert hover:opacity-75 transition-opacity text-lg font-semibold ${
            buttonDisabled ? 'cursor-auto opacity-60 hover:opacity-60' : ''
          }`}
          disabled={buttonDisabled}
          onClick={handleButtonClick}
        >
          {buttonTitle}
        </button>
      </div>
    </div>
  );
};
