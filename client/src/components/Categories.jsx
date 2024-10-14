import React from 'react'

export default function Categories(props) {
 const data = props.category !== undefined ? props.category : []
  return data.map((category, index) => {
    return (
      <section className='container mx-auto md:px-40 px-4 font-poppins' key={`category-${index}`}>
        <h4 className='text-xl font-semibold md:mt-16 mt-4 text-start'>
          {category.name}
        </h4>
        <div className='grid grid-cols-4 gap-4'>
          {category.itemId.map((item, index) => {
            return (
              <div className='w-full h-44 relative' key={`item-${index}`}>
                {item.isPopular && (
                  <div className='absolute right-0 top-0 rounded-tr-xl rounded-bl-lg  bg-rose-500 px-4 py-2 text-white text-sm'>
                    <span className='font-semibold'>
                      Popular
                    </span>
                    {" "}
                    <span className='font-light'>Choice</span>
                  </div>
                )}
                <img src={item.imageId[0].imageUrl} alt={item.title} className='w-full h-full object-cover rounded-xl hover:scale-105 transition-all duration-300'/>
                <div>
                  <h5 className='text-xl mt-1'>
                    {item.title}
                  </h5>
                  <p className='text-sm font-light text-gray-400'>
                    {item.state}, {item.country === "ID" ? "Indonesia" : item.country}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    );
  });
}
