import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const initial = { y: 0 };
const animate = { y: "-50%" };

function Link({ name, link }: { name: string; link: string }) {
  const controls = useAnimation();
  const navigate = useNavigate();
  const [state,set]=useState(false);
  
  return (
    <NavLink to={link} id={!state?"under":""}  className={(x)=>{return `overflow-hidden relative h-[1.5rem] cursor-pointer `+`${x.isActive?set(true):set(false)}`}}>
      <motion.div
        className={`overflow-y-hidden w-max text-[15px] font-light text-text ${state?"underline":""}`}
        onMouseEnter={() => {
          controls.start(!state?animate:initial);
        }}
        onMouseLeave={() => {
          controls.start(initial);
        }}
        animate={controls}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <p>{name}</p>
        <p>{name}</p>
      </motion.div>
    </NavLink>
  );
}

export default Link;
