// import React from 'react'
import StarIcon from './../assets/icons/ic_star.png'

export default function Testimonial(props) {
  return (
    <section className='container mx-auto md:px-40 px-4 font-poppins my-24 '>
      <div className='flex flex-row items-center'>
          <img src={props.data.imageUrl} alt={props.data.name} className='w-1/3 mr-14'/>
          <div>
            <h4 className='text-2xl font-semibold mb-16 text-start'>
              {props.data.name}
            </h4>
            <div className='flex flex-row items-center'>
              {Array.from({length: Math.round(props.data.rate)}, (_, index) => (
                <img src={StarIcon} alt='star' className='w-6 h-6' key={index}/>
              ))}
            </div>
            <p className='text-3xl font-medium'>
              {props.data.content}
            </p>
            <p className='text-xl font-medium text-gray-400 mb-12'>
              {props.data.familyName}, {props.data.familyOccupation}
            </p>
            <a href="#">
              <button className='text-lg font-medium text-white bg-primary rounded-lg px-6 py-2'>
                Read Their Story
              </button>
            </a>
          </div>
      </div>
    </section>
  )
}
