import React from "react";
import imgBoca from "../../utiles/img/bocaimg.jpeg"

const Home = () => {
  return (
    <div id="carouselWithControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item">
            <img src={imgBoca} class="d-block w-100" alt="Slide 1" style={{width:"100%", height:"300px"}}/>
            </div>
            <div class="carousel-item active">
            <img src={imgBoca} class="d-block w-100" alt="Slide 2" style={{width:"100%", height:"300px"}}/>
            </div>
            <div class="carousel-item">
            <img src={imgBoca} class="d-block w-100" alt="Slide 3" style={{width:"100%", height:"300px"}}/>
            </div>
        </div>
        <a className="carousel-control-prev text-secondary" href="#carouselWithControls" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next text-secondary" href="#carouselWithControls" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </a>
    </div>
  );
};

export default Home;
