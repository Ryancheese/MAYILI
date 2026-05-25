import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollTo) return;

    const timer = window.setTimeout(() => {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState({}, "");
    }, 80);

    return () => window.clearTimeout(timer);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
