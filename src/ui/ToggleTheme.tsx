import { Icon } from '.';

export const ToggleTheme = () => {
  return (
    <button className="flex-between-center gap-2 p-2 rounded-full hover:shadow-lg transition-shadow" type="button">
      <Icon icon="BiMoon" />
      <span className="theme-text">Dark Mode</span>
    </button>
  );
};
