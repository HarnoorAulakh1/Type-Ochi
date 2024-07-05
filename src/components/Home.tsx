import Landing from "./landing/landing";
import Crousal from "./crousal/Crousal";
import {useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Approach from "./approach";
import Footer from "./footer";

function Work() {
  const [loading, set] = useState(true);
  const ref1 = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["start start", "end start"],
  });

  const y2 = useTransform(scrollYProgress, [0, 1], ["0", "200%"]);

  useEffect(() => {
    document.body.style.overflow = "auto";
  },[]);

  useEffect(() => {
    setTimeout(() => {
      set(false);
    }, 2000);
  }, []);

  return (
    <div className="w-full h-max bg-back overflow-hidden">
      <Landing y={y2} />
      {!loading && (
        <>
          <Crousal text="we are ochi " />
          <Approach />
          <div className="bg-back  w-full fixed top-[25%] md:top-[5%] z-20 flex justify-center items-center">
              <img src="./5.jpeg" className="md:w-[60%] md:h-[50%] w-[80%]" alt="" />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
//bg-[#CDEA68]

export default Work;
