import './globals.css';

export const metadata = {
  title: '.andy-weaver',
  description:
    'Website for Andy Weaver, ACAS actuary, predictive modeler, developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={``}>
      <body>{children}</body>
    </html>
  );
}
