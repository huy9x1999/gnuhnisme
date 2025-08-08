export default function NotFoundLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body style={{ background: "#f8f8f8" }}>
        {children}
      </body>
    </html>
  );
}
