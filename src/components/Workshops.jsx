'use client'
import { motion } from 'framer-motion'

const workshops = [
  {
    name: 'AI and ML',
    organization: 'IIT Bhubaneswar | EI Systems',
    certificate: 'https://drive.google.com/file/d/18OYwCEfqP-v_XWBMQxduhBWgfQtX7r1m/view?usp=drive_link' // Replace with your real link
  },
  {
    name: 'Blockchain Technology',
    organization: 'IBC Media | Polkadot',
    certificate: 'https://drive.google.com/file/d/18gUCJxuP8f_W0BwGhLfTvpy_LZbj4svX/view?usp=drive_link' // Replace with your real link
  }
]

export default function Workshops() {
  return (
    <motion.section
      id="workshops"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 py-16 bg-gradient-to-br from-black via-gray-900 to-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
        Hackathons <span className="text-white"> / Workshops</span>
      </h2>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {workshops.map((workshop, idx) => (
          <motion.div
            key={workshop.name + idx}
            className="w-full max-w-xs bg-[#000000]/90 border-2 border-cyan-500/20 rounded-xl p-6 shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-sm flex flex-col items-center"
            initial={{ x: idx === 0 ? -150 : 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: idx * 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-2">{workshop.name}</h3>
            <p className="text-gray-300 text-sm mb-3">{workshop.organization}</p>
            {workshop.certificate && (
              <a
                href={workshop.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-2 rounded-lg border-2 border-cyan-400 text-cyan-400 font-semibold text-center hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                View Certificate
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
