import Link from "next/link";
import { MainLayout } from "../components/mainLayout";

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1 className={"error"}>Error 404 </h1>
      <p>
        Please
        <Link href="/">
          <a> go back to safety</a>
        </Link>
      </p>
    </MainLayout>
  );
}
