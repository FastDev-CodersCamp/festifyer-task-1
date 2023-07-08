import './css/App.css';
import Card from './Card'
import 'https://kit.fontawesome.com/9c1c3f6a2e.js'

function App() {
  return (
    <div className="app">

    {/* Fabiha's Task */}

    {/* Shahzeb's Task */}

    {/* Sohaib's Task */}
      <div className="benefits">
        <div className="benefits-container">
          <div className="benefits-upper">
            <Card 
                icon={null}
                title={'Check out all the benefits'}
                desc={'Event Landing Page, Countdown time, Registration form, Email Invitations, Selling ticket, Attendee Management'}
                color={'#14BE9F'}
              />
          </div>
          
          <div className="benefits-lower">
            <Card 
              icon={"fa-solid fa-globe"}
              title={'Publish Event Anywhere'}
              desc={'A mobile-friendly event landing page for selling tickets, your website or blog, Facebook, Twitter, and more.'}
              color={'#14BE9F'}
            />
            <Card 
              icon={"fa-regular fa-clipboard"}
              title={'Manage Your Event'}
              desc={'Event Landing Page, Countdown time, Registration form, Email Invitations, Selling ticket, Attendee Management.'}
              color={'#1D79FB'}
            />
            <Card 
              icon={"fa-solid fa-users"}
              title={'Easy To Use'}
              desc={'Anyone without IT skills can start using app in a matter of minutes after creating their free account in the app.'}
              color={'#DC63FF'}
            />
          </div>
        </div>        
      </div>
    </div>
  );
}

export default App;
