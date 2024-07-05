import { Outlet, NavLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Card1 from "./work/card1.tsx";
import Footer from "./footer.tsx";

const data = [
  { img: "/in1.png", text: "Sales calls?Oh no" },
  { img: "/in2.jpeg", text: "are you trying to be the main character?" },
  {
    img: "/in3.jpeg",
    text: "How to make your audience care about your presentation",
  },
];

function Insights() {
  return (
    <div className="bg-back h-max w-[full] relative pt-[1px] ">
      <div className="uppercase font-['Founders_Grotesk_Condensed'] pl-8 text-text text-[7rem] font-bold mt-[10%]">
        Insights
      </div>
      <hr className="border-t-[.5px] h-[1px] bg-text mt-[5rem]" />
      <div className="w-full pl-8 flex  flex-row justify-between mt-5">
        <p className="font-light">Latest insights:</p>
        <div className="flex flex-row gap-3 mr-[10rem]">
          <Button name="All" to="all" />
          <Button name="Presentation Template" to="presentation" />
          <Button name="public Speaking" to="public" />
          <Button name="Story Telling" to="story" />
        </div>
      </div>
      <Outlet />
      <div className="bg-primary w-full pb-[10rem] mt-[5rem] sticky top-[-8rem]">
        <div className="overflow-hidden w-full">
          <Crousal text="instagram  " />
        </div>

        <div className="flex flex-row ml-8 justify-between mr-5 mt-10">
          <p className="font-['Neue_Montreal'] text-back text-[1rem] ">
            Last publications:
          </p>
          <div className="flex flex-row gap-3">
            {data.map((item) => (
              <Card1 img={item.img} text={item.text} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function Crousal({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ x: "0" }}
      animate={{ x: "-117%" }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      className=" w-full bg-primary rounded-2xl"
    >
      <hr className="w-[250%]" />
      <h1 className="uppercase text-nowrap  w-full leading-[100%] text-[25vw] font-['Founders_Grotesk_Condensed']  font-bold text-back">
        {text}
        {text}
        {text}
      </h1>
    </motion.div>
  );
}

function Button({ name, to }: { name: string; to: string }) {
  const control = useAnimation();
  const control1 = useAnimation();
  const [state, set] = useState<boolean>(false);
  const history = window.location.pathname;
  useEffect(() => {
    if (!state && history.split("/")[2] !== to) {
      control1.start({ color: "black" });
    }
  }, [state]);
  return (
    <NavLink
      to={to}
      className={(x) => `${x.isActive ? set(true) : set(false)}`}
    >
      <motion.button
        onMouseEnter={() => {
          control.start({ borderRadius: "0", y: "-100%" });
          if (!state) control1.start({ color: "white" });
        }}
        onMouseLeave={() => {
          control.start({
            borderRadius: "10rem",
            y: ["-100%", "-200%", "200%"],
          });
          if (!state) control1.start({ color: "black" });
        }}
        className={` relative ${
          state ? "bg-text" : "bg-back"
        }  h-[1.8rem] w-max justify-center items-center  uppercase font-light font-['Neue Montreal'] border-[1px] border-text text-[.8rem] rounded-[5rem] overflow-hidden`}
      >
        <motion.p
          animate={control1}
          className={`z-[1000] ${
            state ? "text-back" : "text-text"
          } px-3 py-1 relative`}
          transition={{ duration: 0.4 }}
        >
          {name}
        </motion.p>
        <motion.div
          initial={{ borderRadius: "100rem" }}
          animate={control}
          transition={{ duration: 0.2, times: [0, 0.5, 0.5], ease: "linear" }}
          className="w-full h-[3rem] bg-text z-[900] relative"
        ></motion.div>
      </motion.button>
    </NavLink>
  );
}

export function Card2({
  img,
  heading,
  foot,
  button,
}: {
  img: string;
  heading: string;
  foot: string;
  button: string;
}) {
  return (
    <div className="ml-8 mt-[5rem] mb-5 flex group flex-col gap-3 w-[20rem] text-text font-['Neue_Montreal']">
      <div className="w-[20rem] h-[25rem] rounded-xl overflow-hidden relative z-30">
        <div className="bg-gradient-to-b group-hover:from-text to-btnBg transition duration-150 ease-linear absolute top-[-5rem] h-full w-full z-10"></div>
        <div className="w-full h-[12rem] z-20 relative  translate-y-[-5rem] transition duration-[5] ease-linear group-hover:translate-y-[0]">
          <button className="relative z-20 border-[1px] text-btn uppercase  border-btn mt-5 ml-5 rounded-2xl px-3 py-1 text-[.9rem]">
            {button}{" "}
          </button>
        </div>
        <img
          src={img}
          alt=""
          className="w-[20rem] absolute top-0 h-[25rem] group-hover:scale-[110%] transition duration-150 ease-linear"
        />
      </div>
      <p className="">{heading} </p>
      <p className="font-extralight">{foot}</p>
    </div>
  );
}

export default Insights;
