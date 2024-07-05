import { Links } from "../approach";
import { useState } from "react";

function Open({
  name1,
  name,
  img,
  para,
}: {
  name1: string;
  name: string;
  img: string;
  para: string;
}) {
  const [click, set] = useState<boolean>();
  function handle() {
    set((x) => !x);
    console.log(click);
  }
  return (
    <div
      className={`${
        click ? "md:h-[30rem] h-[40rem]" : "md:h-[3.5rem] h-[3rem]"
      } border-text border-t-[.5px] pl-8 pr-5 py-3 overflow-hidden text-[1.2rem] md:text-[1rem] transition-all ease-linear duration-150`}
    >
      <div className="flex flex-row justify-between font-extralight">
        <div className="flex flex-col md:flex-row justify-between  gap-5 md:gap-0">
          <p className="w-[10rem]">{name1}</p>
          <div className="flex flex-col gap-5 w-[15rem] md:ml-[15rem]">
            <p>{name}</p>
            <br />
            <img className="w-[8rem] h-[8rem] rounded-xl" src={img} alt="" />
            <p className="font-extralight ">{para}</p>
          </div>
        </div>

        <Links name="READ" handle={handle} />
      </div>
    </div>
  );
}

export default Open;
