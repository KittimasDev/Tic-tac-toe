
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CustomProvider } from './provider'
import StyledComponentsRegistry from '@/libs/styled-components/registry'
import { cookies } from 'next/headers'
import { get } from 'lodash'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/Header/Header'), {
  loading: () => <p>Loading...</p>,
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <CustomProvider>
        <StyledComponentsRegistry>
      <html lang="en">
            <head>
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
              />
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
              />
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
              />
            </head>
            <body className={inter.className}>
              <Header/>
              {children}
              <div>
              </div>
            </body>
          </html>
    </StyledComponentsRegistry>
      </CustomProvider>
  );
}
