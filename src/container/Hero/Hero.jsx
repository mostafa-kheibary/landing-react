import './Hero.css';
import Slider from '../../components/Slider/Slider';
import Button from '../../components/Button/Button';
const Hero = () => {
  return (
    <div className='hero-background'>
      <div className='hero-section'>
      <div className='hero__content'>
        <h3 className='hero__content-title'><span className='light'>Introducing</span> YESPORTS</h3>
        <h4 className='hero__content-info'>Get Closer to your Favourite esports teams.</h4>
        <h3 className='hero__content-sub-title'>All YESPORTS NFTS grant access to the Metaverse.</h3>
        <Button arrow={true} fill={true}>
          View Pack
        </Button>
      </div>
      <div className='hero__Slider'>
        <Slider />
      </div>
    </div>
    </div>
    
  );
};
export default Hero;
