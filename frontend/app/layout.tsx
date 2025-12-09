// frontend/app/layout.tsx
import './globals.css';
import Navbar from '@/components/Navbar';
// ... other imports

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <Navbar />
        <div className="pt-10"> {/* Padding top to push content below fixed Navbar */}
            {children}
        </div>
      </body>
    </html>
  );
}