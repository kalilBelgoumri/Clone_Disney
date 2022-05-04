import React from "react";
import DatasMain from "../../data/DatasMain";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CardMainThree from "../CardMainThree";

function MainThree() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-2 text-2xl">Les Saisons et événements du moment</h1>
        <p className="text-[rgb(32, 34, 73)] w-5/6 text-center">
          Demandez le programme ! Découvrez les soirées, spectacles et
          événements dans les Parcs Disney, et les Saisons en cours et à venir…
        </p>
      </div>
      <div className=" mt-16 flex flex-col items-center justify-center  overflow-x-auto  pb-10 pl-[24vw] pr-5 scrollbar-hide">
        <div className=" relative flex gap-5">
          {/* Arrow Left */}
          <div className="absolute left-[13px] top-[241px] flex">
            <div className="flex cursor-pointer rounded-full bg-white px-2 py-2 shadow-2xl ">
              <div className="flex justify-center">
                {count > 0 && (
                  <MdKeyboardArrowLeft
                    onClick={() => setCount(count - 1)}
                    size="25px"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Arrow Right */}
          <div className="absolute right-[19px] top-[241px] flex">
            <div className="flex cursor-pointer rounded-full bg-white px-2 py-2 shadow-2xl ">
              <div className="flex justify-center">
                {count < DatasMain.length - 1 && (
                  <MdKeyboardArrowRight
                    onClick={() => setCount(count + 1)}
                    size="25px"
                  />
                )}
              </div>
            </div>
          </div>
          {DatasMain?.map((data, index) => (
            <div key={index} className="flex ">
              <CardMainThree
                image={data.url}
                typo1={data.title}
                typo={data.description}
                button={
                  <span className="rounded-full border-2 border-blue-800 px-5 py-2">
                    {data.btn}
                  </span>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MainThree;
