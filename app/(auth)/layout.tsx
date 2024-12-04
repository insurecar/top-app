export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>Авторизація</div>
        {children}
      </body>
    </html>
  );
}
