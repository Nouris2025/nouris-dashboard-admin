import "./../globals.css";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative`}>
        <div className="h-screen max-w-sm bg-purple-600">{children}</div>
      </body>
    </html>
  );
}
