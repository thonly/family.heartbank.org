import './splashPage.scss';
import React from 'react';

const SplashPage = () =>
  <div className="splash-container">
    <section id="home-section" className="row" style={{backgroundColor: '#1f1a38'}}>
      <div className="container row p-y-3 splash-content">
        <div className="col-md-6">
          <header className="m-b-3">
            <h1 className="display-4 font-weight-bold">HeartBank®</h1>
            <p className="lead text-muted">Thank with HeartBank</p>
          </header>
          <h2 className="m-b-1 font-weight-bold">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </h2>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
            sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          </p>
        </div>
        <div className="col-md-6 text-xs-center" style={{alignSelf: 'center'}}>
          <img
            className="m-b-2"
            width="300px"
            src="assets/images/ios-coming-soon-white.png"
            alt="coming soon to ios"/>
          <img
            width="300px"
            src="assets/images/android-coming-soon.png"
            alt="coming soon to android"/>
        </div>
      </div>
    </section>
    <section id="thank-you-image-section">
      <img
        className="img-fluid"
        src="assets/images/say-thank-you.jpg"
        alt="people thanking"/>
    </section>
  </div>

export default SplashPage;