import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = (homes) => {
  console.log("in nav component", homes);
  return (
    <div className="flex place-content-between font-semibold text-neutral-700">
      <div className="flex items-center">
        <img className="max-h-16 " src="/trulia-logo.jpg" alt="logo" />
        <div className="py-2 px-4 hover:border-cyan-700 hover:bg-cyan-700 hover:text-white hover:border hover:rounded-lg">
          Buy
        </div>
        <div className="py-2  px-4 hover:border-cyan-700 hover:bg-cyan-700 hover:text-white hover:border hover:rounded-lg">
          Rent
        </div>
        <div className="py-2  px-4 hover:border-cyan-700 hover:bg-cyan-700 hover:text-white hover:border hover:rounded-lg">
          Mortgage
        </div>
      </div>
      <div className="flex items-center">
        <div className="py-2 px-4  hover:border-cyan-700 hover:bg-cyan-700 hover:text-white hover:border hover:rounded-lg">
          Saved Homes
        </div>
        <div className="py-2 px-4  hover:border-cyan-700 hover:bg-cyan-700 hover:text-white hover:border hover:rounded-lg">
          Saved Searches
        </div>
        <div className="p-2 px-4 border rounded-lg border-gray-300 hover:bg-neutral-200 hover:border-transparent">
          Sign up or Log in
        </div>
        <div className="fa-lg m-4 text-teal-700">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
