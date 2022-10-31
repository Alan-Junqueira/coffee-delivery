import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { DefaultLayoutContainer } from './styled';

export const DefaultLayout = () => {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  );
};
