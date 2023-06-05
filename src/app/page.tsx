import styles from "./page.module.css";
import Books from "./components/Books";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
  description: "fetching data for the books",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Books />
    </main>
  );
}
