import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    handleLocationChange();

    function handleLocationChange() {
      const currentPath = location.pathname;

      switch (currentPath) {
        case "/":
          document.title = "Home";
          break;

        case "/about":
          document.title = "About";
          break;

        case "/portfolio":
          document.title = "Portfolio";
          break;

        case "/contact":
          document.title = "Contact";
          break;

        default:
          document.title = "Page Not Found";
          break;
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
