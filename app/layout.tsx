import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const open_sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["hebrew"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "שעה של פוקוס",
  description: "מחברים בין ילידי מפונים למורים פרטים",
  keywords: [
    "שעה של פוקוס",
    "מורים פרטיים",
    "ילדים מפונים",
    "עזרה בלימודים",
    "שיעורים פרטיים בישראל",
  ],
  robots: "index, follow",
  openGraph: {
    title: "שעה של פוקוס | חיבור בין ילדים מפונים למורים פרטיים",
    description:
      "שעה של פוקוס - פלטפורמה המחברת בין ילדים מפונים למורים פרטיים. שיעורים פרטיים, עזרה בלימודים, תמיכה חינוכית.",
    url: "https://www.focushour.org.il/",
    siteName: "שעה של פוקוס",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "https://www.focushour.org.il/imgs/logo.svg",
        width: 1200,
        height: 630,
        alt: "שעה של פוקוס",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "שעה של פוקוס | חיבור בין ילדים מפונים למורים פרטיים",
    description: "פלטפורמה המחברת בין ילדים מפונים למורים פרטיים",
    images: ["https://www.focushour.org.il/imgs/logo.svg"],
  },
  alternates: {
    canonical: "https://www.focushour.org.il/",
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE,
  },
};

// JSON-LD data for Schema.org
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "שעה של פוקוס",
  description: "מחברים בין ילדי מפונים למורים פרטים",
  url: "https://www.focushour.org.il/",
  logo: "https://www.focushour.org.il/imgs/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <Script
          id="schema-org-organization"
          type="application/ld+json"
          strategy="beforeInteractive" // Load early for SEO benefits
        >
          {JSON.stringify(organizationSchema)}
        </Script>
      </head>
      <body
        className={`${open_sans.className} max-w-[100svw] antialiased text-normal relative`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
