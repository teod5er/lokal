import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Osobni Blog',
  description: 'Moj osobni kutak na internetu.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <nav className="navbar">
          <div className="container">
            <Link href="/" className="nav-brand">
              Osobni Blog.
            </Link>
          </div>
        </nav>
        <main>
          {children}
        </main>
        <footer className="footer">
          <div className="container">
            &copy; {new Date().getFullYear()} Osobni Blog. Sva prava pridržana.
          </div>
        </footer>
      </body>
    </html>
  );
}
