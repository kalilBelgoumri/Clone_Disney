import React from "react";
import datasMainSeven from "../../data/DatasMainSeven";
import Image from "next/image";
function MainSeven() {
  return (
    <>
      <div className="mt-16 flex flex-col items-center justify-center lg:flex-row">
        <button
          className="rounded-full border-2 border-[#022CA5] py-1.5 px-4 hover:bg-gray-100 hover:transition-all hover:duration-500 "
          type="submit"
        >
          <span className=" text-[#022CA5]">Comparer les prix</span>
        </button>
        <div className="px-1" />
        <button
          className="rounded-full border-2 bg-gradient-to-r from-[#022CA5] via-[#0539d4] to-[#3959bb] py-2 px-4 hover:transition-all hover:duration-500 "
          type="submit"
        >
          <span className="text-white">Voir tous les hôtels</span>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-5 mb-10">
          <p className="font-sans text-[12px] font-normal">
            Les prix peuvent varier en fonction du moment de la réservation. Le
            prix communiqué est disponible pendant la durée de cette
            communication pour des dates d `arrivée susceptibles de changer de
            temps à autre.
          </p>
        </div>
        <h3 className="text-center text-[24px] font-extrabold text-[#202249]">
          La garantie du meilleur choix : réservez votre séjour en toute
          sérénité
        </h3>
        <p className="mt-3 w-full max-w-[816px] text-center font-sans text-[18px] font-normal">
          En ce moment, bénéficiez de conditions de réservation avantageuses
          pour votre séjour à Disneyland Paris. C`est le moment idéal pour
          réserver !
        </p>
      </div>
      <div className="mt-10 flex justify-center gap-8 ">
        {datasMainSeven.map((data, index) => (
          <span key={index}>
            <img className="w-52" src={data.url} alt="data" />
            <div className="mt-10  ">
              <p className=" w-52 "> {data.title} </p>
              <p className="mt-3 w-52 font-sans text-xs font-normal">
                {data.description}
              </p>
            </div>
          </span>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <button
          className="rounded-full border-2 bg-gradient-to-r from-[#022CA5] via-[#0539d4] to-[#3959bb] py-2 px-4 hover:transition-all hover:duration-500 "
          type="submit"
        >
          <span className="text-white">En savoir plus</span>
        </button>
      </div>
    </>
  );
}

export default MainSeven;
