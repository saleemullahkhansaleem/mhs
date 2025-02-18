import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import "@fontsource/poppins";
import {
  AboutUs,
  BlogDetailPage,
  BlogsPage,
  Careers,
  ContactUs,
  CustomSolutions,
  EcommerceSolutions,
  Home,
  MobileAppDevelopment,
  NewsDetailPage,
  NotFound,
  PortalManagementSystems,
  PortfolioPage,
  PrivacyPolicy,
  ServicesLayout,
  ServicesPage,
  SoftwareConsultancy,
  TermsOfServices,
  WebDevelopment,
} from "./pages";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "services/",
        element: <ServicesLayout />,
        children: [
          {
            path: "",
            element: <ServicesPage />,
          },
          {
            path: "web-development",
            element: <WebDevelopment />,
          },
          {
            path: "mobile-app-development",
            element: <MobileAppDevelopment />,
          },
          {
            path: "portal-management-systems",
            element: <PortalManagementSystems />,
          },
          {
            path: "software-consultancy",
            element: <SoftwareConsultancy />,
          },
          {
            path: "e-commerce-solutions",
            element: <EcommerceSolutions />,
          },
          {
            path: "custom-solutions",
            element: <CustomSolutions />,
          },
        ],
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "blogs",
        element: <BlogsPage />,
      },
      {
        path: "blogs/:slug",
        element: <BlogDetailPage />,
      },
      {
        path: "news/:slug",
        element: <NewsDetailPage />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "terms-of-services",
        element: <TermsOfServices />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
