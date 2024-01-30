import { FC } from 'react';
import { Icon } from '.';

interface ISortProps {
  title: string;
  children: React.ReactNode;
  open: boolean;
  setOpen: (state: boolean) => void;
}

export const SortWrapper: FC<ISortProps> = ({ children, title, open, setOpen }) => {
  return (
    <div className="relative">
      <div
        className="flex justify-between items-center gap-4 w-52 p-3 bg-element theme-text shadow-md rounded-lg relative cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium">{title}</span>
        <button
          className={`p-2 hover:opacity-75 transition-all duration-300 before:absolute before:inset-0 before:content-[''] ${
            open ? 'rotate-180' : ''
          }`}
          type="button"
        >
          <Icon icon="FaAngleDown" fill="gray" />
        </button>
      </div>
      <ul
        className={`absolute top-[105%] left-0 w-full bg-element theme-text shadow-md rounded-lg py-4 z-10 transition-all duration-300 ${
          open ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        {children}
      </ul>
    </div>
  );
};
