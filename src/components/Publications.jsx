'use client'
import { motion } from 'framer-motion'

const publications = [
  {
    title: 'Shop Sense: An AI-Driven Search, Forecasting, and Recommendation System',
    publication: 'International Journal of Innovative Research in Technology (IJIRT)',
    status: 'Published',
    pdf: '/pub.pdf'
  },
  {
    title: 'Shop Sense: An AI-Driven Search, Forecasting, and Recommendation System',
    publication: 'European Conference on Artificial Intelligence (ECAI)',
    status: 'Accepted',
    pdf: ''
  }
]

export default function Publications() {
  return (
    <motion.section
      id="publications"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 py-16 bg-gradient-to-br from-black via-gray-900 to-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
        Journal <span className="text-white">Publications</span>
      </h2>
      <div className="w-full max-w-4xl space-y-6">
        {publications.map((pub, idx) => (
          <motion.div
            key={pub.title + pub.publication}
            className="relative group overflow-hidden rounded-2xl border-2 border-transparent px-7 py-8 transition-all duration-300 bg-gradient-to-br from-cyan-900/20 to-blue-900/10 backdrop-blur-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{pub.title}</h3>
                <p className="text-cyan-400 font-medium">{pub.publication}</p>
              </div>
              <div className="flex items-center gap-4 mt-2 md:mt-0">
                <span className={`text-sm font-semibold ${pub.status === 'Published' ? 'text-green-400' : 'text-yellow-400'}`}>
                  {pub.status}
                </span>
                {pub.status === 'Published' && pub.pdf && (
                  <a
                    href={pub.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-lg border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 whitespace-nowrap"
                  >
                    View Publication
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
