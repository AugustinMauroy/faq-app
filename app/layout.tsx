import { Kumbh_Sans } from 'next/font/google';
import type { FC, ReactNode } from 'react';
import '@/styles/global.scss';

export const metadata = {
  title: 'FAQ app',
  description: 'Frequently asked questions',
};

const font = Kumbh_Sans({
  subsets: ['latin'],
});

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => (
    <html lang="en">
      <body className={font.className}>
        {children}
        </body>
    </html>
);

export default RootLayout;
