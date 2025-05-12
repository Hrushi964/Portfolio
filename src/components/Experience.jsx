'use client'
import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'

// Experience data
const experiences = [
  {
    title: 'Project Intern',
    company: 'ISRO – SDSC SHAR',
    period: 'Feb 2025 - Mar 2025',
    achievements: [
      'Cleaned, transformed and visualized 31 years of real-time rainfall data, leading to a 20% improvement in data accuracy.',
      'Implemented Machine Learning and Deep Learning model for prediction that improved weather forecasting accuracy by 10%.'
    ],
    certificate: 'https://drive.google.com/file/d/1B6sybNTmd-raV9UnX7PX31-CZSljpXh9/view?usp=drive_link'
  },
  {
    title: 'Project Developer Intern',
    company: 'TECWICK TECHNOLOGIES PVT LTD',
    period: 'Dec 2024 – May 2025',
    achievements: [
      'Contributed to AI and ML projects, improving model performance by 10% through the optimization of algorithms.',
      'Engineered and Deployed end-to-end web applications with interactive user-friendly interfaces for real-time data monitoring.'
    ],
    certificate:'https://drive.google.com/file/d/1KcMBPPK-Y7Wnc9HzzecG-Y1W2bnt-h7Q/view?usp=drive_link'
  },
  {
    title: 'Developer Virtual Intern',
    company: 'SALESFORCE',
    period: 'Nov 2023 – Jan 2024',
    achievements: [
      'Designed 3 automation workflows using Apex, reducing manual Customer Relationship Management processes by 20%.',
      'Learned to automate Salesforce workflows and enhancing Customer Relationship Management process efficiency.'
    ],
    certificate: 'https://drive.google.com/file/d/1fJ45h-g7JFzHqvVKXhpTZx8HgWiOIDNQ/view?usp=sharing'
  },
  {
    title: 'Project Intern',
    company: 'CASPER LOGIC',
    period: 'May 2023 – Jun 2023',
    achievements: [
      'Worked on a deep learning-based sign language recognition system project, increasing recognition accuracy by 4%.',
      'Aimed to enhance accessibility for the hearing impaired using advanced AI-driven visual recognition techniques.'
    ],
    certificate:'https://drive.google.com/file/d/1J-0-ax-gMNQBIkAxkERCFrkqTMcYlQr4/view?usp=drive_link'
  }
]

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const cardVariants = {
  initial: { 
    scale: 1, 
    y: 0,
    boxShadow: "0 4px 24px 0 rgba(6,182,212,0.10)",
  },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { duration: 0.33, ease: "easeOut" }
  }
}

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 py-16 bg-gradient-to-br from-black via-gray-900 to-black"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8"
        variants={itemVariants}
      >
        Work <span className="text-white">Experience</span>
      </motion.h2>

      <div className="w-full max-w-4xl space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            className="relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-transparent px-7 py-8 transition-all duration-300 bg-gradient-to-br from-cyan-900/20 to-blue-900/10 backdrop-blur-xl"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            {/* Glowing border overlay */}
            <span
              className="pointer-events-none absolute inset-0 z-10 rounded-2xl border-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: '0 0 24px 0 #22d3ee88, 0 0 0 4px #22d3ee22',
                borderImage: 'linear-gradient(100deg, #06b6d4 0%, #3b82f6 100%) 1'
              }}
            />

            {/* Content */}
            <div className="relative z-20">
              {/* Title, Period, and Certificate Row */}
              <div className="flex items-center justify-between mb-1 w-full">
                {/* Title (left) */}
                <h3 className="text-xl font-bold text-white">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-4">
                  {/* Period (right, before button) */}
                  <span className="text-sm text-gray-400 font-medium">
                    {exp.period}
                  </span>
                  {/* Certificate (rightmost) */}
                  {exp.certificate && (
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 rounded-lg border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 whitespace-nowrap"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
              {/* Company (below title, left-aligned) */}
              <p className="text-cyan-400 font-medium mb-2">
                {exp.company}
              </p>
              {/* Achievements */}
              <ul className="space-y-2 mt-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
} 