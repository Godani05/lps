import React, { useState, useEffect } from 'react';


// Définir un type pour les objets de produit
type ImageProduct = {
    src: string;
    alt?: string;
  };

const ImageSlider = ({
    products = [],
    autoPlayInterval = 3000,
    showArrows = true,
    showDots = true,
  }: {
    products: ImageProduct[];
    autoPlayInterval?: number;
    showArrows?: boolean;
    showDots?: boolean; }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Fonction pour passer à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Fonction pour passer à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };
  
  // Fonction pour sélectionner une image spécifique
  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };
  
  // Défilement automatique
  useEffect(() => {
    if (autoPlayInterval) {
      const intervalId = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
      
      return () => clearInterval(intervalId);
    }
  }, [autoPlayInterval, nextSlide]);
  
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="overflow-hidden relative h-80 rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product, index) => (
            <div key={index} className="min-w-full h-full flex-shrink-0">
              <img 
                src={product.src || '/default-product.png'}
                alt={product.alt || `Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Flèches de navigation */}
        {showArrows && (
          <>
            <button 
              onClick={prevSlide}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
              aria-label="Image précédente"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
              aria-label="Image suivante"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
      
      {/* Indicateurs (points) */}
      {showDots && (
        <div className="flex justify-center mt-4 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;