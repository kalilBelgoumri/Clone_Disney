/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import mickey from "../../public/world_disneyland-pars.jpg";
import mickey1 from "/public/world_welcome-annual-pass-mail-masked.jpg";
import datas from "../../data/DataMainNine";
import { AiOutlineInstagram } from "react-icons/ai";
import { useRouter } from "next/router";
function MainNine() {
  const router = useRouter();
  return (
    <>
      <div className="grid-flow-col grid-cols-2 gap-10 overflow-hidden lg:grid">
        <div className="grid ">
          <div className="grid pt-1">
            <p className="text-lg">
              Faites de votre mobile une baguette magique
            </p>
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

      <div className="mt-14 grid-flow-col grid-cols-2 gap-10 overflow-hidden lg:grid">
        <div className="grid place-content-center ">
          <Image
            className="rounded-lg"
            src={mickey1}
            priority="responsive"
            alt="mickey"
          />
        </div>
        <div className="grid ">
          <div className="-mt-16 grid pt-1">
            <p className="text-lg">Restez informé.e des actualités Disney !</p>
            <p className=" mb-20 text-[14px]  text-gray-500">
              Inscrivez-vous pour recevoir par e-mail des offres spéciales et
              des informations concernant Disneyland Paris et les autres
              produits et services du groupe d’entreprises Walt Disney.
            </p>
          </div>
          <div className=" flex items-center justify-start ">
            <button
              className="rounded-full border-2 border-[#0046E4] py-2 px-20 text-[#0046E4] "
              type="submit"
            >
              <span className="text-bold text-md">En savoir plus</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <p className=" text-[24px] text-[#202249]">#DisneylandParis</p>
      </div>
      <div className="relative mt-32 flex snap-x scroll-pl-44  justify-center gap-5 overflow-auto scrollbar-hide ">
        {datas.map((data, index) => (
          <div key={index} className="flex ">
            <div
              className="absolute top-[15px]
              z-50 ml-[250px] cursor-pointer "
            >
              <div onClick={() => router.push(data.instagram)}>{data.icon}</div>
            </div>
            <div className="flex h-72 w-72  object-cover object-center">
              <Image
                className="snap-center rounded-md bg-cover bg-center"
                src={data.url}
                alt="test"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainNine;
