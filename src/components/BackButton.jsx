import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = ({ onClick }) => {
  return (
    <button
      className="absolute left-5 top-5 bg-white w-8 h-8 flex items-center justify-center rounded-full shadow"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowLeft} color="black" size="lg" />
    </button>
  );
};

export default BackButton;
