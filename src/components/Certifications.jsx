'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { BsArrowUpRight } from 'react-icons/bs'

// --- Projects array ---
const certifications = [
  {
    name: 'Young Professional',
    organization:'TCS ION', 
    image: '/tcs1.png',
    duration:'30-06-2023 to 15-07-2023',
    certificate:'https://drive.google.com/file/d/1DAKU-jk4hD5ZKLQZ7f_g546Ba6E5M_FP/view?usp=drive_link'
  },
  {
    name: 'Python',
    organization:'Cisco', 
    image: '/cisco.png',
    duration:'20-04-2023 to 19-06-2024',
    certificate:'https://drive.google.com/file/d/1LvPp0fmiYxoN8D5jO0FV9v4dXyAi8xp1/view?usp=drive_link'
  },

  {
    name: 'AWS Certified Security-Speciality',
    organization:'Infosys | Springboard', 
    image: '/infosys.webp',
    duration:'01-06-2023 to 30-07-2023',
    certificate:'https://drive.google.com/file/d/13oAeKv57pgvSnIl4imn6gMPtZn18U0AF/view?usp=drive_link'
  },
  {
    name: 'Networking',
    organization:'Cisco', 
    image: '/cisconet.png',
    duration:'01-04-2023 to 31-05-2023',
    certificate:'https://drive.google.com/file/d/1nlN8tHHq7pegs0-KE77jKvdOtuypZY8I/view?usp=drive_link'
  },
  {
    name: 'Google AI Essentials',
    organization:'Google | Coursera', 
    image: '/google.webp',
    duration:'25-04-2024 to 25-06-2024',
    certificate:'https://drive.google.com/file/d/1rgHZye4V5lZ7obhSrawVzEB945iB3nep/view?usp=drive_link'
  },
  {
    name: 'Tableau',
    organization:'edX | RIT', 
    image: '/edx.webp',
    duration:'01-03-2024 to 30-03-2024',
    certificate:'https://drive.google.com/file/d/1bMAu_5uBpCJBR4imr6gzr-Twe-VNV5VW/view?usp=drive_link'
  }
]

// --- Animation duration (seconds) ---
const DURATION = 22

export default function Projects() {
  // --- Tech icons map ---


  // Duplicate projects for seamless infinite scroll
  const allCertifications = [...certifications, ...certifications]

  return (
    <motion.section
      id="certifications"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 py-16 bg-gradient-to-br from-black via-gray-900 to-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
        Professional <span className="text-white">Certifications</span>
      </h2>

      {/* Infinite auto-scrolling carousel */}
      <div className="relative w-full max-w-6xl overflow-hidden py-8">
        <motion.div
          className="flex gap-8"
          style={{ width: 'max-content' }}
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            duration: DURATION,
          }}
        >
          {allCertifications.map((cert, idx) => (
            <div
              key={cert.name + idx}
              className="relative w-[280px] flex-shrink-0 bg-[#000000]/90 border-2 border-cyan-500/20 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-sm group transition-all duration-300 hover:scale-105 hover:border-cyan-400"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  {cert.name}
                  <motion.span
                    className="text-cyan-400"
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <BsArrowUpRight className="inline-block text-sm" />
                  </motion.span>
                </h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                  {cert.organization}
                </p>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                  {cert.duration}
                </p>
                {/* View Certificate Button */}
                {cert.certificate && (
                  <a
                    href={cert.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 px-4 py-2 rounded-lg border-2 border-cyan-400 text-cyan-400 font-semibold text-center hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </motion.div>
        {/* Optional: Overlay gradient for fade effect on edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black via-transparent to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black via-transparent to-transparent z-10" />
      </div>

      {/* Navigation hint */}
      <div className="mt-6 flex gap-2 items-center text-cyan-400/60 text-sm font-medium">
        <motion.span 
          animate={{ x: [-5, 0, -5] }} 
          transition={{ duration: 1.5, repeat: Infinity }}
        >←</motion.span>
        Auto-scrolling carousel
        <motion.span 
          animate={{ x: [0, 5, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity }}
        >→</motion.span>
      </div>
    </motion.section>
  )
}
