import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Сторінка",
};

interface PageProps {
  params: {
    alias: string;
  };
}
export async function generateStaticParams() {
  return [{ alias: "product1" }, { alias: "product2" }];
}

const PageProducts = async ({ params }: PageProps) => {
  console.log(params.alias);

  return <div>Сторінка з </div>;
};

export default PageProducts;
