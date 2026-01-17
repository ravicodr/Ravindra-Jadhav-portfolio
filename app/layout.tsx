import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
  title: 'Ravindra Jadhav - Full Stack MERN Developer',
  description: 'Portfolio of Ravindra Jadhav, a Full Stack MERN Developer with 4+ years of experience building scalable web applications.',
  keywords: 'Full Stack Developer, MERN Stack, React, Node.js, MongoDB, Express, Portfolio',
  authors: [{ name: 'Ravindra Jadhav' }],
  openGraph: {
    title: 'Ravindra Jadhav - Full Stack MERN Developer',
    description: 'Portfolio showcasing 4+ years of full-stack development experience',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
