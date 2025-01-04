import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="text-center">
      <div className="container py-5">
        <div className="row g-3 py-5">
          <div className="col-md-4">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4">
            <h3>AROUND THE WEB</h3>

            <ul className="d-flex gap-3 justify-content-center align-items-center list-unstyled">
              <li>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-white p-2 border border-white rounded-circle"
                    size="sm"
                  />
                </a>
              </li>

              <li>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-white p-2 border border-white rounded-circle"
                    size="sm"
                  />
                </a>
              </li>

              <li>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-white p-2 border border-white rounded-circle"
                    size="sm"
                  />
                </a>
              </li>

              <li>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="text-white p-2 border border-white rounded-circle"
                    size="sm"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>ABOUT FREELANCER</h3>

            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>

      <div className="copyright py-4">
        <p className="m-0">Copyright © Your Website 2025</p>
      </div>
    </footer>
  );
}
