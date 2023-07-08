import './css/App.css';
import 'https://kit.fontawesome.com/9c1c3f6a2e.js'
import ImageSlider from './ImageSlider';
import Main from './Main';
import CardSec from './CardSec';

function App() {
  const images = [

    { src: 'https://www.festifyer.com/modules/themes/default/images/customer-logo-1.png', alt: 'Image 1' },
    
    { src: 'https://www.festifyer.com/modules/themes/default/images/customer-logo-2.png', alt: 'Image 1' },
    
    { src: 'https://www.festifyer.com/modules/themes/default/images/customer-logo-3.png', alt: 'Image 1' },
    
    { src: 'https://www.festifyer.com/modules/themes/default/images/customer-logo-4.png', alt: 'Image 1' },
    
    { src: 'https://www.festifyer.com/modules/themes/default/images/customer-logo-5.png', alt: 'Image 1' },
    
    { src: 'https://www.festifyer.com/modules/themes/default/images/customer-logo-6.png', alt: 'Image 1' },
    
  ];
  return (
    <div className="app">

    {/* Fabiha's Task */}
      <Main />

    {/* Shahzeb's Task */}
    <ImageSlider images={images} />
    {/* Sohaib's Task */}
      <CardSec />
      
    </div>
  );
}

export default App;
