import React, { useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

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

      <div className="relative flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="w-28 h-28 relative"
            onMouseEnter={() => setHoveredTech(technology.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <BallCanvas icon={technology.icon} />
            {hoveredTech === technology.name && (
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-md">
                {technology.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");

