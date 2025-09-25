import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Hero from './components/Hero'
import TravelPlans from './components/TravelPlans'
import WhyChoose from './components/WhyChoose'
import TouristDestinations from './components/TouristDestinations'
import Testimonials from './components/Testimonials'
import Stats from './components/Stats'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TouristDestinations />
      <TravelPlans />
      <WhyChoose />
      <Testimonials />
      <Stats />
      <Footer />
      <FloatingButtons />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App
