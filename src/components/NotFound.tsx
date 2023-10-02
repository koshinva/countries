import { useNavigate } from 'react-router-dom';
import { Icon } from 'ui/Icon';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="grid place-content-center h-full">
      <div className="flex gap-8 items-center relative">

        <div className="text-9xl font-bold text-red-600 dark:text-red-400">
          <span>4</span>
          <span className="text-black dark:text-white">0</span>
          <span>4</span>
        </div>
        <div className="h-full flex flex-col gap-2 justify-between text-4xl font-semibold text-black dark:text-white">
          <p className="underline underline-offset-8 decoration-wavy decoration-red-600 dark:decoration-red-400">
            oops
          </p>
          <p className="text-red-600 dark:text-red-400">something</p>
          <p>went wrong</p>
        </div>

        <button type="button" className="absolute -top-8 -right-8 flex gap-2 items-center theme-text-invert bg-element-invert px-4 py-2 rounded-lg hover:opacity-75 transition-opacity" onClick={() => navigate('/')}>
          <Icon icon="HiOutlineArrowNarrowLeft" />
          on main
        </button>

      </div>
    </div>
  );
};
