import React from 'react'
// import imageData from './PlantsContent';
import '../style/OutdoorPlants.css';

export default function OutdoorPlants() {
  return (
    <div>
        <div className='Subtitle1'>Outdoor Plants</div>
       {/* <div
        className="plants-container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      > */}
        {/* {imageData.map((image, index) => (
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
      </div>  */}
    </div>
  )
}
