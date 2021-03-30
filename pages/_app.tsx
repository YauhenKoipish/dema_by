import type { AppProps } from "next/app";
import { MainLayout } from "../components/MainLayout";
import "../styles/app.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
