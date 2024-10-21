// import React from 'react'

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
            {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="relative w-6 h-6">
                  <div className="mask mask-star bg-gray-300 w-6 h-6 absolute"></div>
                  <div 
                    className="mask mask-star bg-yellow-400 w-6 h-6 absolute"
                    style={{
                      clipPath: star <= Math.floor(props.data.rate) 
                        ? 'inset(0 0 0 0)' 
                        : star === Math.ceil(props.data.rate)
                        ? `inset(0 ${100 - (props.data.rate % 1) * 100}% 0 0)`
                        : 'inset(0 100% 0 0)'
                    }}
                  ></div>
                </div>
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
