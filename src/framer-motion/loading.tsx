import { motion } from "framer-motion";
import { useEffect } from "react";

function Loading({ text }: { text: string }) {
  useEffect(() => {
    const promise = new Promise<void>((resolve, reject) => {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        resolve();
      }, 1700);
    });
    promise.then(() => {
      document.body.style.overflow = "auto";
    });
  }, []);
  return (
    <motion.div
      className="fixed top-0 z-[99999] bg-text h-[50rem] w-full overflow-hidden"
      // animate={{
      //   height: ["0", "100%", "100%", "0"],
      //   bottom: ["0", "0", "0", "100%"],
      // }}
      animate={{
        y: ["0%", "0%", "-100%"],
      }}
      transition={{ duration: 2, times: [0, 0.5, .8], type: "keyframes" }} // Animation duration in seconds
    >
      <motion.div
        className="overflow-hidden"
        style={{
          position: "absolute",
          top: "40%",
          left: "15%",
          color: "white", // Optional: for better text visibility
        }}
      >
        <motion.p
          className="text-[4rem] font-['Neue_Montreal'] uppercase"
          initial={{ y: "0%" }}
          animate={{ y: ["0", "0", ".6"] }}
          transition={{ duration: 1, stiffness: 120, times: [0.1, 0.3] }}
        >
          {text}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default Loading;
