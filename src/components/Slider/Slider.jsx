import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import avatar from '../../assets/avatar.png';
import './Slider.css';
import image1 from '../../assets/sliderIMG1.png';
import image2 from '../../assets/sliderIMG2.png';
import image3 from '../../assets/sliderIMG3.png';
import image4 from '../../assets/sliderIMG4.png';
const Slider = () => {
  const slides = [
    { link: image1, author: '@boom' },
    { link: image2, author: '@hello' },
    { link: image3, author: '@test' },
    { link: image4, author: '@normal' },
  ];
  return (
    <div className='slider'>
      <Carousel
        showArrows={false}
        thumbWidth='100px'
        width='400px'
        stopOnHover={false}
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        {slides.map((slide, index) => (
          <div className='slider-item' key={index}>
            <img
              alt=''
              className='slider-image'
              src={slide.link}
            />
            <span className='slider-lable'>
              <img alt='' src={avatar} /> {slide.author}
            </span>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Slider;
