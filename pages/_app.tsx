import { MainLayout } from "../components/mainLayout";
import "../styles/app.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
