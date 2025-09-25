import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Award, Globe, Headphones } from 'lucide-react'

const WhyChoose = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: '100% Safe & Secure',
      description: 'Your safety is our priority with 24/7 support',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Award Winning Service',
      description: 'Recognized globally for exceptional travel experiences',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Worldwide Destinations',
      description: 'Explore 200+ destinations across all continents',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: '24/7 Support',
      description: 'Round the clock assistance for all your travel needs',
      color: 'from-purple-500 to-pink-600'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              WanderLust?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to making your travel dreams come true with unparalleled service and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
