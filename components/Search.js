import React from "react";

function Search() {
  return (
    <div>
      <input
        className="border rounded-lg hidden focus:inline-flex w-12  py-1 px-0 focus:w-[100vw] focus:transition-all transition-duration: 500ms focus:outline-none focus:ring focus:ring-violet-300 "
        type="search"
        name="search"
      />
    </div>
  );
}

export default Search;
