import React, { useRef } from 'react';
import outdoorImageData from './OutdoorplantsContent'; // Ensure this path is correct
import '../style/PlantsStyle.css';

export default function OutdoorPlants() {
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    const container = containerRef.current;
    container.isDown = true;
    container.startX = e.pageX - container.offsetLeft;
    container.scrollLeft = container.scrollLeft;
  };

  const handleMouseLeave = () => (containerRef.current.isDown = false);
  const handleMouseUp = () => (containerRef.current.isDown = false);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!container.isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - container.startX) * 3; // Scroll-fast multiplier
    container.scrollLeft = container.scrollLeft - walk;
  };

  return (
    <div>
      {/* <div className='title'>Plants</div> */}
      <div className='Subtitle'>Outdoor Plants</div>
      <div
        className="plants-container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {outdoorImageData.map((image, index) => (
          <div className="plant-card" key={index}>
            <img src={image.src} alt={image.alt} />
            <div className="plant-description">
              <h3>{image.title}</h3>
              <p>
                Discount: {image.discount}<br />
                <span className='dis-container'>Original Price: <span className='discount'>{image.originalPrice}<br /></span></span>
                <span className='dis-container'>Discounted Price: <span className='discount'>{image.discountedPrice}<br /></span></span>
                <span className='rating-container'>Customer Rating: <span className='rating'>{image.rating}</span></span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
