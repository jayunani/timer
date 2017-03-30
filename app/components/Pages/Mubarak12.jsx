var React = require('react');
var MendhiDetails = require('MendhiDetails');
var ShaadiDetails = require('ShaadiDetails');
var Footer = require('Footer');

class Mubarak12 extends React.Component {
  render() {
    return (
      <div className='page'>
        <div className='title'>
          <img src='/bismillah8.png' className='bismallah'/>
          <div className='event-details'> Event Details </div>
        </div>
        <div className='event-content'>
          <MendhiDetails />
          <ShaadiDetails />
          <div className='rsvp-form'>
            <div className='event-form'>
            <div className='rsvp'> RSVP </div>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScjffUYeNEWlK9JijhzoS7i3orOCBf7P3cQgcgAukZoQlgSZg/viewform?embedded=true" width="380" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdkJilckA5Ldg9jzMLWwntquGT17lR9KnnLglCkKO6IEC2aBA/viewform?embedded=true" width="380" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

module.exports = Mubarak12;