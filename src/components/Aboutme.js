import React from 'react'
import ImageCarousel from "./ImageCarousel";
import img1 from "../personalPics/img1.png"
import img2 from "../personalPics/img2.png"
import img3 from "../personalPics/img3.png"
import img4 from "../personalPics/img4.png"
import img5 from "../personalPics/img5.png"
const slides = [
  img1, img2, img3, img4, img5
]
function Aboutme() {
  return (
    <div className='abt-me flex md:flex-row flex-col justify-center bg-customBg md:p-20 p-5 gap-10'>

      <div className="about  p-8 rounded-md text-center md:ps-56" > 
        <h1 className="text-[#98ABCD] text-5xl  mb-4">About Me</h1>
        <p className="text-lg text-white">
          Ram Niranjan Sharma is a renowned social media influencer and educator who has
          captivated audiences worldwide with his insightful and unbiased content. Residing in China since 2019,
          he has explored over 80% of the country, offering an authentic glimpse into its business landscape, education system,
          cultural richness, lifestyle, and technological advancements.
        </p>
      </div>

      <div className='md:pe-24 flex justify-center'>
        <ImageCarousel>
          {slides.map((s, index) => (
            <img key={index} src={s} alt={`Slide ${index + 1}`} className="w-full h-auto" />
          ))}
        </ImageCarousel>
      </div>

    </div>
  )
}

export default Aboutme