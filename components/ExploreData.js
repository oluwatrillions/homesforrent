import React from 'react'



const ExploreData = ({address, image, state, city, zipcode, apartmentType, price}) => {
  return (
      <div>
          <main>
              <div>
                  <img src={image} alt='' />
              </div>
              <div>
                  <div>
                    <h2>{address}</h2>
                    <h2>{state}</h2>
                    <h2>{city}</h2>
                    <h3>{zipcode}</h3>
                  </div>
                  <div>
                      <h2>{apartmentType}</h2>
                      <h2>{ price}</h2>
                  </div>
              </div>
          </main>
    </div>
  )
}

export default ExploreData