import { motion, useAnimation } from "framer-motion";

function Button({ name }: { name: string }) {
  const control = useAnimation();
  const control1 = useAnimation();
  return (
    <motion.button
      onMouseEnter={() => {
        control.start({ borderRadius: "0", y: "-100%" });
        control1.start({ color: "white" });
      }}
      onMouseLeave={() => {
        control.start({ borderRadius: "10rem", y: ["-100%", "-200%", "200%"] });
        control1.start({color:"black"});
      }}
      className="bg-back relative h-[1.8rem] w-max justify-center items-center text-text uppercase font-light font-['Neue Montreal'] border-[1px] border-text text-[.8rem] rounded-[5rem] overflow-hidden"
    >
      <motion.p animate={control1} className="z-[1000] px-3 py-1 relative">
        {name}
      </motion.p>
      <motion.div
        initial={{ borderRadius: "100rem" }}
        animate={control}
        transition={{ duration: 0.2, times: [0, 0.5, 0.5],ease:"linear" }}
        className="w-full h-[3rem] bg-text z-[900] relative"
      ></motion.div>
    </motion.button>
  );
}

export default Button;
