// function Carousel() {
//   return (
//     <>
//       <div
//         id="carouselExampleControls"
//         className="carousel slide"
//         data-ride="carousel"
//       >
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               className="d-block w-100"
//               src="https://www.kfcpakistan.com/images/98f788d0-c114-11ee-a3ee-43791878213d-995x356_desktop_image-2024-02-01151430.jpg"
//               alt="First slide"
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               className="d-block w-100"
//               src="https://www.kfcpakistan.com/images/24768cf0-ccda-11ee-a3d2-55a29658d5c6-995x356_desktop_image-2024-02-16144618.jpg"
//               alt="Second slide"
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               className="d-block w-100"
//               src="https://www.kfcpakistan.com/images/98f788d0-c114-11ee-a3ee-43791878213d-995x356_desktop_image-2024-02-01151430.jpg"
//               alt="Third slide"
//             />
//           </div>
//         </div>
//         <a
//           className="carousel-control-prev"
//           href="#carouselExampleControls"
//           role="button"
//           data-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="sr-only">Previous</span>
//         </a>
//         <a
//           className="carousel-control-next"
//           href="#carouselExampleControls"
//           role="button"
//           data-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="sr-only">Next</span>
//         </a>
//       </div>
//     </>
//   );
// }

// export default Carousel;

import React from "react";
import slides from ".././assets/data/CarosulSlides";

function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
      data-interval="1000" // Auto-move time is 1 seconds (1000 ms)
    >
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img className="d-block w-100" src={slide.image} alt={slide.alt} />
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
