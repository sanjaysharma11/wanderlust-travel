import React from 'react';
import { Check } from 'lucide-react';
import WhatsAppIcon from '../WhatsAppIcon';

const colorVariants = {
  green: {
    gradient: 'bg-gradient-to-br from-green-500 to-emerald-600',
    button: 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600',
    border: 'border-green-200',
    popular: 'from-green-500 to-emerald-500'
  },
  amber: {
    gradient: 'bg-gradient-to-br from-amber-500 to-orange-600',
    button: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600',
    border: 'border-amber-200',
    popular: 'from-amber-500 to-orange-500'
  },
  blue: {
    gradient: 'bg-gradient-to-br from-blue-500 to-blue-700',
    button: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    border: 'border-blue-200',
    popular: 'from-blue-500 to-cyan-500'
  },
  purple: {
    gradient: 'bg-gradient-to-br from-purple-500 to-purple-700',
    button: 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
    border: 'border-purple-200',
    popular: 'from-purple-500 to-pink-500'
  }
};

export function CreativePricing({ tiers, onPlanSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-8">
      {tiers.map((tier) => {
        const colors = colorVariants[tier.color];
        
        return (
          <div 
            key={tier.name}
            className={`relative rounded-2xl overflow-visible transition-all duration-500 hover:scale-105 ${
              tier.popular 
                ? `transform scale-100 lg:scale-105 shadow-2xl border-2 ${colors.border} mt-2` 
                : 'shadow-xl hover:shadow-2xl'
            }`}
          >
            {tier.popular && (
              <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${colors.popular} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20 whitespace-nowrap`}>
                Most Popular
              </div>
            )}
            
            <div className={`p-6 sm:p-8 text-center text-white ${colors.gradient}`}>
              <div className="flex justify-center mb-3 sm:mb-4 text-4xl sm:text-5xl font-bold">
                {tier.name === 'Pro' && '🎯'}
                {tier.name === 'VIP' && '💎'}
                {tier.name === 'VVIP' && '👑'}
                {!['Pro', 'VIP', 'VVIP'].includes(tier.name) && tier.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">{tier.name}</h3>
              <p className="text-base sm:text-lg opacity-90 font-medium">{tier.description}</p>
            </div>
            
            <div className="p-6 sm:p-8 bg-white">
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white font-bold" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 font-medium text-base sm:text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center mb-6 sm:mb-8">
                {tier.price ? (
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    ${tier.price}<span className="text-sm font-normal text-gray-500">/month</span>
                  </p>
                ) : null}
                {tier.priceNote && (
                  <p className="text-gray-500 italic font-medium text-sm sm:text-base">
                    {tier.priceNote}
                  </p>
                )}
              </div>
              
              <button
                onClick={() => onPlanSelect && onPlanSelect(tier)}
                className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-white ${colors.button}`}
              >
                <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" fill="white" />
                <span>Contact for {tier.name}</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CreativePricing;