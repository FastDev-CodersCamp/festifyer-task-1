import './css/App.css';
import 'https://kit.fontawesome.com/9c1c3f6a2e.js'
import ImageSlider from './ImageSlider';
import Main from './Main';
import CardSec from './CardSec';
import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NotFound from './NotFound';


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
      <Router>
        <Navbar />
        <Routes>

          <Route path='/' element={<>
            <Main />
            <div className="carousal">
              <h2>Trusted and used by more than <span>13+</span> customers</h2>
              <ImageSlider images={images} />
            </div>      
            <CardSec />
          </>} />

          <Route path='/login' element={
            <Login 
              formType={'login'}
              title={'Log In'}
              btnText={'Log In'}
            />
          } />

          <Route path='/reset-password' element={
            <Login 
                formType={'forgetPassword'}
                title={'Reset Password'}
                btnText={'Send me password reset link'}
              />
          } />

          <Route path="/*" element={<NotFound/>}/>

        </Routes>
        <Footer />
      </Router>
        
      
    </div>
  );
}

export default App;
