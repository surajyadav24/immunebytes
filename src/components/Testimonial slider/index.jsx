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
      name: 'John Doe',
      image: 'https://via.placeholder.com/100',
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: 'https://via.placeholder.com/100',
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      image: 'https://via.placeholder.com/100',
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
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
    <div className='py-5'>
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
