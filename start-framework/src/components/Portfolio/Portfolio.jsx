import PageHeader from "../Shared/PageHeader";
import SubHeader from "../Shared/SubHeader";

import Portfolio1 from "../../assets/images/port1.png";
import Portfolio2 from "../../assets/images/port2.png";
import Portfolio3 from "../../assets/images/port3.png";
import Portfolio4 from "../../assets/images/port1.png";
import Portfolio5 from "../../assets/images/port2.png";
import Portfolio6 from "../../assets/images/port3.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [currentModalImage, setCurrentModalImage] = useState(null);

  const portfolios = [
    {
      id: 1,
      image: Portfolio1,
      title: "portfolio 1",
    },
    {
      id: 2,
      image: Portfolio2,
      title: "portfolio 2",
    },
    {
      id: 3,
      image: Portfolio3,
      title: "portfolio 3",
    },
    {
      id: 4,
      image: Portfolio4,
      title: "portfolio 4",
    },
    {
      id: 5,
      image: Portfolio5,
      title: "portfolio 5",
    },
    {
      id: 6,
      image: Portfolio6,
      title: "portfolio 6",
    },
  ];

  useEffect(() => {
    document.addEventListener("click", handleClosingModalEvent);
    return () => {
      document.removeEventListener("click", handleClosingModalEvent);
    };

    function handleClosingModalEvent(e) {
      e.stopPropagation();
      if (e.target.classList.contains("model")) {
        closeModal();
      }
    }
  }, []);

  function openModal(image) {
    setCurrentModalImage(image);
  }

  function closeModal() {
    setCurrentModalImage(null);
  }

  return (
    <section className="portfolio bg-light min-vh-100 py-5 d-flex flex-column align-items-center justify-content-center">
      <div className="container text-center py-5 my-5">
        <header>
          <PageHeader title={"portfolio component"} />
          <SubHeader color={"--second-color"} />
        </header>

        <ul className="row g-4 list-unstyled">
          {portfolios.map((portfolio) => (
            <li
              key={portfolio.id}
              className="portfolio-card col-md-4 overflow-hidden p-4"
              onClick={() => openModal(portfolio)}
            >
              <div className="position-relative">
                <img
                  src={portfolio.image}
                  alt={portfolio.title}
                  className="w-100 rounded-2"
                />
                <div className="overlay position-absolute top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100 text-white rounded-2">
                  <FontAwesomeIcon icon={faPlus} size="6x" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal */}
      {currentModalImage && (
        <div className="model position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center">
          <figure>
            <img
              src={currentModalImage.image}
              alt={currentModalImage.title}
              className="w-100"
            />
          </figure>
        </div>
      )}
    </section>
  );
}
