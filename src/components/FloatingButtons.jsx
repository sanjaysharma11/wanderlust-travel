import React from 'react'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      <motion.a
        href="tel:+919596274300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors group"
      >
        <Phone className="w-6 h-6 group-hover:animate-bounce" />
      </motion.a>
      
      <motion.a
        href="https://wa.me/919596274300"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors group"
      >
        <WhatsAppIcon className="w-6 h-6 group-hover:animate-bounce" fill="white" />
      </motion.a>
    </div>
  )
}

export default FloatingButtons
