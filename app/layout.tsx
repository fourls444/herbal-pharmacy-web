import "./globals.css";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

export const metadata = {
  title: "วิทยาลัยเภสัชพันธุศาสตร์และเภสัชกรรมแม่นยำ",
  description: "pharmacogenomics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}