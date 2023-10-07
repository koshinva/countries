import React, { FC } from 'react';

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
      <div className="w-[600px] max-w-full min-h-[400px] bg-element p-8 rounded-xl shadow-md theme-text">
        <h2 className="text-center font-semibold text-2xl mb-6">{title}</h2>
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
