import { Link } from 'react-router-dom';
import { ToggleTheme } from 'ui';

export const Header = () => {
  return (
    <header className="bg-element py-8 px-10">
      <div className="flex-between-center gap-4 flex-wrap h-full">
        <h1>
          <Link
            to="/"
            className="text-2xl theme-text font-extrabold hover:opacity-80 transition-opacity"
          >
            Where in the world?
          </Link>
        </h1>
        <div className='flex items-center gap-8'>
          <Link
            to="/quiz"
            className="theme-text font-bold hover:opacity-80 transition-opacity uppercase inline-block py-2 px-6 rounded-full border border-dashed border-gray-300"
          >
            Quiz
          </Link>
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
};
