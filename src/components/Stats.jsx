import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, MapPin, Calendar } from 'lucide-react'

const AnimatedNumber = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const numericValue = parseInt(value.replace(/\D/g, ''))
  
  useEffect(() => {
    if (isInView) {
      let startTime = null
      // Moderate duration for different numbers
      const duration = numericValue <= 10 ? 1200 : numericValue <= 100 ? 1800 : 2200
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        const easeOutCubic = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(numericValue * easeOutCubic))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [isInView, numericValue])
  
  return <span ref={ref}>{count}{suffix}</span>
}

const Stats = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: '500+',
      label: 'Happy Travelers',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      number: '50+',
      label: 'Destinations',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      number: '5+',
      label: 'Years Experience',
      color: 'from-purple-500 to-pink-600'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Let us help you create memories that will last a lifetime. Explore the breathtaking beauty 
            of Kashmir, Himachal Pradesh, and Uttarakhand with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#destinations"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Browse Packages
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} text-white mb-4`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                <AnimatedNumber value={stat.number} suffix="+" />
              </div>
              <div className="text-white/80 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
