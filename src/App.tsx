import { HashRouter, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./layout/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
