import { Links } from "../approach";
import Open from "./open";
import Footer from "../footer";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { createContext, useState } from "react";
import { useContext } from "react";
import { useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Loading from "../../framer-motion/loading";

const data = [
  {
    num: 1,
    name: "Discovery",
    img: "./open.png",
    para: "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5",
  },
  {
    num: 2,
    name: "Storytellign",
    img: "./open.png",
    para: "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5",
  },
  {
    num: 3,
    name: "Design",
    img: "./open.png",
    para: "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5",
  },
  {
    num: 4,
    name: "Feedback",
    img: "./open.png",
    para: "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5",
  },
  {
    num: 5,
    name: "Delivery",
    img: "./open.png",
    para: "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5",
  },
];

const data1 = [
  {
    img: "./4.png",
    heading: "Presentation Design",
    buttons: ["Company Presentation", "Sales Deck", "Investor Deck"],
  },
  {
    img: "./3.png",
    heading: "Branding",
    buttons: [
      "Brand Identity",
      "Branded Template",
      "Redesign",
      "Agency",
      "Big News Deck",
    ],
  },
  {
    img: "./5.jpeg",
    heading: "Content",
    buttons: ["Copy Writing", "Design Research", "Review"],
  },
  {
    img: "./8.jpeg",
    heading: "Consulting",
    buttons: ["Audit", "Policy Deck & Playbook"],
  },
];

const reviews = [
  {
    img: "./review1.png",
    i: "Karman Ventures",
    name: "William Barnes",
    para: "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch ",
  },
  {
    img: "./review.png",
    i: "Premium Blend",
    name: "Ellen Kim",
    para: "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch",
  },
  {
    img: "./review3.jpeg",
    i: "Oderlion",
    name: "Stefan Strohmer",
    para: "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch",
  },
  {
    img: "./review4.png",
    i: "Karman Ventures",
    name: "Becky Chastain",
    para: "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch",
  },
  {
    img: "./review5.png",
    i: "Medalla",
    name: "Brendan Goss",
    para: "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch",
  },
];

const HoverContext = createContext<{
  click: {
    i: number;
    img1: string;
    img2: string;
    animate1: { x: string[] };
    animate2: { x: string[] };
    times: number[];
  };
  set: React.Dispatch<
    React.SetStateAction<{
      i: number;
      img1: string;
      img2: string;
      animate1: { x: string[] };
      animate2: { x: string[] };
      times: number[];
    }>
  >;
}>({
  click: {
    i: 0,
    img1: "",
    img2: "",
    animate1: { x: ["0", "0"] },
    animate2: { x: ["0", "0"] },
    times: [0, 0.5],
  },
  set: () => {},
});

function Services() {
  const [click, set] = useState<{
    i: number;
    img1: string;
    img2: string;
    animate1: { x: string[] };
    animate2: { x: string[] };
    times: number[];
  }>({
    i: 0,
    img1: "",
    img2: "",
    animate1: { x: ["0", "0"] },
    animate2: { x: ["0", "0"] },
    times: [0, 0.5],
  });
  console.log(click);
  return (
    <HoverContext.Provider value={{ click, set }}>
      <Loading text="services" />
      <div className={`h-max w-full bg-back overflow-hidden`}>
        <div className="bg-back pt-[7rem] md:pt-[10rem] pb-[5rem] overflow-hidden">
          <h1 className="font-['Founders_Grotesk_Condensed'] text-[4rem] pl-8 uppercase font-bold text-text md:text-[7rem]">
            services
          </h1>
          <hr className="h-[1.5px] bg-text md:m-0 mt-10" />
          <p className="flex flex-wrap items-center text-text justify-between md:justify-start font-['Neue_Montreal'] text-[2rem] md:text-[3rem] gap-0 md:gap-5 pl-8">
            We create <Links name=" eye-catching" /> and{" "}
            <Links name="eye-opening " /> presentations that educate, inspire
            and influence action.
          </p>
          <br />
          <br />
          <hr className="h-[1.5px] bg-text" />
          <div className="flex flex-col md:flex-row gap-5 md:gap-[25rem]  mt-5 text-[.8rem] md:text-[1rem] pl-8 md:h-[30rem]">
            <p>We do this by following simple approach:</p>
            <div className="flex flex-col flex-wrap gap-5 pr-[5rem] md:w-[15rem]">
              <div>
                <p className="underline">Goal defines it all</p>
                <br />
                <p>
                  What do you want to achieve? Understanding the purpose of your
                  presentation allows us to tailor it to ensure it hits the mark
                  and drives results.
                </p>
              </div>
              <div>
                <p className="underline">Audience is the hero</p>
                <br />
                <p>
                  Who is it for? What do they want? Why does it matter to them?
                  We need to know your audience well enough to deliver a
                  personalized presentation that they truly care about.
                </p>
              </div>
              <div>
                <p className="underline">Context makes a difference</p>
                <br />
                <p>
                  When do you present? Online or live? At a sales meeting, at a
                  conference, or just sending a cold email? We knit the context
                  together to decide the style of the presentation.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[5rem] md:m-0">
            <p className="pl-8 text-[2rem] md:text-[3rem]">Holistic process</p>
            <br />
            {data.map((item, i) => (
              <Open
                name1={`0${i + 1}. Phase`}
                name={item.name}
                img={item.img}
                para={item.para}
              />
            ))}
          </div>

          <hr className="border-t-[.5px] h-[1px] bg-text" />
        </div>
        <div className="bg-[#CDEA68] h-max w-full rounded-md py-[5rem] text-[2rem] md:text-[3.2rem] pb-[5rem]">
          <p className=" text-text font-['Neue_Montreal']  w-[81%] pl-8  gap-5 leading-none items-center flex flex-wrap flex-row">
            <Links name="Let's be honest" /> There are really no excuses to have
          </p>
          <p className=" text-text font-['Neue_Montreal']  w-[81%] pl-8  gap-5 leading-none items-center">
            a bad presentation anymore. No one has time for poorly communicated
            ideas. Focus on what you do best — growing your business, while we
            do our best
          </p>
          <p className=" text-text font-['Neue_Montreal']  pl-8  w-[81%] gap-5 leading-none items-center flex flex-wrap flex-row">
            at
            <Links name=" making your presentations awesome." />
          </p>
          <br /> <br />
          <br />
          <hr className="h-[.5px] border-0 bg-text" />
          <br />
          <div className="flex flex-col md:flex-row gap-5 md:gap-[10rem] text-[.8rem] h-max md:h-[30rem] w-full">
            <p className="pl-8 font-extralight ">Our Capabilities</p>
            <div className="flex flex-row gap-0 md:gap-[10rem] pl-8">
              <div className="md:w-[20rem] w-[10rem]  h-full flex flex-col my-auto gap-[8rem] overflow-hidden">
                <div className="md:w-[15rem] w-[10rem] h-[10rem] rounded-xl relative overflow-hidden ">
                  <motion.div
                    className="md:w-[15rem] w-[10rem] h-[10rem] relative z-[30] bg-[#CDEA68]"
                    animate={click.animate1}
                    transition={{ duration: 1, times: click.times }}
                  ></motion.div>
                  <div className="md:w-[15rem] w-[10rem] h-[10rem] rounded-xl z-[10] absolute top-0">
                    <img
                      className="md:w-[15rem] w-[10rem] rounded-xl"
                      src={click.img1}
                      alt=""
                    />
                  </div>
                </div>

                <div className="md:w-[15rem] w-[10rem] h-[10rem] rounded-xl relative overflow-hidden ">
                  <motion.div
                    className="w-[15rem] h-[10rem] relative z-[30] bg-[#CDEA68]"
                    animate={click.animate2}
                    transition={{ duration: 1, times: click.times }}
                  ></motion.div>
                  <div className="md:w-[15rem] w-[10rem] h-[10rem] rounded-xl z-[10] absolute top-0">
                    <img
                      className="md:w-[15rem] w-[10rem] h-[10rem] rounded-xl "
                      src={click.img2}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[2rem] md:gap-[5rem] flex-wrap overflow-hidden w-max pr-10">
                {data1.map((item, i) => (
                  <Col
                    heading={item.heading}
                    img={item.img}
                    buttons={item.buttons}
                    i={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative top-[-2rem] pt-[5rem] bg-back rounded-2xl">
          <p className="pl-8 text-[3rem]">Client's reviews</p>
          <br />
          {reviews.map((item) => (
            <Open
              name1={item.i}
              name={item.name}
              img={item.img}
              para={item.para}
            />
          ))}
          <hr className="border-t-[.5px] h-[1px] bg-text" />
        </div>
        <ImgaeScroll img="./bg-slide.png" />
        <Footer />
      </div>
    </HoverContext.Provider>
  );
}

export function Button({
  name,
  img,
  i,
}: {
  img: string;
  i: number;
  name: string;
}) {
  const { set } = useContext(HoverContext);
  return (
    <div
      className="group w-max flex flex-row gap-2 items-center"
      onMouseEnter={() =>
        set((x) => {
          return {
            i: i,
            img1: i == 0 || i == 2 ? img : x.img1,
            img2: i == 1 || i == 3 ? img : x.img2,
            animate1: (i == 0 || i == 2) ? { x: ["0", "100%", "-100%"] }: x.animate1,
            animate2: (i == 1 || i == 3) ? { x: ["0", "100%", "-100%"] }: x.animate2,
            times: [0, 0.5, 0.5],
          };
        })
      }
      onMouseLeave={() =>
        set((x) => {
          return {
            i: i,
            img1: i == 0 || i == 2 ? img : x.img1,
            img2: i == 1 || i == 3 ? img : x.img2,
            animate1: i == 0 || i == 2 ? { x: ["-100%", "0"] } : x.animate1,
            animate2: i == 1 || i == 3 ? { x: ["-100%", "0"] } : x.animate2,
            times: [0, 0.5],
          };
        })
      }
    >
      <button className="rounded-[2rem] px-4 py-[2px] text-text uppercase hover:text-back hover:bg-text transition duration-150 ease-linear border-[1.5px] border-text">
        {name}
      </button>
      <div className="w-[2rem] h-[2rem] group-hover:border-[1px] border-text rounded-[2rem]">
        <div className="w-[2rem] h-[2rem] scale-0 group-hover:border-[1px] border-text bg-text rounded-[2rem] group-hover:scale-[100%] transition duration-200 ease-linear overflow-hidden flex justify-center items-center">
          <GoArrowUpRight className="w-[1.2rem] h-[1.2rem] text-back" />
        </div>
      </div>
    </div>
  );
}

function Col({
  i,
  img,
  heading,
  buttons,
}: {
  i: number;
  img: string;
  heading: string;
  buttons: string[];
}) {
  return (
    <div className="flex flex-col gap-2 w-max">
      <div className="flex flex-row gap-2 items-center uppercase">
        <div className="w-[.8rem] h-[.8rem] bg-text rounded-[2rem]"></div>
        <p>{heading}</p>
      </div>
      {buttons.map((item) => (
        <Button name={item} img={img} i={i} />
      ))}
    </div>
  );
}

export function ImgaeScroll({ img }: { img: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "30%"]);

  return (
    <div className="overflow-hidden h-max md:h-[70rem] rounded-xl  w-[95%] m-auto">
      <motion.img src={img} ref={ref} style={{ y: y }} className="rounded-xl" />
    </div>
  );
}

export default Services;
