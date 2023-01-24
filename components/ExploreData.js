import React from 'react'


const ExploreData = ({address, image, state, city, zipcode, apartmentType, price}) => {
  return (
      <div>
          <main>
              <div className='imagery'>
                  <img src={image} alt='' />
              </div>
              <div className='location-div'>
                  <h2 className='address'>{address}, </h2>
                  <div className='location'>
                    <h2 className='state'>{state},</h2>
                    <h2 className='city'>{city}</h2>
                    <h2 className='zip'>{zipcode}</h2>
                  </div>
                  <div className='price-type'>
                      <h2 className='apartmentType'>{apartmentType}, </h2>
                      <h2 className='price'>${ price}</h2>
                  </div>
              </div>
          </main>
    </div>
  )
}

export default ExploreData