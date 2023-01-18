import React from 'react'

const Explore = ({ index, image, address, city, state, price, apartmentType, zipcode }) => {
  return (
      <div>
          <h2>Explore our recently added properties</h2>
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

export default Explore