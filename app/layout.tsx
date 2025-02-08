'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";
import theme from "@/styles/theme";
import { Provider } from "react-redux";
import {store} from '../store/store';
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Head>
          <link rel="icon" type="image/png" href="/images/favicon2.png" />
        </Head> 
      </head>
      <body className={inter.className} style={{padding: "none  "}}>
        <Provider store={store}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </AppRouterCacheProvider>
        </Provider>
        
      </body>
    </html>
  );
}
