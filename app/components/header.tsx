import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (value: string) => {
    setKeyword(value);
  };

  return (
    <nav className="p-6">
      <div className="flex items-center justify-between border-2 border-neutral-900 rounded-lg p-4">
        <div className="flex items-center">
          <a href="/" className="font-bold text-[24px] text-neutral-900 flex items-center gap-2">
            <img
              src="/logo/sensegrid.svg"
              alt="senseGrid Logo"
              className="h-8 w-auto"
            />
            senseGrid
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-neutral-900">
          <a
            href="/why-us"
            className="relative py-1 group"
          >
            <span className="relative">Why Us</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-600 group-hover:w-1/2 transition-all duration-300 origin-left"
              style={{ transform: 'translateX(-50%)' }}></span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-600 group-hover:w-1/2 transition-all duration-300 origin-right"></span>
          </a>
          <a
            href="/pricing"
            className="relative py-1 group"
          >
            <span className="relative">Pricing</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-600 group-hover:w-1/2 transition-all duration-300 origin-left"
              style={{ transform: 'translateX(-50%)' }}></span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-600 group-hover:w-1/2 transition-all duration-300 origin-right"></span>
          </a>
        </div>

        <div className="flex items-center space-x-2">

          <input
            type="text"
            className="hidden md:block px-4 py-2 border bg-transparent focus:outline-none focus:ring-1 focus:ring-emerald-600"
            placeholder="Search..."
            value={keyword}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button className="md:hidden p-2">
            <Search className="w-6 h-6 text-neutral-900" />
          </button>
          <Button className="hover:rounded-none hover:shadow-lg shadow-md hover:shadow-emerald-600/50 shadow-emerald-600/50 border rounded-3xl bg-emerald-600 hover:bg-transparent hover:bg-emerald-600 hover:text-white border-neutral-900 px-8 text-sm font-semibold transition-all duration-700 ease-in-out">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
}
