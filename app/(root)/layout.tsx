import AccessibilityIndex from "@/components/Accessibility/AccessibilityIndex";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AccessibilityIndex />
      <Header />
      <main className="w-full bg-gradient-to-b from-white-50 to-white-0">{children}</main>
      <Footer />
    </>
  );
}
