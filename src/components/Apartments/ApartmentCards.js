import React from 'react';
import Carousel from '../Carousel/Carousel';
function ApartmentCards({ aptInfo }) {
  console.log('aptIngo', aptInfo);
  return (
    <>
      <div className="p-5">
        <Carousel aptTypes={aptInfo} />
      </div>
    </>
  );
}

export default ApartmentCards;
