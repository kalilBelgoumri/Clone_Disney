import React from "react";

function MainSeven() {
  return (
    <div className="mt-16 flex items-center justify-center">
      <button
        className="rounded-full border-2 border-[#022CA5] py-2 px-4 "
        type="submit"
      >
        <span className=" text-[#022CA5]">Comparer les prix</span>
      </button>
      <div className="px-3" />
      <button
        className="rounded-full border-2 bg-gradient-to-r from-[#022CA5] via-[#0539d4] to-[#3959bb] py-2 px-4 "
        type="submit"
      >
        <span className="text-white">Voir tous les hôtels</span>
      </button>
    </div>
  );
}

export default MainSeven;
