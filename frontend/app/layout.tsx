import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Meet Gandhi — AI/ML & Full-Stack Engineer',
  description: 'Engineer building intelligent products, robust backend systems, and precise digital experiences.',
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
