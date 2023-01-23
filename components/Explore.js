import React from 'react'
import ExploreData from './ExploreData'

const data = [
    {
        image: '',
        address: '123 Main St',
        city: 'indo',
        state: 'CA',
        zipcode: 12345,
        apartmentType: 'studio',
        price: 1000
    },

     {
        image: '',
        address: '456 Park Ave',
        city: 'illara',
        state: 'NY',
        zipcode: 56789,
        apartmentType: '1 bedroom',
        price: 2000
    },
     
      {
        image: '',
        address: '789 Elm St',
        city: 'overland',
        state: 'TX',
        zipcode: 11111,
        apartmentType: '2 bedroom',
        price: 3000
    },
      
     {
        image: '',
        address: '321 Oak St',
        city: 'convent',
        state: 'FL',
        zipcode: 11122,
        apartmentType: 'penthouse',
        price: 4000
    }
]

const Explore = () => {
    return (
        <div>
            <h2>Explore our recently added properties</h2>
          {
              data.map((homes, index) => (
                  <ExploreData
                      address={homes.address}
                      city={homes.city}
                      image={homes.image}
                      state={homes.state}
                      price={homes.price}
                      apartmentType={homes.apartmentType}
                      zipcode={homes.zipcode}
                      key={index}
                  />
              ))
        }
    </div>
  )
}

export default Explore