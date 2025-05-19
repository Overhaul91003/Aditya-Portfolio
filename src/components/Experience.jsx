import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { github } from "../assets";
import { certificate } from "../assets";

const ExperienceCard = ({ experience, onCertClick }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[100%] h-[100%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      {(experience.github_link || experience.certificate) && (
        <div className="flex items-center gap-4 mt-2">
          {experience.github_link && (
            <div
              onClick={() => window.open(experience.github_link, "_blank")}
              className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-white/10"
              title="View on GitHub"
            >
              <img
                src={github}
                alt="GitHub link"
                className="w-5 h-5 object-contain"
              />
            </div>
          )}

          {experience.certificate && (
            <div
              onClick={() => onCertClick(experience.certificate)}
              className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-white/10"
              title="View Completion Certificate"
            >
              <img
                src={certificate}
                alt="Certificate"
                className="w-5 h-5 object-contain"
              />
            </div>
          )}
        </div>
      )}

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (certImage) => {
    setSelectedCert(certImage);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  // Disable background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              onCertClick={openModal}
            />
          ))}
        </VerticalTimeline>
      </div>

      {/* Modal for certificate preview */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-start pt-24 bg-black bg-opacity-70"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-4 max-w-2xl max-h-[80vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-black text-3xl font-bold hover:text-red-600"
              style={{ fontSize: "32px" }}
            >
              ×
            </button>
            <img
              src={selectedCert}
              alt="Certificate"
              className="w-full h-auto object-contain rounded-md select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Experience, "work");


