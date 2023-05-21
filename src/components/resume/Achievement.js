import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Published Author</p>
          <h2 className="text-4xl font-bold">My Books</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Daastan-e-Swanchan"
            subTitle="Available on GOOGLE PLAY"
            result="Published"
            des="E-book on micro tales"
          />
          <ResumeCard
            title="SAMPARK"
            subTitle="Available on Amazon and Flipkart"
            result="Published"
            des="Hardcopy on poetries"
          />
          <ResumeCard
            title="Antarman Ki Awaaz"
            subTitle="Available on Amazon, Flipkart and Google Play"
            result="Published"
            des="Hardcopy on poetries"
          />
               <ResumeCard
            title="Baarish"
            subTitle="Available on Amazon and Flipkart"
            result="Published"
            des="Hardcopy on poetries on rainy season"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;