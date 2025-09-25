import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Star, Calendar, ArrowRight } from 'lucide-react'
import { toast } from 'react-toastify'

const TouristDestinations = () => {
  const destinations = [
    {
      name: 'Kashmir Valley',
      location: 'Jammu & Kashmir',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      duration: '7 Days',
      highlights: ['Dal Lake', 'Gulmarg'],
      description: 'Experience the paradise on earth with stunning Dal Lake, Mughal gardens, and snow-capped mountains.'
    },
    {
      name: 'Manali Adventure',
      location: 'Himachal Pradesh',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      duration: '5 Days',
      highlights: ['Rohtang Pass', 'Solang Valley'],
      description: 'Adventure awaits in the beautiful hill station with river rafting, paragliding, and mountain trekking.'
    },
    {
      name: 'Rishikesh Spiritual',
      location: 'Uttarakhand',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      duration: '4 Days',
      highlights: ['Ganga Aarti', 'Laxman Jhula'],
      description: 'Find inner peace in the yoga capital of the world with spiritual experiences and adventure sports.'
    },
    {
      name: 'Shimla Heritage',
      location: 'Himachal Pradesh',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.6,
      duration: '6 Days',
      highlights: ['Mall Road', 'Christ Church'],
      description: 'Explore the colonial charm of the former British summer capital with heritage walks and scenic beauty.'
    },
    {
      name: 'Nainital Lakes',
      location: 'Uttarakhand',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      duration: '5 Days',
      highlights: ['Naini Lake', 'Snow View Point'],
      description: 'Discover the lake district of India with beautiful Naini Lake, boating, and hill station charm.'
    },
    {
      name: 'Leh Ladakh',
      location: 'Jammu & Kashmir',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      duration: '10 Days',
      highlights: ['Pangong Lake', 'Nubra Valley'],
      description: 'Experience the moonland of India with high-altitude desert landscapes and Buddhist monasteries.'
    }
  ]

  const handleSelectDestination = (destination) => {
    // Store selected destination in localStorage
    localStorage.setItem('selectedDestination', JSON.stringify(destination))
    
    // Trigger custom event to notify other components
    window.dispatchEvent(new Event('destinationSelected'));
    
    // Show success toast with emoji
    toast.success(`🚌 ${destination.name} selected! Now choose your travel plan below.`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
    
    // Scroll to travel plans section
    setTimeout(() => {
      const travelPlansSection = document.getElementById('travel-plans')
      if (travelPlansSection) {
        travelPlansSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 1000)
  }

  return (
    <section className="py-20 bg-gray-50" id="destinations">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gray-500 text-lg font-medium block mb-2">Step 1: Choose Your Destination</span>
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Destinations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            First, select your dream destination from our carefully curated travel experiences. 
            After selection, you'll choose your preferred travel plan and get personalized pricing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  {destination.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 text-gray-500 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{destination.name}</h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{destination.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{destination.duration}</span>
                  </div>
                  <span className="text-blue-600 text-sm font-medium bg-blue-50 px-3 py-1 rounded-full">
                    Step 1: Select First
                  </span>
                </div>
                
                <button
                  onClick={() => handleSelectDestination(destination)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Select This Destination</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Destinations Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 relative"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-3xl"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMjIiIGN5PSIyMiIgcj0iMiIvPjxjaXJjbGUgY3g9IjQyIiBjeT0iNDIiIHI9IjIiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          
          <div className="relative max-w-6xl mx-auto p-12">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full mb-6 shadow-2xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"></path>
                </svg>
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-4">
                Discover India's Hidden Treasures
              </h3>
              
              <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
                From snow-capped mountains to golden beaches, explore every corner of incredible India
              </p>
            </div>

            {/* States Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* North India */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">�️</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">North India</h4>
                    <p className="text-gray-400 text-sm">Mountains & Heritage</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/20 text-white text-xs rounded-full">Himachal Pradesh</span>
                  <span className="px-3 py-1 bg-white/20 text-white text-xs rounded-full">Uttarakhand</span>
                  <span className="px-3 py-1 bg-white/20 text-white text-xs rounded-full">Rajasthan</span>
                </div>
              </div>

              {/* South India */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🌴</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">South India</h4>
                    <p className="text-gray-400 text-sm">Temples & Backwaters</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/20 text-white text-xs rounded-full">Kerala</span>
                  <span className="px-3 py-1 bg-white/20 text-white text-xs rounded-full">Tamil Nadu</span>
                  <span className="px-3 py-1 bg-white/20 text-white text-xs rounded-full">Karnataka</span>
                </div>
              </div>

              {/* East & West India */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">�️</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">East & West</h4>
                    <p className="text-gray-400 text-sm">Beaches & Culture</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/20 text-white text-xs rounded-full">Goa</span>
                  <span className="px-3 py-1 bg-white/20 text-white text-xs rounded-full">West Bengal</span>
                  <span className="px-3 py-1 bg-white/20 text-white text-xs rounded-full">Maharashtra</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl p-8 border border-emerald-400/30 mb-8">
                <h4 className="text-2xl font-bold text-white mb-3">
                  Want to Explore Beyond These?
                </h4>
                <p className="text-gray-300 text-lg mb-6">
                  We have curated packages for 28+ states across India. From popular destinations to hidden gems!
                </p>
                
                <button
                  onClick={() => {
                    const message = `Hi! I'm interested in exploring destinations beyond the featured ones on your website.\n\nI'd like to know about:\n• Travel packages for different Indian states\n• Popular and offbeat destinations\n• Customized itineraries\n• Pricing and availability\n\nCould you please help me plan my trip?`;
                    const phoneNumber = '+919596274300';
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                    toast.success('🌍 Connecting you with our destination experts!');
                  }}
                  className="group inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-emerald-500/25"
                >
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.786"/>
                  </svg>
                  <span>Discover All Destinations</span>
                </button>
              </div>

              <div className="flex justify-center items-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>28+ States</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Custom Plans</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TouristDestinations
