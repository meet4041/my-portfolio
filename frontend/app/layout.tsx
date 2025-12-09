import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Meet Gandhi | Portfolio',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white selection:bg-purple-500/30">
        <Navbar />
        {/* Updated Padding:
           - pt-20 (80px) for mobile to clear the fixed mobile navbar
           - md:pt-24 (96px) for desktop to clear the larger desktop navbar
        */}
        <div className="pt-0 md:pt-5"> 
            {children}
        </div>
      </body>
    </html>
  );
}