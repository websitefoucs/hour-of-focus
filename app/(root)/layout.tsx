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
      <main className="w-full">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
