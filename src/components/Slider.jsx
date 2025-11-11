import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const slides = [
    {
      image: "/images/offer1.jpg",  
      title: "Flat ₹100 cashback on first UPI transaction!",
    },
    {
      image: "/images/offer2.png",  
      title: "Get 5% cashback on Amazon recharge",
    },
    {
      image: "/images/offer3.png",  
      title: "Get 10% discount every hour!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mx-4 mt-4 bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="relative">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex-shrink-0"
              style={{ height: '180px' }}
            >
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Image load error:', slide.image);
                    e.target.src = 'https://via.placeholder.com/600x200/5D2ADD/FFFFFF?text=Image+Not+Found';
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{slide.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={goToPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 rounded-full shadow-md transition-all"
        >
          <ChevronLeft size={20} className="text-[#5D2ADD]" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 rounded-full shadow-md transition-all"
        >
          <ChevronRight size={20} className="text-[#5D2ADD]" />
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-[#5D2ADD] w-6"
                  : "bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  ); 
}