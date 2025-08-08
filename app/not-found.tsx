// app/not-found.tsx
export default function NotFound() {
  return (
    <html>
      <body>
        <div className="font-roboto flex flex-col items-center justify-center" style={{ padding: "2rem", textAlign: "center" }}>
          <h1>404 - Page Not Found</h1>
          <p>The page you are  looking for does not exist.</p>
        </div>
      </body>
    </html>
  );
}
