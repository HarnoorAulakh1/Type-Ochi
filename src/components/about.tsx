import { motion} from "framer-motion";
import { ImgaeScroll } from "./services/services";
import { GoArrowUpRight } from "react-icons/go";
import Loading from "../framer-motion/loading";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "./footer";

const data = [
  {
    name: "IHOR HULYAHRODSKYY",
    img: "./1a.jpeg",
    role: "Founder and Ceo",
  },
  {
    name: "KSENIIA PALAMARCHUK",
    img: "./2a.jpeg",
    role: "Presentation Designer",
  },
  {
    name: "ANNA SYROTA",
    img: "./3a.jpeg",
    role: "Founder and Ceo",
  },
  {
    name: "OLENA ZDERKA",
    img: "./4a.png",
    role: "Lead Designer",
  },
];

function About() {
  const control = useAnimation();
  useEffect(() => {
      setTimeout(() => {
        control.start({ width: "15%" });
      }, 1500);
  }, [control]);
  return (
    <div className="bg-back w-full pt-1 pb-5 ">
      <Loading text="about us" />
      <div className="font-fond w-full pl-8 leading-none md:leading-[6.5rem] text-[4rem] md:text-[8rem] text-text uppercase font-bold">
        <div className=" w-full h-full md:mt-[13%] mt-[25%]">
          <div >We are</div>
          <div className="flex flex-row items-center gap-1 md:gap-0 ">
            <motion.div
              className="rounded-xl w-0 overflow-hidden relative top-[-0.8rem] md:top-[-1.5rem]"
              transition={{ duration: 0.8, type: "spring" }}
              animate={control}
            >
              <div className="rounded-xl w-[5rem] md:w-[10rem] md:h-[6rem]">
                <img
                  src="./slide.jpeg"
                  alt=""
                  className="rounded-xl"
                />
              </div>
            </motion.div>
            <p> Ochi design</p>
          </div>
        </div>
      </div>
      <hr className="h-[1.5px] bg-text mt-[5rem] md:mt-[10rem]" />
      <div className="pl-8 flex flex-col md:flex-row gap-5 md:gap-[25rem] justify-between pr-5 text-text mt-5 font-light items-start">
        <p>About us:</p>
        <div className="flex flex-col w-[18rem] md:w-[15rem]">
          <p>
            In Ukrainian, ochi - means eyes. It's not just a beautiful word, but
            our philosophy. Almost everything that needs to be communicated is
            better shown than explained.
          </p>
          <br />
          <p>
            We believe a great presentation evokes interest and drives business
            results far better than any saying can. Hence, we founded ochi to
            help you persuade colleagues and clients by creating eye-opening
            presentations.
          </p>
        </div>
        <div className="group w-max flex flex-row gap-2 items-center">
          <button className="rounded-[2rem] px-4 py-[2px] text-text uppercase hover:text-back hover:bg-text transition duration-150 ease-linear border-[1.5px] border-text">
            about us
          </button>
          <div className="w-[2rem] h-[2rem] group-hover:border-[1px] border-text rounded-[2rem]">
            <div className="w-[2rem] h-[2rem] scale-0 group-hover:border-[1px] border-text bg-text rounded-[2rem] group-hover:scale-[100%] transition duration-200 ease-linear overflow-hidden flex justify-center items-center">
              <GoArrowUpRight className="w-[1.2rem] h-[1.2rem] text-back" />
            </div>
          </div>
        </div>
      </div>
      <p className="pl-8 text-[2rem] md:text-[3rem] text-text w-[95%] md:w-[60%] font-['Neue_Montreal'] mt-[5rem]">
        We save businesses from ugly and ineffective presentations.
      </p>
      <hr className="h-[1.5px] bg-text mt-[2rem] md:mt-[5rem]" />
      <div className="flex flex-col md:flex-row pl-8 pr-5 gap-[2rem] md:gap-[24rem]">
        <p>We are ochi design:</p>
        <div className="flex flex-col gap-5 w-[18rem]">
          <p>
            The team of designers, storytellers, and passionate collaborators,
            who work together to create industry-shifting presentations that win
            people's hearts and minds.
          </p>
          <p>
            And we strive to become one of the most recognizable & influential
            presentation agencies of the time who does that.
          </p>
        </div>
      </div>
      <div className="h-max md:h-[50rem] overflow-hidden rounded-[2rem] my-[5rem]">
        <ImgaeScroll img="./about.jpeg" />
      </div>
      <Crousal1 text="core of the team " data={data} />
      <Footer />
    </div>
  );
}

export function Card({data: data}: {data: { img: string; name: string; role: string }[]}) {
  const [index, set] = useState({ curr: 0, prev: 3 });
  const value = data[index.curr].name.split(" ");
  const { img, role } = data[index.curr];
  const value1 = data[index.prev].name.split(" ");
  const { img: img1, role: role1 } = data[index.prev];

  return (
    <div
      key={index.curr}
      className=" flex flex-col w-full h-full rounded-[1rem] mt-[1rem] pl-8 pt-5  relative justify-center items-center"
    >
      <motion.div
        onClick={() =>
          set((x) => {
            return { prev: x.curr, curr: x.curr == 3 ? 0 : x.curr + 1 };
          })
        }
        initial={{ scale: "95%", x: "5%" }}
        animate={{ scale: "100%", x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-back w-[95%] md:w-[80%] h-[20rem] md:h-[33rem] rounded-[1rem] mt-[1rem] pl-5 pt-5 relative z-50 flex flex-row"
      >
        <div className="text-text">
          <svg
            width="72"
            height="30"
            viewBox="0 0 72 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z"
              fill="currentColor"
            ></path>
            <path
              d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z"
              fill="currentColor"
            ></path>
            <path
              d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z"
              fill="currentColor"
            ></path>
            <path
              d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z"
              fill="currentColor"
            ></path>
            <path
              d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col gap-2 absolute right-5 text-text font-light">
          <div className="md:w-[19rem] w-[10rem] md:h-[20rem] rounded-xl overflow-hidden">
            <img src={img} alt="" />
          </div>
          <p>{role}</p>
        </div>
        <div className="flex flex-col absolute left-8 bottom-5">
          {value.map((item) => (
            <div className="text-text uppercase leading-none font-bold text-[2rem] md:text-[4rem] font-['Founders_Grotesk_Condensed']">
              {item}
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div key={index.curr} transition={{duration:.5}} initial={{height:"26rem"}} animate={{height:"30rem"}} className="bg-[#5c8c85] hidden absolute z-[10] md:block w-[76%] mt-[1rem] ml-[5rem] h-[30rem] rounded-[1rem]"></motion.div>
      <motion.div key={index.curr} transition={{duration:.4}} initial={{height:"24rem",x:"1rem",y:".5rem"}} animate={{height:"26rem",y:"0rem",x:"0rem"}} className="bg-[#1d6258] hidden md:block absolute z-[8]  w-[76%] mt-[1rem] ml-[7rem] h-[26rem] rounded-[1rem]"></motion.div>
      <motion.div
        initial={{ y: 0, x: 0 }}
        animate={{ y: "200%" }}
        transition={{ duration: 1, type: "spring" }}
        className="bg-back w-[78%] h-[33rem] rounded-[1rem] z-50 mt-[1rem] pl-8 pt-5 absolute top-[1rem] flex flex-row"
      >
        <div className="text-text">
          <svg
            width="72"
            height="30"
            viewBox="0 0 72 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z"
              fill="currentColor"
            ></path>
            <path
              d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z"
              fill="currentColor"
            ></path>
            <path
              d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z"
              fill="currentColor"
            ></path>
            <path
              d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z"
              fill="currentColor"
            ></path>
            <path
              d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col gap-2 absolute right-5 text-text font-light">
          <div className="w-[19rem] h-[20rem] rounded-xl overflow-hidden">
            <img src={img1} alt="" className="w-[19rem] h-[20rem]" />
          </div>
          <p>{role1}</p>
        </div>
        <div className="flex flex-col absolute left-8 bottom-5">
          {value1.map((item) => (
            <div className="text-text uppercase leading-none font-bold text-[4rem] font-fond">
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function Crousal1({
  text,
  data,
}: {
  text: string;
  data: { img: string; name: string; role: string }[];
}) {
  return (
    <div className="bg-primary flex flex-col overflow-hidden items-center gap-5 pb-[8rem] sticky top-[-22rem]">
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "-150%" }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className=" w-full bg-primary rounded-2xl "
      >
        <hr className="w-[250%]" />
        <h1 className="uppercase text-nowrap  bg-primary w-full leading-[100%] text-[20vw] font-['Founders_Grotesk_Condensed']  font-bold text-back">
          {text}
          {text}
          {text}
        </h1>
        <br />
      </motion.div>
      <hr className="h-[1px] w-full bg-white mb-[5rem] mt-[2rem]" />

      <Card data={data} />
    </div>
  );
}

export default About;
