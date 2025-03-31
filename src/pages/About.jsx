import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../CSS/About.css";

const About = () => {
  return (
    <>
      <Header />

      <main className="about-container">
        {/* Our Vision */}
        <section className="about-section">
          <h2>Our Vision</h2>
          <p>
            Empowering confidence through timeless fashion, making every woman
            feel unique and elegant every day.
          </p>
          <hr />
        </section>

        {/* Our Mission */}
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            We aim to offer high-quality, stylish, and accessible fashion that
            complements every personality and lifestyle.
          </p>
          <hr />
        </section>

        {/* Who We Are? */}
        <section className="about-section">
          <h2>Who We Are?</h2>
          <p>
            Founded with a passion for fashion, our brand was born to celebrate
            individuality and elegance. We believe that every piece of clothing
            tells a story, and we are here to help you write yours. From casual
            wear to sophisticated outfits, our collections are designed to
            embrace diversity and style.
            <br />
            <br />
            At the heart of our brand is a commitment to sustainability, ethical
            sourcing, and unparalleled craftsmanship. Join our journey and
            redefine fashion with confidence and authenticity!
          </p>
        </section>

        {/* Shop Now Button */}
        <div className="shop-now-container">
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
