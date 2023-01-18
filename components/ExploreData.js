import React from 'react'
import Explore from './Explore'

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

export const getStaticProps = async () => {
    const response = await fetch(data)
    console.log(response);
}

const ExploreData = () => {
  return (
      <div>
        
    </div>
  )
}

export default ExploreData