import React from 'react'
import booked from '../assets/Frame 5018.svg'

const Booked = () => {
  return (
    <div className="grid grid-cols-2 min-h-[640px] items-center  ">
      <div className="flex items-center justify-center">
        <img src={booked} />
      </div>
      <div className="">
        <h3 className="playfair-regular max-w-lg leading-normal text-4xl">
        Accept and sell appointments
        </h3>
        <p className="text-xl nunito-regular mt-5 max-w-xl">
        Let customers book their own appointment or consultation. Start accepting payments for appointments through your booking page. 
        </p>
      </div>
    </div>
  )
}

export default Booked