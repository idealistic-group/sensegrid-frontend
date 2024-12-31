import { useState } from "react";

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

        <div className="flex items-center space-x-8 text-neutral-900">
          <a
            href="/why-us"
            className=""
          >
            Why Us?
          </a>
          <a
            href="/pricing"
            className=""
          >
            Pricing
          </a>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            className="px-4 py-2 rounded-lg border bg-transparent focus:outline-none focus:ring-1 focus:ring-emerald-600"
            placeholder="Search..."
            value={keyword}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
}
