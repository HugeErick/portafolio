import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/Toaster";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ericks Portafolio",
  description: "made with nextjs and tailwindcss",
};

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("dark:bg-zinc-800 bg-zinc-50 dark:text-white text-slate-900 antialiased", inter.className)}
      >
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          {authModal}
          <div className="container max-w-7xl mx-auto h-full pt-20">
            {children}
          </div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
