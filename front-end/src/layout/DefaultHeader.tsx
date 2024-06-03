import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';

export function DefaultHeader() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
