import { Link } from 'react-router-dom';
import { ToggleTheme } from 'ui';

export const Header = () => {
  return (
    <header className="bg-element py-8 px-10">
      <div className="flex-between-center h-full">
        <h1>
          <Link
            to="/"
            className="text-2xl theme-text font-extrabold hover:opacity-80 transition-opacity"
          >
            Where in the world?
          </Link>
        </h1>
        <ToggleTheme  />
      </div>
    </header>
  );
};
