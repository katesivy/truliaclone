import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = (props: any) => {
  return (
    <div className="flex place-content-between items-center rounded-lg bg-red-700">
      <div className=" md:w-96 bg-slate-200 rounded-l-lg text-black-200 ">
        <input className="w-64 md:min-w-full rounded-l-lg "></input>
      </div>
      <div className="text-xl justify-end w-12">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
      </div>
    </div>
  );
};

export default Search;
