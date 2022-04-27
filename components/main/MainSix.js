import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CardMainSix from "../CardMainSix";
import datasMainSix from "../../data/DatasMainSix";
import { BiWalk } from "react-icons/bi";
import { useId } from "react";

function MainSix() {
  const ID = useId();
  console.log(ID);

  return (
    <>
      <span className=" text-[24px] text-[#202249]">
        Prolongez la magie jusque dans vos rêves
      </span>
      <p className=" mx-auto w-[816px] font-sans text-[18px] text-[#202249]">
        Téléportez-vous dans l’ambiance dépaysante de nos hôtels à thèmes et
        bénéficiez de l’accès aux Parcs avant l’heure d’ouverture, de Points
        Selfie à l’hôtel et autres avantages uniques.
      </p>
      <div className="relative mt-16 flex flex-col items-center justify-center  overflow-x-auto  pb-10 pl-[24vw] pr-5 scrollbar-hide">
        <div className=" flex snap-x justify-center gap-5">
          {/* Arrow Left */}
          <div className="absolute left-[13px] top-[241px] flex">
            <div className="flex cursor-pointer rounded-full bg-white px-2 py-2 shadow-2xl ">
              <div className="flex justify-center">
                <MdKeyboardArrowLeft size="25px" />
              </div>
            </div>
          </div>

          {/* Arrow Right */}
          <div className="absolute right-[19px] top-[241px] flex">
            <div className="flex cursor-pointer rounded-full bg-white px-2 py-2 shadow-2xl ">
              <div className="flex justify-center">
                <MdKeyboardArrowRight size="25px" />
              </div>
            </div>
          </div>
          {datasMainSix?.map((data) => (
            <div
              key={data.id}
              className={`${data._id === 5 ? "hidden" : "flex"}`}
            >
              <CardMainSix
                image={data.url}
                typo1={data.title}
                pieton={data.pieton}
                navette={data.navette}
                typo={data.description}
                button={
                  <span className="rounded-full border-2 border-blue-800 px-5 py-2">
                    {data.btn}
                  </span>
                }
              />
              <div />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MainSix;
