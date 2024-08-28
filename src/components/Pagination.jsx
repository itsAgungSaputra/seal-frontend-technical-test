import { FaArrowLeft, FaArrowRight  } from "react-icons/fa";
import ProptTypes from "prop-types";

export default function Pagination({
  totalPages,
  currentPage,
  pagesToShow,
  onPageChange,
}) {
  return (
    <div className="mb-4 flex justify-center self-center overflow-hidden rounded">
      <button
        disabled={currentPage === 1}
        className="flex h-8 items-center justify-center text-gray-500 gap-2 p-4 disabled:text-gray-300"
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Previous page"
      >
        <FaArrowLeft className="h-4 w-4" />
        Previous
      </button>

      {Array(Math.min(pagesToShow, currentPage - 1))
        .fill()
        .map((_, i) => (
          <button
            className="flex h-8 w-8 items-center justify-center text-gray-500 gap-2"
            key={i + 1}
            onClick={() => onPageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}

      {currentPage > pagesToShow + 1 && (
        <button
          disabled
          className="flex h-8 w-8 items-center justify-center text-gray-500 gap-2"
        >
          ...
        </button>
      )}

      <button
        disabled
        className="flex h-8 w-8 items-center justify-center font-semibold bg-blue-500 text-white gap-2 rounded-md"
      >
        {currentPage}
      </button>

      {currentPage < totalPages - pagesToShow && (
        <button
          disabled
          className="flex h-8 w-8 items-center justify-center text-gray-500 gap-2"
        >
          ...
        </button>
      )}

      {Array(Math.min(pagesToShow, totalPages - currentPage))
        .fill()
        .map((_, i) => (
          <button
            className="flex h-8 w-8 items-center justify-center text-gray-500 gap-2"
            key={i + 1}
            onClick={() => onPageChange(totalPages - i)}
          >
            {totalPages - i}
          </button>
        ))
        .reverse()}

      <button
        disabled={currentPage === totalPages}
        className="flex h-8 items-center justify-center  text-gray-500 gap-2 p-4 disabled:text-gray-300"
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Next page"
      >
        Next
        <FaArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

Pagination.propTypes = {
  totalPages: ProptTypes.number.isRequired,
  currentPage: ProptTypes.number.isRequired,
  pagesToShow: ProptTypes.number.isRequired,
  onPageChange: ProptTypes.func.isRequired,
};
