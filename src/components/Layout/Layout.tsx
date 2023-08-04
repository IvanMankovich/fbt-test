import { ReactNode } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

import './Layout.scss';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
