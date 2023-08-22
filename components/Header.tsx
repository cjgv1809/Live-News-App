import Link from "next/link";
import NavLinks from "./NavLinks";
import DarkModeButton from "./DarkModeButton";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <header>
      <div className="flex justify-between p-10 items-center max-w-6xl mx-auto">
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            Live{" "}
            <span className="underline decoration-6 decoration-orange-400">
              News
            </span>{" "}
            App
          </h1>
        </Link>

        <div className="flex items-center justify-end space-x-2">
          {/* Dark Mode Button */}
          <DarkModeButton />

          <button className="hidden md:inline font-semibold bg-slate-900 text-white px-4 py-2 rounded-full dark:bg-slate-800">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* NavLinks */}
      <NavLinks />

      {/* SearchBox */}
      <SearchBox />
    </header>
  );
}

export default Header;
