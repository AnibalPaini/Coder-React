import React from "react";
import '../../App.css'
import slide1 from "../../utiles/img/slide-1.png";
import slide2 from "../../utiles/img/slide-2.png";
import ProductosDestacados from "../ProductosDestacados/ProductosDestacados";

const Home = () => {
  return (
    <>
      <div
        id="carouselWithControls"
        className="carousel slide mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src={slide1}
              className="d-block w-100"
              alt="Slide 1"
              style={{ width: "100%", height: "450px" }}
            />
          </div>
          <div className="carousel-item active">
            <img
              src={slide2}
              className="d-block w-100"
              alt="Slide 2"
              style={{ width: "100%", height: "450px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={slide1}
              className="d-block w-100"
              alt="Slide 3"
              style={{ width: "100%", height: "450px" }}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev text-secondary"
          href="#carouselWithControls"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next text-secondary"
          href="#carouselWithControls"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>

      <div>
        <ProductosDestacados/>
      </div>


    </>
  );
};

export default Home;
