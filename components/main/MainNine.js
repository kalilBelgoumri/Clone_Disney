import React from "react";
import Image from "next/image";
import mickey from "../../public/world_disneyland-pars.jpg";
function MainNine() {
  return (
    <div className="grid-flow-col grid-cols-2 gap-10 overflow-hidden lg:grid">
      <div className="grid ">
        <div className="grid pt-1">
          <p className="text-lg">Faites de votre mobile une baguette magique</p>
          <p className="mt-4 text-xs  text-gray-500">
            Retrouvez vos Billets et Pass, réservez un Standby Pass ou une
            table, commencez votre enregistrement en ligne avant d arriver à l
            hôtel, visualisez les temps d attente aux attractions... et bien
            plus encore ! L application officielle Disneyland Paris est votre
            alliée ultime pour une visite magique !
          </p>
        </div>
        <div className=" flex items-center justify-start self-end">
          <button
            className="rounded-full border-2 border-[#0046E4] py-2 px-20 text-[#0046E4] "
            type="submit"
          >
            <span className="text-bold text-md">Découvrir</span>
          </button>
        </div>
      </div>
      <div className="grid place-content-center ">
        <Image
          className="rounded-lg"
          src={mickey}
          priority="responsive"
          alt="mickey"
        />
      </div>
    </div>
  );
}

export default MainNine;
