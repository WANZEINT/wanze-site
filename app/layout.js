export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ margin: 0, background: "#000", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
