import { Prompt } from "next/font/google"
import type { Metadata } from "next";
import './globals.css'
import { Asite } from "./components/Aside";
import { SearchForm } from "./components/SearchForm";

export const metadata: Metadata = {
  title: "code connect",
  description: "Uma rede social para devs",
};

const prompt = Prompt({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className='app-container'>
          <div>
            <Asite />
          </div>
          <div className='main-content'>
            <SearchForm />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
