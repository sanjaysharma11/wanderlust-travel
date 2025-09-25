import React, { useState, useEffect } from 'react';
import { CreativePricing } from './ui/creative-pricing';
import WhatsAppIcon from './WhatsAppIcon';
import { toast } from 'react-toastify';

const TravelPlans = () => {
  const [selectedDestination, setSelectedDestination] = useState('');
  const [destinationDetails, setDestinationDetails] = useState(null);

  useEffect(() => {
    const updateDestinationData = () => {
      const destinationData = localStorage.getItem('selectedDestination');
      
      if (destinationData) {
        try {
          const parsedData = JSON.parse(destinationData);
          setDestinationDetails(parsedData);
          setSelectedDestination(parsedData.name);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Error parsing destination data:', error);
          // Fallback to treat as string if parsing fails
          setSelectedDestination(destinationData);
        }
      } else {
        // Clear data if no destination is selected
        setDestinationDetails(null);
        setSelectedDestination('');
      }
    };

    // Initial load
    updateDestinationData();

    // Listen for storage changes (when localStorage is updated)
    window.addEventListener('storage', updateDestinationData);
    
    // Custom event listener for same-page localStorage updates
    window.addEventListener('destinationSelected', updateDestinationData);

    return () => {
      window.removeEventListener('storage', updateDestinationData);
      window.removeEventListener('destinationSelected', updateDestinationData);
    };
  }, []);

  const travelTiers = [
    {
      name: 'Pro',
      icon: '🎯',
      description: 'Budget-Friendly travel with essential comfort',
      color: 'green',
      features: [
        'Travel in Sleeper Class / General Train',
        'Budget hotels / guesthouses stay',
        'No personal vehicle, only shared cabs/buses',
        'Company-provided guide for safe travel',
        'Tickets & hotels booked by company but traveler self-pays',
        'Basic food options, mostly local stalls'
      ],
      priceNote: 'Most affordable option with basic amenities'
    },
    {
      name: 'VIP',
      icon: '�',
      description: 'Mid-Range experience with better comfort',
      color: 'blue',
      features: [
        'Travel in AC Train coaches',
        'Stay in 3-star / decent hotels',
        'Shared transport, personal vehicle not guaranteed',
        '2 meals per day in good restaurants',
        'Guided tours included in package',
        'Better comfort with affordable pricing'
      ],
      popular: true,
      priceNote: 'Perfect balance of comfort and value'
    },
    {
      name: 'VVIP',
      icon: '�',
      description: 'Luxury Premium experience for elite travelers',
      color: 'purple',
      features: [
        'Travel via Flights / Business Class',
        'Stay in 5–7 Star luxury hotels',
        'Private vehicle with chauffeur for the trip',
        '3-course meals in top-rated restaurants & bars',
        'Premium guide with full personalized support',
        'Exclusive luxury experiences for elite travelers'
      ],
      priceNote: 'Ultimate luxury with exclusive premium services'
    }
  ];

  const handleWhatsAppContact = () => {
    const message = `Hi! I need help choosing the right travel plan${selectedDestination ? ` for ${selectedDestination}` : ''}. Could you please assist me?`;
    const phoneNumber = '+919596274300';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    toast.info('🤔 Getting expert advice via WhatsApp!');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50" id="travel-plans">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 mb-4">Step 2: Select The Plane</p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            Choose Your Travel Experience
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Select the perfect travel plan tailored to your preferences. Pricing varies by season and availability.
          </p>
        </div>

        <div className="mb-12">
          <CreativePricing 
            tiers={travelTiers} 
            onPlanSelect={(tier) => {
              let message = `Hi! I'm interested in the ${tier.name} travel plan`;
              
              if (destinationDetails) {
                message += `\n\n*Selected Destination:* ${destinationDetails.name}\n`;
                message += `*Location:* ${destinationDetails.location}\n`;
                message += `*Rating:* ${destinationDetails.rating}/5\n`;
                message += `*Duration:* ${destinationDetails.duration}\n`;
                
                if (destinationDetails.highlights && destinationDetails.highlights.length > 0) {
                  message += `*Highlights:* ${destinationDetails.highlights.join(', ')}\n`;
                }
                
                if (destinationDetails.description) {
                  message += `*About:* ${destinationDetails.description}`;
                }
              } else if (selectedDestination) {
                message += ` for ${selectedDestination}`;
              }
              
              message += `\n\nCould you please provide more details about pricing and availability?`;
              
              const phoneNumber = '+919596274300';
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              
              window.open(whatsappUrl, '_blank');
              toast.success(`🎉 Redirecting to WhatsApp for ${tier.name} plan!`);
            }}
          />
        </div>

        <div className="relative mt-32 px-4">
          {/* Split Design */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              
              {/* Left Side - Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-1"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6"></path>
                    </svg>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Live Support</span>
                  </div>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Still Confused About <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    Which Plan to Choose?
                  </span>
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  Don't worry! Our experienced travel consultants are ready to help you find the perfect plan that matches your budget, preferences, and travel style.
                </p>

                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Instant Response</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Expert Guidance</span>
                  </div>
                </div>
              </div>

              {/* Right Side - CTA Card */}
              <div className="lg:pl-8">
                <div className="relative">
                  {/* Main CTA Card */}
                  <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all duration-300">
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl mx-auto mb-4 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                        <WhatsAppIcon className="w-10 h-10" fill="white" />
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Chat with Expert</h4>
                        <p className="text-gray-600 text-sm">Get personalized recommendations in minutes</p>
                      </div>

                      <button
                        onClick={() => handleWhatsAppContact()}
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                      >
                        <span>Start Free Consultation</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                      </button>

                      <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span>Avg response: 2 min</span>
                        </div>
                        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>1000+ happy customers</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-orange-400 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelPlans;
