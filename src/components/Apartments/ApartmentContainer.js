import React from 'react';
import ApartmentCards from './ApartmentCards';
import ApartmentDropdown from './ApartmentDropdown';

function ApartmentContainer({ data }) {
  console.log('data', data);
  return (
    <div className="flex">
      <div className="w-3/4 bg-gray-100">
        <span className="text-xl">Apartment Types</span>
        <ApartmentCards aptInfo={data} />
      </div>
      <div className="p-2 w-1/4">
        <ApartmentDropdown aptTypes={data} />
      </div>
    </div>
  );
}

export default ApartmentContainer;
