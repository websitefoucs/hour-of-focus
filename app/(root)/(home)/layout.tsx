import React from "react";

interface HomeLayoutProps {
  children: React.ReactNode;
  testimonies: React.ReactNode;
  articles: React.ReactNode;
}

export default function HomeLayout({
  children,
  testimonies,
  articles,
}: Readonly<HomeLayoutProps>) {
  return (
    <section className="w-full justify-items-center grid gap-20 mobile:gap-10 home-layout">
      {children}
      {testimonies}
      {articles}
    </section>
  );
}
