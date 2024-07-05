import { motion, useAnimation } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";

export function Links({ name, handle }: { name: string; handle: () => void }) {
  const control = useAnimation();
  const animate = { x: ["0%", "100%", "-100%", "0"] };
  return (
    <motion.div
      className="group cursor-pointer h-max overflow-hidden w-max"
      onMouseEnter={() => control.start(animate)}
      onMouseLeave={() => control.start({ x: "0%" })}
      onClick={handle}
    >
      <p className="w-max leading-none">{name}</p>
      <motion.div
        className="flex flex-row overflow-hidden"
        animate={control}
        transition={{
          duration: 0.5,
          times: [0, 0.5, 0.5, 1],
          ease: "linear",
          type: "keyframes",
        }} // Modify this line
      >
        <div
          className={`bg-text w-full h-[1px] duration-150 ease-in-out`}
        ></div>
      </motion.div>
    </motion.div>
  );
}

function Approach() {
  const ref = useRef(null);
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y1 = useTransform(scrollYProgress1, [0, 1], ["0", "-15%"]);
  const [state, set] = useState(false);
  return (
    <motion.div
      ref={ref}
      style={{ y: y1 }}
      className="bg-[#CDEA68] h-max w-full z-[60] relative pb-[4rem] mb-[10rem] md:mb-[40rem]"
    >
      <div className="flex flex-wrap w-[81%] text-text text-[1.6rem] leading-tight md:leading-normal md:text-[3rem] font-['Neue_Montreal'] ml-8 pr-2 pt-20">
        <h1>Ochi is a strategic partner for fast-growing tech
          businesses that need to <span>raise funds</span>, sell products,explain complex ideas, and hire great people.</h1>
      </div>
      <hr className="bg-text h-[1px] border-0 mt-10 font-['Neue_Montreal']" />
      <div className="flex gap-7 md:gap-[20rem] md:flex-row flex-col  w-full text-text font-light text-[1rem] px-10 pt-5">
        <p>What you can expect:</p>

        <div className="flex flex-col gap-5">
          <p>
            We create tailored presentations to help <br /> you persuade your
            colleagues, clients, or <br /> investors. Whether it's live or
            digital, <br /> delivered for one or a hundred people.
          </p>
          <p>
            We believe the mix of strategy and <br /> design (with a bit of
            coffee) is what <br /> makes your message clear, convincing, <br />{" "}
            and captivating.
          </p>
        </div>
        <div className="md:pt-[7rem]">
          <p>Social</p>
          <br />
          <Links name="Instagram" />
          <Links name="Behance" />
          <Links name="Facebook" />
          <Links name="Linkedin" />
        </div>
      </div>
      <hr className="bg-text h-[1px] border-0 mt-10" />
      <div className="flex flex-col md:flex-row gap-7 md:gap-0 justify-between pl-10 pt-10 font-['Neue_Montreal'] pr-10 sticky top-0">
        <div className="flex flex-col gap-3 md:gap-0 ">
          <p className=" text-[2rem] md:text-[4rem]">Our approach:</p>
          <button
            onMouseEnter={() => set(true)}
            onMouseLeave={() => set(false)}
            className="group text-[1rem] font-regular flex flex-row gap-[2rem] items-center text-back bg-text rounded-[2rem] w-[12rem] pl-8 py-4 h-[5rem]"
          >
            <p>Read more</p>{" "}
              <div className="w-[2rem] h-[2rem] scale-[20%] group-hover:border-[1px] bg-back rounded-[2rem] group-hover:scale-[100%] transition duration-200 ease-linear overflow-hidden flex justify-center items-center">
                <GoArrowUpRight className="w-[1.2rem] h-[1.2rem] text-text" />
              </div>
          </button>
        </div>
        <motion.div
          animate={{ scale: state ? 0.98 : 1 }}
          className="overflow-hidden rounded-[1rem] "
          transition={{ duration: 0.5, ease: "linear" }}
        >
          <motion.img
            animate={{ scale: state ? 1.08 : 1 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className={`rounded-[1rem] h-[20rem] w-[35rem] md:w-[40rem] md:h-[30rem] ease-linear duration-100`}
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Approach;
