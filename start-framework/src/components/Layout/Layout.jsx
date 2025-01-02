import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />

      <main className="container">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
