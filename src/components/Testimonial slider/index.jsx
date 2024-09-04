import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./style.css"
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
      quote: `${'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}`
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: 'https://via.placeholder.com/100',
      quote: `${'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}`,
    },
    {
      id: 3,
      name: 'Mike Johnson',
      image: 'https://via.placeholder.com/100',
      quote: `${'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}`
    },
  
    {
      id: 5,
      name: 'Mike Johnson',
      image: 'https://via.placeholder.com/100',
      quote: `${'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}`,
    },
    {
      id: 5,
      name: 'Mike Johnson',
      image: 'https://via.placeholder.com/100',
      quote: `${'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}`,
    },
  ];

  return (
    <div className='py-5'>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        centeredSlides={true}
        pagination={{    dynamicBullets: true, }}
        grabCursor={true}
        loop={true}  // Enable looping
        autoplay={{ // Enable autoplay
          delay: 5000, // Time between slides in milliseconds
          disableOnInteraction: false, // Continue autoplay even after user interactions
        }}
        modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
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
