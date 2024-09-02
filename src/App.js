import './App.css';
import Header from './components/Header';
import PrimaryBtn from './components/Primarybutton';
import Herosection from './components/Herosection';
import Cta from './components/Cta-components'
// Importing images
import img1 from './assets/images/646cda7f7639d2f9f439447d_222-p-500 1.png';
import img2 from './assets/images/demex_wordmark_primary_white_no_bg 1.png';
import img3 from './assets/images/download 1.png';
import img5 from './assets/images/logo (2) 1.png';
import img6 from './assets/images/logo (3) 1.png';
import img7 from './assets/images/maha-lg 1.png';
import img8 from './assets/images/mainvanar-logo 1.png';
import img9 from './assets/images/Monotone White 1.png';
import img10 from './assets/images/img11.svg';
import img11 from './assets/images/scallop-ramp 1.png';
import img14 from './assets/images/img14.svg'
import img13 from './assets/images/Group 24.svg';

import ImageTextSection from './components/ImageTextSection';

function App() {
  return (
    <>
      <Header />
      <Herosection />
      <div className='btn-wrapper'>
        <PrimaryBtn text="Book Consultation"/>
      </div>
      <h1 className='text-center py-5  pb-4 heading-h1'>Trusted by Partners</h1>
      <div className='logo-section pb-5'>
      <div className='container-fluid'>
     
      <div className='text-icon'>
        <ImageTextSection imageSrc={img10}  />
        <ImageTextSection imageSrc={img8}  />
        <ImageTextSection imageSrc={img7}  />
        <ImageTextSection imageSrc={img9}  />
        <ImageTextSection imageSrc={img1}  />
        <ImageTextSection imageSrc={img3}  />
        <ImageTextSection imageSrc={img5}  />
        <ImageTextSection imageSrc={img2}  />
        <ImageTextSection imageSrc={img14}  />
        <ImageTextSection imageSrc={img13}  />
        <ImageTextSection imageSrc={img6}  />
        <ImageTextSection imageSrc={img11}  />
        

      </div>
      </div>
      </div>
      <Cta/>
    </>
  );
}

export default App;
