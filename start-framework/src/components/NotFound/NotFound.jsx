import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import PageHeader from "../Shared/PageHeader";
import SubHeader from "../Shared/SubHeader";

export default function NotFound() {
  return (
    <section className="bg-light min-vh-100 py-5 d-flex flex-column align-items-center justify-content-center">
      <div className="container text-center py-5 my-5">
        <header>
          <FontAwesomeIcon
            className="mb-4"
            icon={faExclamationCircle}
            size="6x"
          />

          <PageHeader title={"404 Not Found"} />
          <SubHeader color={"--second-color"} />

          <Link
            to="/"
            className="btn mt-4 text-white d-flex align-items-center justify-content-center gap-1 mx-auto fw-semibold"
            style={{
              width: "fit-content",
              backgroundColor: "var(--main-color)",
            }}
          >
            <FontAwesomeIcon icon={faHome} size="sm" />
            Go Home
          </Link>
        </header>
      </div>
    </section>
  );
}
