import Link from 'next/link';
import './globals.css';
import styles from './layout.module.css';
import { Lato, Abel } from 'next/font/google';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  fallback: ['sans-serif'],
  adjustFontFallback: true,
});

const abel = Abel({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-abel',
  fallback: ['sans-serif'],
  adjustFontFallback: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${lato.variable} ${abel.variable}`}>
        <main className={styles['wrapper-main']}>
          <header className={styles['header']}>
            <Link href='/' className={styles['header-title']}>
              Movies
            </Link>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
