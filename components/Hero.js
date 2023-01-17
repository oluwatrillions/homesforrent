import React from 'react'

const Hero = () => {
  return (
      <div className='hero-container'>
          <div className='hero-text'>
              <h2>Discover Your New Home</h2>
              <h3>Thousands of homes for rent in your neighborhood</h3>
          </div>
          <div>
              <div className='input-box'>
                  <input name='search' type='text' />
                  <button>search</button>
              </div>
          </div>
    </div>
  )
}

export default Hero