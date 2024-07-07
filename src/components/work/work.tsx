import Loading from "../../framer-motion/loading";
import Card from "./card";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import Card1 from "./card1";
import Footer from "../footer";

const data = [
  {
    img: "./1.png",
    heading: "fyde",
    buttons: ["audit", "copy writing", "space deck", "slides design"],
  },
  {
    img: "./2.jpeg",
    heading: "trawa",
    buttons: ["brand identity", "design research", "investor deck"],
  },
  {
    img: "./3.png",
    heading: "PREMIUM BLEND",
    buttons: ["branded template"],
  },
  {
    img: "./4.png",
    heading: "planetly",
    buttons: [
      "agency",
      "big news deck",
      "branded template",
      "investor deck",
      "policy deck & playbook",
      "sales deck",
    ],
  },
  {
    img: "./5.jpeg",
    heading: "black book",
    buttons: ["redesign", "investor deck", "review"],
  },
  {
    img: "./6.jpeg",
    heading: "vise",
    buttons: ["agency", "company presentation"],
  },
  {
    img: "./7.jpeg",
    heading: "softstart",
    buttons: ["branded template", "sales deck"],
  },
  {
    img: "./8.jpeg",
    heading: "officevibe",
    buttons: ["branded template"],
  },
];

function Work() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["110%", "1200%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["50%", "800%"]);
  return (
    <div className="flex w-full  flex-wrap justify-around bg-[#CDEA68] ">
      <Loading text="work" />
      <div className="bg-[#CDEA68] h-[10rem] md:h-[30rem] w-full sticky top-0 z-30">
        <div className="relative h-full">
          <h1 className="uppercase font-fond text-text absolute top-[60%] md:top-[30%] pl-5 left-[2%] text-[4rem] md:text-[6rem] font-bold">
            work
          </h1>
        </div>
      </div>
      <motion.div
        style={{ y: y1 }}
        className="bg-[#c1da66] w-[70%] h-[2rem] md:h-[5rem] rounded-[1rem] z-50"
      ></motion.div>
      <motion.div
        style={{ y: y2 }}
        className="bg-[#c1da66] w-[90%] h-[2rem] md:h-[5rem] rounded-[1rem] z-50"
      ></motion.div>
      <div className="h-max bg-back z-50 w-full">
        <div className="z-50 pb-10 flex w-full  flex-wrap justify-around bg-back gap-5 rounded-[2rem] pt-[2rem]">
          {data.map((item) => (
            <Card data={item} />
          ))}
        </div>
        <div className="h-max overflow-hidden  bg-primary z-30 sticky md:top-[-15rem] pb-[5rem]">
          <hr className="h-[.2px] bg-white mb-[5rem] mt-[5rem]" />
          <motion.div
            initial={{ x: "0" }}
            animate={{ x: "-77%" }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className=" w-full bg-primary rounded-2xl"
          >
            <h1 className="uppercase text-nowrap bg-primary  w-full leading-[100%] text-[20vw] font-fond  font-bold text-back">
              Behance behance behance
            </h1>
          </motion.div>
          <hr className="h-[.2px] bg-white mt-[5rem]" />
          <div className="flex flex-col md:flex-row gap-[10rem] w-[100rem] mt-[5rem] ml-[2rem] pb-5">
            <p className="font-['Neue_Montreal'] text-back text-[1.5rem] ">
              Latest publications:
            </p>
            <div className="flex flex-col md:flex-row gap-2">
              <Card1 img="./work1.jpeg" text="officevibe ppt template" />
              <Card1 img="./work2.png" text="Trawa energy pitch deck" />
              <Card1 img="./work3.png" text="tech from ukraine" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Work;
