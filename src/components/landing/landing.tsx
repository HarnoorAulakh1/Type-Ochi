import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "./button";
import { MotionValue } from "framer-motion";

interface LandingProps {
  y: MotionValue<string>;
}

function Landing({ y }: LandingProps) {
  const [count, setCount] = useState(0);
  const [loading, set] = useState(true);
  const controls = useAnimation();
  const control3 = useAnimation();
  const controls1 = useAnimation();
  useEffect(() => {
    setTimeout(() => {
      controls1.start({ scale: 1 });
      control3.start({ width:"max-content" });
    }, 2000);
    const interval = setInterval(() => {
      setCount((prev) => (prev < 100 ? prev + 1 : prev));
    }, 14);
    controls.start({ y: 0 });
    setTimeout(() => {
      set(false);
    }, 1700);
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      className="bg-back w-full h-[50rem] relative rounded-[2rem] z-[50] "
      style={{ y: y }}
    >
      <motion.div className="w-max flex flex-col md:gap-0 gap-2  text-[14vw] md:text-[9vw] leading-[6.5vw] font-fond font-bold text-text absolute top-[15%] md:top-[25%] ml-5 md:ml-8">
        <h1>WE CREATE</h1>
        <div className="flex flex-row items-center">
          <motion.div
            className="rounded-xl w-0 overflow-hidden relative top-[-.8rem] md:top-[-1.5rem]"
            transition={{ duration: 0.8, type: "spring" }}
            animate={control3}
          >
            <div className="rounded-xl w-[5rem] h-[3rem] md:w-[10rem] md:h-[6rem]">
              <img
                src="./slide.jpeg"
                alt=""
                className="rounded-xl"
              />
            </div>
          </motion.div>
          <p className="uppercase"> Ochi design</p>
        </div>
        <h1>PRESENTATIONS</h1>
      </motion.div>
      {loading && (
        <p className="text-[2rem] md:text-[5rem] font-fond uppercase font-bold text-text absolute bottom-4 left-10">
          Loading....
        </p>
      )}
      <motion.div
        className="absolute bottom-[20%] w-full h-[2px] bg-text flex flex-col gap-8"
        initial={{ scale: 0 }}
        animate={controls1}
        transition={{ duration: 1, type: "spring" }}
      >
        <hr className="h-[1px] w-full bg-slate-300" />
        <motion.div className=" flex flex-col md:gap-0 gap-2 md:flex-row h-[5rem] w-full font-light justify-between ml-8 ">
          <p>For public and private companies</p>
          <p>From the first pitch to IPO</p>
          <Button />
        </motion.div>
      </motion.div>
      {loading && (
        <p className="text-[100px] font-fond font-extrabold text-text absolute bottom-4 right-10">
          {count}%
        </p>
      )}
    </motion.div>
  );
}

export default Landing;
