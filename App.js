import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './css/App.css';
import 'https://kit.fontawesome.com/9c1c3f6a2e.js'
import ImageSlider from './ImageSlider';
import Main from './Main';
import CardSec from './CardSec';
import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Login';

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
    <>
    <Router>
    <div className="app">
      <Navbar />
      <Main />
      <div className="carousal">
        <h2>Trusted and used by more than <span>13+</span> customers</h2>
        <ImageSlider images={images} />
      </div>      
      <CardSec />
      <Footer />
      <Routes>
      <Route exact path="/login"element={<> <Login 
        formType={'login'}
        title={'Log In'}
        btnText={'Log In'}
      />
      <Login 
        formType={'forgetPassword'}
        title={'Reset Password'}
        btnText={'Send me password reset link'}
      />
      </>}/>
       
      </Routes>

     
    </div>
    </Router>  

    </>
    // {/* <div className="app">
    //   <Navbar />
    //   <Main />
    //   <div className="carousal">
    //     <h2>Trusted and used by more than <span>13+</span> customers</h2>
    //     <ImageSlider images={images} />
    //   </div>      
    //   <CardSec />
    //   <Footer />
    //   <Login 
    //     formType={'login'}
    //     title={'Log In'}
    //     btnText={'Log In'}
    //   />
    //   <Login 
    //     formType={'forgetPassword'}
    //     title={'Reset Password'}
    //     btnText={'Send me password reset link'}
    //   /> */}
    
       
      

     

  );
}

export default App;
