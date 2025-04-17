import Link from "next/link";
import Bars from "./Bars";

const Nav = () => {
  return (
    <div className="flex w-screen place-content-between font-semibold text-neutral-700">
      <div className="flex items-center w-screen">
        <Link href="/">
          <img className="max-h-16 " src="/trulia-logo.jpg" alt="logo" />
        </Link>
        <div className="hidden md:flex py-2 px-4 hover:border-cyan-700 hover:bg-cyan-700 hover:text-white hover:border hover:rounded-lg">
          <Link href="/buy">Buy</Link>
        </div>
        <div className="hidden md:block py-2  px-4 hover:border-cyan-700 hover:bg-cyan-700 hover:text-white hover:border hover:rounded-lg">
          Rent
        </div>
        <div className="hidden md:block py-2  px-4 hover:border-cyan-700 hover:bg-cyan-700 hover:text-white hover:border hover:rounded-lg">
          Mortgage
        </div>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex flex-1 w-40 py-2 px-4  hover:border-cyan-700 hover:bg-cyan-700 hover:text-white hover:border hover:rounded-lg">
          Saved Homes
        </div>
        <div className="hidden md:flex flex-1 w-40 py-2 px-4  hover:border-cyan-700 hover:bg-cyan-700 hover:text-white hover:border hover:rounded-lg">
          Saved Searches
        </div>
        <div className="hidden md:flex flex-1 w-40 p-2 px-4 border rounded-lg border-gray-300 hover:bg-neutral-200 hover:border-transparent">
          Sign up or Log in
        </div>
        <Bars />
      </div>
    </div>
  );
};

export default Nav;
