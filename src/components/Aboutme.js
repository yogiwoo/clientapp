import React from 'react'
import ImageCarousel from "./ImageCarousel";
import img1 from "../personalPics/img1.JPG"
import img2 from "../personalPics/img2.JPG"
import img3 from "../personalPics/img3.JPG"
import img4 from "../personalPics/img4.JPG"
import img5 from "../personalPics/img5.jpg"
const slides = [
  img1, img2, img3, img4, img5
]
function Aboutme() {
  return (
    <div className='abt-me flex flex-row justify-center bg-customBg p-20 gap-10'>

      <div className="about bg-gray-800 p-8 rounded-md" style={{width:'900px'}}>
        <h1 className="text-[#98ABCD] text-5xl flex justify-center mb-4">About Me</h1>
        <p className="text-lg text-white text-center leading-relaxed">
          Ram Niranjan Sharma is a renowned social media influencer and educator who has
          captivated audiences worldwide with his insightful and unbiased content. Residing in China since 2019,
          he has explored over 80% of the country, offering an authentic glimpse into its business landscape, education system,
          cultural richness, lifestyle, and technological advancements.
        </p>
      </div>

      <div>
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