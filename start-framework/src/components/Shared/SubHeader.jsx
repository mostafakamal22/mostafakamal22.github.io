/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function SubHeader({ color }) {
  return (
    <div className="d-flex align-items-center justify-content-center mb-3 gap-3">
      <div
        style={{
          backgroundColor: `var(${color})`,
          width: "5rem",
          height: "5px",
        }}
      />

      <FontAwesomeIcon
        icon={faStar}
        size="lg"
        style={{ color: `var(${color})` }}
      />

      <div
        style={{
          backgroundColor: `var(${color})`,
          width: "5rem",
          height: "5px",
        }}
      />
    </div>
  );
}
