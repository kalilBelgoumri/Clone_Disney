import React from "react";
import Image from "next/image";
import mickey from "../../public/family-shoot-mickey-newport-bay-club_.jpg";
import mickey1 from "../../public/world_disney-premier-access-screen.jpg";

function MainOne() {
  return (
    <div className="grid-flow-col grid-cols-2 gap-10 overflow-hidden lg:grid">
      <div className="grid place-content-center ">
        <Image
          className="rounded-lg"
          src={mickey}
          priority="responsive"
          alt="mickey"
        />
        <div className="place-center grid  pt-3">
          <p className="text-lg">Découvrez nos prix du moment</p>
          <p className="mt-4 text-xs text-gray-500">
            Et évadez-vous le temps d’un séjour magique au Coeur du 30e
            Anniversaire !
          </p>
        </div>
        <div className="mt-16 flex items-center justify-center">
          <button
            className="rounded-full border-2 border-[#0046E4] py-1 px-16 text-[#0046E4] "
            type="submit"
          >
            Découvrir
          </button>
        </div>
      </div>
      <div className="grid ">
        <Image
          className="rounded-lg"
          src={mickey1}
          priority="responsive"
          alt="mickey"
        />
        <div className="grid pt-1">
          <p className="text-lg">Disney Premier Access</p>
          <p className="mt-4 text-xs  text-gray-500">
            Évitez la file à certaines de nos attractions les plus populaires
            grâce à un accès rapide par la file dédiée Disney Premier Access
            (accès rapide aux attractions), à partir de 5 € par personne et par
            attraction en semaine. Quantités limitées !
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <button
            className="rounded-full border-2 border-[#0046E4] py-1 px-14 text-[#0046E4] "
            type="submit"
          >
            <span className="text-bold text-md">En savoir plus</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainOne;
