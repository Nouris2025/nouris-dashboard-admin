import "./../globals.css";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative`}>
        <div className="h-screen bg-background max-lg:max-w-sm lg:w-full">{children}</div>
      </body>
    </html>
  );
}
