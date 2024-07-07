
function Card1({ text, img }: { text: string; img: string }) {
  return (
    <div className="h-max w-[20rem]">
      <div className="h-[20rem] w-[20rem] overflow-hidden rounded-[1rem]">
        {" "}
        <img
          className="h-[20rem] w-[20rem] hover:scale-[110%] transition duration-150 ease-linear rounded-[1rem]"
          src={img}
          alt=""
        />
      </div>
      <div className="flex flex-row items-center gap-[1rem] mt-[1rem] ml-1">
        <div className="w-[.5rem] h-[.5rem] bg-back rounded-[2rem]"></div>
        <p className="uppercase font-['Neue Montreal'] text-[1rem] text-back">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Card1;
