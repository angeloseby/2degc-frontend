import "./globals.css";
import Script from "next/script";
import Spinner from "@/components/Spinner";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchAPI } from "@/lib/api";

export const metadata = {
  title: "2degc - Renewable Energy Solutions",
  description: "Pioneers Of Solar And Renewable Energy",
};


export default async function RootLayout({ children }) {
  // Fetch global data from Strapi
  let globalData = null;
  try {
    const globalRes = await fetchAPI("/global", { 
      populate: {
        Navbar: {
          populate: "*"
        },
        Footer: {
          populate: "*"
        }
      } 
    });
    globalData = globalRes?.data || null;
  } catch (error) {
    console.error("Failed to fetch global data:", error);
  }

  const navbarData = globalData?.Navbar || null;
  const footerData = globalData?.Footer || null;
  const copyright = globalData?.Copyright || null;

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>

        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto:wght@500;700;900&display=swap" rel="stylesheet" />

        {/* Icon Font Stylesheet */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

        {/* Libraries Stylesheet */}
        <link href="/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />

        {/* Customized Bootstrap Stylesheet */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />

        {/* Template Stylesheet */}
        <link href="/css/style.css" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <Spinner />
        <Topbar data={footerData} />

        <Navbar data={navbarData} />
        {children}
        <Footer data={footerData} copyright={copyright} />


        {/* JavaScript Libraries */}
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/lib/wow/wow.min.js" strategy="beforeInteractive" />
        <Script src="/lib/easing/easing.min.js" strategy="beforeInteractive" />
        <Script src="/lib/waypoints/waypoints.min.js" strategy="beforeInteractive" />
        <Script src="/lib/counterup/counterup.min.js" strategy="beforeInteractive" />
        <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="beforeInteractive" />
        <Script src="/lib/isotope/isotope.pkgd.min.js" strategy="beforeInteractive" />
        <Script src="/lib/lightbox/js/lightbox.min.js" strategy="beforeInteractive" />

        {/* Template JavaScript */}
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
