import Button from "./button";
import { motion, useAnimation } from "framer-motion";

// const data = ["audit", "copywriting", "sales deck", "slides design"];
interface data{
    img:string,heading:string,buttons:string[]
}

function Card({data}: {data: data}) {
  const control1 = useAnimation();
  const control2 = useAnimation();
  const {img,heading,buttons}=data;
  return (
    <div className="flex flex-col gap-2 bg-back  overflow-hidden w-[20rem] md:w-[40rem]">
      <div className="flex flex-row items-center gap-2">
        <div className="bg-black w-[1rem] h-[1rem] rounded-3xl"></div>
        <p className="uppercase font-['Neue Montreal'] text-[1rem]">{heading}</p>
      </div>
      <div className="w-[40rem] h-[20rem] md:h-[35rem]  overflow-hidden">  
        <motion.div
          className="w-[20rem] md:w-[40rem] h-[20rem] md:h-[35rem] overflow-hidden rounded-2xl"
          animate={control1}
          onMouseLeave={() => control1.start({ scale: 1 })}
          onMouseEnter={() => control1.start({ scale: 0.95 })}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          <motion.img
            className="w-[40rem] h-[20rem] md:h-[35rem] rounded-2xl"
            src={img}
            alt=""
            onMouseLeave={() => control2.start({ scale: 1 })}
            onMouseEnter={() => control2.start({ scale: 1.1 })}
            animate={control2}
            transition={{ duration: 0.4, ease: "linear" }}
          />
        </motion.div>
      </div>

      <div className="flex flex-wrap gap-[1rem]">
        {buttons.map((item, index) => (
          <Button key={index} name={item} />
        ))}
      </div>
    </div>
  );
}

export default Card;
