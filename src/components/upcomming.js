import React from 'react'
import image from "./../../src/up.jpg"
import "./../App.css"
function Upcomming() {
    return (
      <div className="flex items-center gap-6">
          <div>
    <h1 className=" text-4xl">Upcoming business</h1>
  </div>
  <div className="w-px h-full bg-blue-500"></div>
  <div
    className="form flex flex-col gap-3 p-6 rounded-lg shadow-lg max-w-md w-full"
    style={{
      backgroundImage: `url(${image})`,
      width: '348px',
      height: '394px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  ></div>

</div>
  
   
    )
}

export default Upcomming