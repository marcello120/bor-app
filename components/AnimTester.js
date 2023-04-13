import React, { useState } from 'react';

const AnimTester = () => {
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(200);
  
    const handleEnlarge = () => {
      setWidth(width + 50);
      setHeight(height + 50);
    }
  
    return (
        <div>
          <div
            className="red-rectangle"
            style={{ width: `${width}px`, height: `${height}px` }}
          />
          <button
            className="enlarge-button"
            onClick={handleEnlarge}
          >
            Enlarge
          </button>
        </div>
      );
    };

export default AnimTester;