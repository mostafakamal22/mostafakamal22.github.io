import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Navigation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    function handleScroll() {
      const navbar = document.querySelector(".navbar");
      const isNavbarContainsPadding = navbar.classList.contains("py-4");

      if (window.scrollY > 0 && isNavbarContainsPadding) {
        navbar.classList.remove("py-4");
        return;
      }

      if (window.scrollY === 0 && !isNavbarContainsPadding) {
        navbar.classList.add("py-4");
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" data-bs-theme="dark" className="py-4 fixed-top">
      <Container>
        <Link to="/" className="navbar-brand fs-1 fw-bold text-white">
          Start Framework
        </Link>

        <Navbar.Toggle
          color="white"
          aria-controls={`offcanvasNavbar-expand-lg`}
          onClick={handleShow}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
          data-bs-theme="dark"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header className="text-bg-dark" closeButton />

          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 gap-3">
              <NavLink
                to="/about"
                className="nav-link text-white fw-bold px-2 text-uppercase rounded-2 text-center"
                onClick={handleClose}
              >
                about
              </NavLink>
              <NavLink
                to="/portfolio"
                className="nav-link text-white fw-bold px-2 text-uppercase rounded-2 text-center"
                onClick={handleClose}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link text-white fw-bold px-2 text-uppercase rounded-2 text-center"
                onClick={handleClose}
              >
                Contact
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
