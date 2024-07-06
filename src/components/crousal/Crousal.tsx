import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";



function Line({text}:{text:string}) {
  return (
    <motion.div
      initial={{ x: "0" }}
      animate={{ x: "-128%" }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      className=" w-full bg-primary rounded-2xl "
    >
      <hr className="w-[250%]" />
      <h1 className="uppercase text-nowrap  w-full leading-[100%] text-[25vw] font-fond  font-bold text-back">
        {text}{text}{text}
      </h1>
    </motion.div>
  );
}

function Crousal({text}:{text:string}) {
  const ref=useRef(null)
  const {scrollYProgress:scrollYProgress1}=useScroll({
    target:ref,
    offset:["start end","start start"]
  })
  const y1 = useTransform(scrollYProgress1, [0, 1], ["0", "-5%"]);
  return (
    <motion.div
    ref={ref}
      className="z-[50] relative md:h-max h-[12rem] bg-primary w-full gap-12 flex flex-row overflow-hidden pt-10 rounded-t-2xl "
      style={{y:y1}}
      transition={{ duration: 0.5, type: "ease" }}
    >
      <Line text={text}/>
    </motion.div>
  );
}

export default Crousal;
