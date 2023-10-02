import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '.';

export const Layout: FC = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='flex-1'>
        <Outlet />
      </main>
    </div>
  );
};
