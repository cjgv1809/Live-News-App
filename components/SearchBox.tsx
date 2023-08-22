"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!input) return;

    router.push(`/search?term=${input}`);
  };

  return (
    <form 
    onSubmit={handleSearch}
    className="max-w-6xl mx-auto flex justify-between items-center px-5 pt-2">
      <input
        className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-600 outline-none flex-1 bg-transparent dark:text-white dark:placeholder-gray-400"
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button 
      className="text-gray-900 bg-slate-200 rounded-full font-semibold disabled:text-gray-400 dark:text-white dark:disabled:text-gray-400 dark:bg-slate-800 px-6 py-2"
      disabled={!input}
      type="submit">Search</button>
    </form>
  );
}

export default SearchBox;
