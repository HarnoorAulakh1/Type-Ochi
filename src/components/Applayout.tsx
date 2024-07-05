import { Outlet } from "react-router";
import Navbar from "./navbar/Navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

function Applayout() {
  const initial = { y: "10rem", scale: 0.7, borderRadius: "5rem" };
  const animate = { y: [0, 0], scale: [0.7, 1], borderRadius: ["5rem", "0"] };
  const controls = useAnimation();
  useEffect(() => {
    controls.start({ y: 0 });
    setTimeout(() => {
      controls.start(animate);
    }, 1700);
  }, []);
  return (
    <motion.div
      className=" w-full h-full z-5 rounded-[2rem]"
      initial={initial}
      animate={controls}
    >
      <Navbar />
      <Outlet />
    </motion.div>
  );
}

export default Applayout;
