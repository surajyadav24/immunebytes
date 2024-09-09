import "./App.css";
import Header from "./components/Header";
import PrimaryBtn from "./components/Primarybutton";
import Herosection from "./components/Herosection";
import Cta from "./components/Cta-components";
import Whychooseus from "./components/Whychooseus";
import Servicescomponent from "./components/Servicescomponent";
import TestimonialSlider from "./components/Testimonial slider";
import LogoSlider from "./components/Logo-Slider";
// Importing images
import img1 from "./assets/images/646cda7f7639d2f9f439447d_222-p-500 1.png";
import img2 from "./assets/images/demex_wordmark_primary_white_no_bg 1.png";
import img3 from "./assets/images/download 1.png";
import img5 from "./assets/images/logo (2) 1.png";
import img6 from "./assets/images/logo (3) 1.png";
import img7 from "./assets/images/maha-lg 1.png";
import img8 from "./assets/images/mainvanar-logo 1.png";
import img9 from "./assets/images/Monotone White 1.png";
import img10 from "./assets/images/img11.svg";
import img11 from "./assets/images/scallop-ramp 1.png";
import img14 from "./assets/images/img14.svg";
import img13 from "./assets/images/Group 24.svg";
import serviceimg from "./assets/images/services-img/services(1).svg";
import serviceimg2 from "./assets/images/services-img/services (2).svg";
import serviceimg3 from "./assets/images/services-img/services (3).svg";

import ImageTextSection from "./components/ImageTextSection";
import Whychooseusec from "./components/WhychooseusSec";
import CaseStudyCard from "./components/Case-study";
import Community from "./components/Joinourcommunity";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Herosection />
      <div className="btn-wrapper">
        <PrimaryBtn text="Book Consultation" />
      </div>
      <h1 className="text-center py-5  pb-4 heading-h1">Trusted by Partners</h1>
      <LogoSlider />
     
     
     
      {/* <div className="logo-section pb-5">
        <div className="container-fluid">
          <div className="text-icon">
            <ImageTextSection imageSrc={img10} />
            <ImageTextSection imageSrc={img8} />
            <ImageTextSection imageSrc={img7} />
            <ImageTextSection imageSrc={img9} />
            <ImageTextSection imageSrc={img1} />
            <ImageTextSection imageSrc={img3} />
            <ImageTextSection imageSrc={img5} />
            <ImageTextSection imageSrc={img2} />
            <ImageTextSection imageSrc={img14} />
            <ImageTextSection imageSrc={img13} />
            <ImageTextSection imageSrc={img6} />
            <ImageTextSection imageSrc={img11} />
          </div>
        </div>
      </div> */}
      <Cta />
      <h1 className="text-center py-5  pb-5 heading-h1">Our Services</h1>
      <Servicescomponent
        imageSrc={serviceimg}
        heading="Smart Contract Audit"
        paragraphtext="Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor
incididunt ut labore
et dolore"
      />
      <Servicescomponent
        imageSrc={serviceimg3}
        heading="Blockchain Security Service"
        paragraphtext="Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor
incididunt ut labore
et dolore"
      />
      <Servicescomponent
        imageSrc={serviceimg2}
        heading="Penetration Testing"
        paragraphtext="Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor
incididunt ut labore
et dolore"
      />

<div className="container pb-4">
<Whychooseus/>
<Whychooseusec/>
</div>


<h1 className="text-center py-5  pb-4 heading-h1">Testimonials</h1>
<div className="container testimonial-slider">
<TestimonialSlider />
</div>

<div className="container">
  
<h1 className="text-center py-5  pb-4 heading-h1">Case Studies</h1>


<div className=" case-study-wrapper">
  <div className="row">

  <div className="col-lg-6 md-6 col-sm-12">
  <div className="card-bg-1 pb-4 ">
  <CaseStudyCard
        title="Case study name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        buttonText="Learn More"
        imageSrc="https://via.placeholder.com/100" // Replace with actual image URL
      />
      </div>
    </div>
  <div className="col-lg-6 md-6 col-sm-12">
  <div className="card-bg-2 pb-4 d-flex justify-content-end">
  <CaseStudyCard 
        title="Case study name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        buttonText="Learn More"
        imageSrc="https://via.placeholder.com/100" // Replace with actual image URL
      />
  </div>
    </div>
  <div className="col-lg-6 md-6 col-sm-12">
  <div className="card-bg-3 pt-4">
  <CaseStudyCard 
        title="Case study name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        buttonText="Learn More"
        imageSrc="https://via.placeholder.com/100" // Replace with actual image URL
      />
  </div>
    </div>
  <div className="col-lg-6 md-6 d-flex justify-content-end col-sm-12">
  <div className="card-bg-4 pt-4">
  <CaseStudyCard 
        title="Case study name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        buttonText="Learn More"
        imageSrc="https://via.placeholder.com/100" // Replace with actual image URL
      />
  </div>
    </div>
    
  </div>
  <div className="view-more py-5"><PrimaryBtn text="view More"/></div>
</div>
</div>
<div className="logo-wrapper">



</div>


<Community/>
<Footer />
    </>
  );
}

export default App;
