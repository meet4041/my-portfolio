import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Meet Gandhi — AI/ML & Full-Stack Engineer',
  description: 'AI/ML Engineer at BOSC Tech Labs working on computer vision, backend systems, and useful digital products.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--color-bg)] text-[var(--color-text)]">
        <Navbar />
        <div className="pt-20 md:pt-24">
          {children}
        </div>
      </body>
    </html>
  );
}
