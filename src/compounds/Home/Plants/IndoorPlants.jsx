import React, { useRef } from 'react';
import imageData from './PlantsContent';
import '../style/PlantsStyle.css';

export default function IndoorPlants() {
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    const container = containerRef.current;
    container.isDown = true;
    container.startX = e.pageX - container.offsetLeft;
    container.scrollLeft = container.scrollLeft;
  };

  const handleMouseLeave = () => {
    const container = containerRef.current;
    container.isDown = false;
  };

  const handleMouseUp = () => {
    const container = containerRef.current;
    container.isDown = false;
  };

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
      <div className='title'>Plants</div>
      <div className='Subtitle'>Indoor Plants</div>
      <div
        className="plants-container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {imageData.map((image, index) => (
          <div className="plant-card" key={index}>
            <img src={image.src} alt={image.alt} />
            <div className="plant-description">
              <h3>{image.title}</h3>
              <p>
                Discount: {image.discount}<br />
                <div className='dis-container'>Original Price:
                  <div className='discount'>{image.originalPrice}<br /></div>
                </div>
                <div className='dis-container'>Discounted Price:
                  <div className='discount'>{image.discountedPrice}<br /></div>
                </div>
                <div className='rating-container'>Customer Rating:
                  <div className='rating'>{image.rating}</div>
                </div>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
