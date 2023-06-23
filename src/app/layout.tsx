import { Header } from "components/header";
import "../styles/globals.css";
import { Inter } from "next/font/google";
// font causando memory leak eu acho

export const metadata = {
  title: "Ronaldo Monteiro",
  description: "Meu Portfolio",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <html
          lang="en"
          className={`relative min-h-screen w-full font-inter  `}
        >
          <body className="relative min-h-screen  w-full text-text_dark ">
            <svg className="pointer-events-none absolute">
              <filter id="noiseFilter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.55"
                  stitchTiles="stitch"
                />
              </filter>
            </svg>
            <Header />
            {children}
          </body>
        </html>
    </>
  );
}
