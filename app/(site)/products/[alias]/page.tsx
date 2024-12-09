import { Metadata } from "next";
import { getPage } from "@/api";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Сторінка",
};

interface PageProps {
  params: Promise<{
    alias: string;
  }>; // params тепер є Promise
}

const PageProducts = async ({ params }: PageProps) => {
  // Чекаємо на вирішення Promise params
  const resolvedParams = await params;

  // Тепер можемо безпечно працювати з resolvedParams
  const page = await getPage(resolvedParams.alias);

  if (!page) {
    notFound();
  }

  return <div>Сторінка з {page.title}</div>;
};

export default PageProducts;
