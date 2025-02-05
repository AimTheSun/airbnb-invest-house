import "./App.css";
import React from "react";

const App = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">Airbnb Investment</div>
        <ul className="nav-links">
          <li>
            <a href=" ">Contact Us</a>
          </li>
          <li>
            <a href=" ">Login</a>
          </li>
          <li>
            <a href=" ">About Us</a>
          </li>
        </ul>
      </header>

      <main>
        <div className="slider" aria-label="Product Images">
          <img
            src={`${process.env.PUBLIC_URL}/house1.jpeg`}
            alt="Product 1"
            className="slider-image"
          />
          <img
            src={`${process.env.PUBLIC_URL}/house2.jpeg`}
            alt="Product 2"
            className="slider-image"
          />
          <img
            src={`${process.env.PUBLIC_URL}/house3.jpeg`}
            alt="Product 3"
            className="slider-image"
          />
        </div>

        <section className="cta-container">
          <button className="cta-button">Invest 100% Now</button>
          <button className="cta-button">Add to My Cart</button>
        </section>

        <section className="investment">
          <label htmlFor="investment-amount">Investment Amount (USDC):</label>
          <input
            type="number"
            id="investment-amount"
            name="investment-amount"
            placeholder="Enter amount"
          />
          <button className="cta-button">Confirm Investment</button>
        </section>

        <section className="description">
          <p>
            Invest in tokenized real estate assets securely and efficiently
            through our DeFi platform.
          </p>
        </section>

        <section className="description">
          <h3>Property Token Details</h3>
          <p>Offer Token Name: Real Estate Token</p>
          <p>Buyer Token: USDC</p>
        </section>

        <section className="features" aria-label="Product Features">
          <div className="feature-item">
            <h3>Location</h3>
            <p>20550 Townsen Blvd Bldg </p>
          </div>
          <div className="feature-item">
            <h3>Yield</h3>
            <p>Annual yield: 10.00%</p>
          </div>
          <div className="feature-item">
            <h3>Price</h3>
            <p>Price: 50.19 USDC</p>
          </div>
        </section>
      </main>

      <footer className="footer" aria-label="Footer">
        <p>Contact us via: </p>
        <p>
          <a href="mailto:contact@example.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://t.me/yourtelegram"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a
            href="https://x.com/yourx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
          >
            <i className="fab fa-x"></i>
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
