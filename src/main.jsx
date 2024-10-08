import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import "@fontsource/poppins";
import {
  AboutUs,
  BlogsPage,
  Careers,
  ContactUs,
  Home,
  NotFound,
  PortfolioPage,
  PrivacyPolicy,
  ServicesPage,
  TermsOfServices,
  WebDevelopment,
} from "./pages";

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
        element: <ServicesPage />,
        children: [
          {
            path: "web-dev",
            element: <WebDevelopment />,
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
    <RouterProvider router={router} />
  </StrictMode>
);
