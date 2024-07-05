import { GoArrowUpRight } from "react-icons/go";

function Button() {
  return (
    <div className="flex flex-row items-center group font-light  gap-2 ">
      <button className="transition  ease-linear group-hover:bg-black group-hover:text-white uppercase border-solid border-[1px] py-1 px-2 border-black rounded-[2rem]">
        start the project
      </button>
      <GoArrowUpRight className="group-hover:bg-black transition  ease-linear group-hover:text-white border-black border-[1px] rounded-[2rem] w-[2rem] h-[2rem] text-extralight" />
    </div>
  );
}

export default Button;
