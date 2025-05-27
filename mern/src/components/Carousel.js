import React from 'react';

export default function Carousel() {
  return (
    <>
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://media.istockphoto.com/id/1161931223/photo/vegetarian-burger-with-chickpea-cutlet-and-vegetables-veg-concept-copy-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=LY9zBUPc3hZfmlKraOy1RNkKHJK1O-SsP1wUEIoO6PY="
              className="d-block w-100"
              style={{ objectFit: 'cover', height: '500px', filter: 'brightness(30%)' }}
              alt="Slide 1"
            />
            <div style={{ zIndex: '10' }} className="carousel-caption d-none d-md-block">
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
              </form>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1364747500/photo/the-perfect-toppings.webp?a=1&b=1&s=612x612&w=0&k=20&c=TVEywQmOVLtLq1J0nxlYzH6OSTzB2QkBWtuCuplGsHw="
              className="d-block w-100"
              style={{ objectFit: 'cover', height: '500px', filter: 'brightness(30%)' }}
              alt="Slide 2"
            />
            <div className="carousel-caption d-none d-md-block" style={{ zIndex: '10' }}>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
              </form>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1528736235302-52922df5c122?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2FuZHdpdGNofGVufDB8fDB8fHww"
              className="d-block w-100"
              style={{ objectFit: 'cover', height: '500px', filter: 'brightness(30%)' }}
              alt="Slide 3"
            />
            <div className="carousel-caption d-none d-md-block" style={{ zIndex: '10' }}>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
