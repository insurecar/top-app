import { Header, Footer, Sidebar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div>
          <Sidebar />
          <div>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
