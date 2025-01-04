/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function SubHeader({ color }) {
  return (
    <div className="d-flex align-items-center justify-content-center mb-3 gap-3">
      <div className={`bg-${color}`} style={{ width: "5rem", height: "5px" }} />

      <FontAwesomeIcon icon={faStar} size="md" className={`text-${color}`} />

      <div className={`bg-${color}`} style={{ width: "5rem", height: "5px" }} />
    </div>
  );
}
