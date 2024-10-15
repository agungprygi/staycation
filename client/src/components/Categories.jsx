// import React from 'react'

export default function Categories(props) {
 const data = props.data !== undefined ? props.data : []
  return data.map((category, index) => {
    return (
      <section className='container mx-auto md:px-40 px-4 font-poppins' key={`category-${index}`}>
        <h4 className='text-xl font-semibold md:mt-16 mt-4 text-start'>
          {category.name}
        </h4>
        <div className='grid grid-cols-4 gap-4'>
          {category.items.map((item, index) => {
            return (
              <div className='relative' key={`item-${index}`}>
                {item.isPopular && (
                  <div className='absolute right-0 top-0 rounded-tr-xl rounded-bl-lg  bg-rose-500 px-4 py-2 text-white text-sm z-10'>
                    <span className='font-semibold'>
                      Popular
                    </span>
                    {" "}
                    <span className='font-light'>Choice</span>
                  </div>
                )}
                <div>
                  <a href={`/properties/${item._id}`} className='block hover:underline'>
                  <img src={item.imageUrl} alt={item.name} className='w-full h-44 object-cover rounded-xl cursor-pointer'/>
                  <h5 className='text-xl mt-1'>
                    {item.name}
                  </h5>
                  <p className='text-sm font-light text-gray-400'>
                    {item.city}, {item.country}
                  </p>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    );
  });
}
