//Components
import FaqIndex from "@/components/Faq/FaqIndex";
//Actions
import { getFaqs } from "@/lib/actions/faqs";
//Types
import { Metadata } from "next";
//React
import { cache } from "react";
/**
 * Metadata for the FAQ page.
 *
 * @type {Metadata}
 * @property {string} title - The title of the page, including the current year in Hebrew.
 * @property {string} description - The description of the page.
 * @property {Object} robots - Configuration for search engine robots.
 * @property {boolean} robots.follow - Whether robots should follow links on the page.
 * @property {boolean} robots.index - Whether robots should index the page.
 * @property {Object} robots.googleBot - Specific configuration for Googlebot.
 * @property {boolean} robots.googleBot.index - Whether Googlebot should index the page.
 * @property {boolean} robots.googleBot.follow - Whether Googlebot should follow links on the page.
 */
export const metadata: Metadata = {
  title: `שאלות נפוצות - עודכן ב:${new Date().getFullYear()}`,
  description: "שאלות נפוצות של מתנדבים",
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
/**
 * Cached version of the getFaqs function.
 *
 * @function cachedGetFaqs
 * @param {Object} params - Parameters for fetching FAQs.
 * @param {string} params.faqType - The type of FAQs to fetch.
 * @param {boolean} params.isFull - Whether to fetch the full FAQs.
 * @returns {Promise<Array>} - A promise that resolves to an array of FAQs.
 */
const cachedGetFaqs = cache(getFaqs);

/**
 * The Volunteers FAQ page component.
 *
 * @async
 * @function FaqsPage
 * @returns {Promise<JSX.Element>} - A promise that resolves to the FAQ page component.
 */
export default async function FaqsPage() {
  const faqs = await cachedGetFaqs({ faqType: "volunteers", isFull: false });
  return <FaqIndex type={"volunteers"} faqs={faqs} />;
}
