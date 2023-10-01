import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '.';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
