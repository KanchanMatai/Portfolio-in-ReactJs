import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2015</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MBA (Human Resource Management)"
            subTitle="Indira Gandhi National Open University"
            result="63%"
            des="IGNOU"
          />
          <ResumeCard
            title="B.E.(Electronics & Communication)"
            subTitle="Rajiv Gandhi Technical University"
            result="69.06%"
            des = "Vindhya Institute of Technology & Science, Indore"
          
          />
          <ResumeCard
            title="B.Ed"
            subTitle="Devi Ahliya Vishwavidyalaya, Indore"
            result="72%"
            des="Sri Jain Diwakar Mahavidyala"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[auto] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front End Developer (Intern)"
            subTitle="Tech Forest, Indore (December 2022 - March 2023)"
            result= "INDORE"
            des="Worked as an intern"
          />
          <ResumeCard
            title="SME (Mathematics and Non Verbal Reasoning)"
            subTitle="GOTO11PLUS - (June 2021 - April 2023)"
            result="UNITED KINGDOM"
            des="Worked as an SME "
          />
          <ResumeCard
            title="Medi-Caps International School"
            subTitle="PRT English (2016 - 2018)"
            result="INDORE"
            des="Worked as an English teacher"
          />
           <ResumeCard
            title="Delhi International School"
            subTitle="PRT Mathematics (2015 - 2016)"
            result="INDORE"
            des="Worked as a Maths teacher"
          />
            <ResumeCard
            title="National Public School"
            subTitle="PRT English (2013 - 2015)"
            result="INDORE"
            des="Worked as an English teacher"
          />
           <ResumeCard
            title="Mother's Pet International School"
            subTitle="PRT Mathematics (2012 - 2013)"
            result="INDORE"
            des="Worked as a Maths teacher"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education