import "../styles/globals.css";

export const metadata = {
  title: "Garage Scheduler",
  description: "Garage door business calendar and scheduling app"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
