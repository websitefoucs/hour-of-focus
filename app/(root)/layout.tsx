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
      <main className="w-full h-full bg-gradient-to-b ">{children}</main>
      <Footer />
    </>
  );
}
