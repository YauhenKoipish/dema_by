import Head from "next/head";
import React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="wrapper">
      <div className="content">
        <Head>
          <title>Благоустройство в беларуси</title>
          <meta name="keywords" content=" any keywords" charSet="utf-8" />
        </Head>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
