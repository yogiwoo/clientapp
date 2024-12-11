import React from 'react'
import upcoming from "./../../src/up.jpg"
function Upcomming() {
    return (
<div 
  className="form flex flex-col gap-3 p-6 rounded-lg shadow-lg max-w-md w-full" 
  style={{ width: '348px', height: '394px' }}
>
  {/* Image */}
  <img 
    src={upcoming}
    alt="Background" 
    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg -z-10" 
  />
  
  {/* Content */}
  <div className="relative text-white z-10">
    {/* Add form or content here */}
    <h1>Upcomming events</h1>
  </div>
</div>
    )
}

export default Upcomming