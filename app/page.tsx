import { Metadata } from "next";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Computed",
  };
}

export default function Home() {
  return <main className={styles.main}>Головна сторінка</main>;
}
