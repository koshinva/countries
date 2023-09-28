import { ToggleTheme } from 'ui';

export const Header = () => {
  return (
    <header className="bg-element py-8 px-10">
      <div className="flex-between-center h-full">
        <h1>
          <a
            href="/"
            className="text-2xl theme-text font-extrabold hover:opacity-80 transition-opacity"
          >
            Where in the world?
          </a>
        </h1>
        <ToggleTheme  />
      </div>
    </header>
  );
};
