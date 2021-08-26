import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IAccordionHeader } from "types/events";

const AccordionHeader = ({ handleChange, isOpen }: IAccordionHeader) => {
  return (
    <div className="flex justify-between items-center w-full py-2 px-4">
      <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 ">
        Gelişmiş Filtreleme
      </h1>
      {isOpen ? (
        <FontAwesomeIcon
          className="w-5 h-5 cursor-pointer"
          icon={["fas", "lock-open"]}
          onClick={handleChange}
        />
      ) : (
        <FontAwesomeIcon
          className="w-5 h-5 cursor-pointer"
          icon={["fas", "lock"]}
          onClick={handleChange}
        />
      )}
    </div>
  );
};

export default AccordionHeader;
