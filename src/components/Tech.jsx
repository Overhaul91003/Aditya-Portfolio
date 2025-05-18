import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies I Have Worked With
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tech Stack.
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-28 h-28 p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-transform transform group-hover:scale-110">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-2 text-center text-sm text-gray-800 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");



