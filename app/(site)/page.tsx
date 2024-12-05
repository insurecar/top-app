import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Computed",
  };
}

export default function Home() {
  return <>Головна сторінкаsdf</>;
}
