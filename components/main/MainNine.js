import React from "react";
import Image from "next/image";
import mickey from "../../public/world_disneyland-pars.jpg";
function MainNine() {
  return (
    <div className="grid-flow-col grid-cols-2 gap-10 overflow-hidden lg:grid">
      <div className="grid ">
        <div className="grid pt-1">
          <p className="text-lg">
            Information importante - Parcs complets jusqu’au 22 avril 2022
          </p>
          <p className="mt-4 text-xs  text-gray-500">
            Les Parcs Disney affichent actuellement complets jusqu’au 22 avril
            2022. Pour pouvoir y accéder, vous devez impérativement être muni
            d’un billet daté ou avoir déjà enregistré votre date de visite si
            vous êtes en possession d’un billet non daté ou d’un Pass Annuel.
            Nous vous rappelons que les ventes de billets aux guichets des Parcs
            Disney sont fermées. Nous avons hâte de vous accueillir à Disneyland
            Paris !
          </p>
        </div>
        <div className=" flex items-center justify-start self-end">
          <button
            className="rounded-full border-2 border-[#0046E4] py-2 px-4 text-[#0046E4] "
            type="submit"
          >
            <span className="text-bold text-md">Enregistrer ma visite</span>
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
