import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function SubHeader() {
  return (
    <div className="d-flex align-items-center justify-content-center mb-3 gap-3">
      <div
        className="flex-grow-1 border-2"
        style={{ height: "5px", borderColor: "white" }}
      />

      <FontAwesomeIcon icon={faStar} size="md" className="text-dark" />

      <div
        className="flex-grow-1 border-2"
        style={{ height: "5px", borderColor: "white" }}
      />
    </div>
  );
}
