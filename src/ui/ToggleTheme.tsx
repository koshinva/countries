import { useActions } from 'hooks/useActions';
import { Icon } from '.';
import { useTypedSelector } from 'hooks/useTypedSelectors';

export const ToggleTheme = () => {
  const { toggleTheme } = useActions();
  const { theme } = useTypedSelector((store) => store.app);

  const themeLight = theme === 'light';

  return (
    <button
      onClick={() => toggleTheme()}
      className="flex-between-center gap-2 p-2 rounded-full hover:shadow-lg transition-shadow"
      type="button"
    >
      {themeLight ? <Icon icon="BiSun" /> : <Icon icon="BiMoon" fill='white' />}
      <span className="theme-text">{themeLight ? 'Light' : 'Dark'} Mode</span>
    </button>
  );
};
