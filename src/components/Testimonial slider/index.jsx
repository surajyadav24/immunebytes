import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./style.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import Autoplay styles
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Yog Shrusti, Farmsent, Co-Founder & CEO',
      image: 'https://via.placeholder.com/100',
      quote: "Robots can do audits, but the personal touch makes a difference. That's why we love Immunebytes! Not only do they do top-class audits, but they also take the time to understand our project and why certain things are done in specific ways. They take the time to ensure we feel heard, which shows in their work."
    },
    {
      id: 2,
      name: 'Dheeraj Borra, Stader Labs, Co-Founder',
      image: 'https://via.placeholder.com/100',
      quote: "ImmuneBytes demonstrated the perfect blend of expertise, commitment, and accountability, resulting in an audit that surpassed expectations. Their thorough approach and dedication ensured a high-quality outcome, reflecting their capability and professionalism in delivering exceptional service."
    },
    {
      id: 3,
      name: 'Mac P, Ethernity, Chief Engineer',
      image: 'https://via.placeholder.com/100',
      quote: 'We are thoroughly impressed by their team, who left no scope for a communication gap and provided a quick turnaround time. They took up each requirement with utmost detail and acted on it. It was a pleasing experience to work with you. Looking to working with you guys again!'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      image: 'https://via.placeholder.com/100',
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
    },
    {
      id: 5,
      name: 'David Brown',
      image: 'https://via.placeholder.com/100',
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
    },
  ];

  return (
    <div className='testimonial-wrapper'>
      <Swiper
        spaceBetween={50}
        navigation
        centeredSlides={true}
        pagination={{ dynamicBullets: true }}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 500000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView:1,
            spaceBetween:30// 1 slide on mobile screens
          },
          768: {
            slidesPerView: 2, // 2 slides on medium screens
          },
          1024: {
            slidesPerView: 3, // 3 slides on larger screens
          },
        }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div style={{ textAlign: 'center' }}>
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                style={{ borderRadius: '50%', marginBottom: '10px' }} 
              />
              <h3>{testimonial.name}</h3>
              <p>"{testimonial.quote}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
