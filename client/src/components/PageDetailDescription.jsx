import React from 'react';
import {Fade} from "react-awesome-reveal";

export default function PageDetailDescription(props) {
  const formattedDesc = props.data.description.replace(/<\/p>/g, '</p><br />');
  const features = props.data.features || [];
  return (
    <Fade direction="up">
        <h2 className='font-semibold text-2xl'>About the place</h2>
        <div className='text-gray-400 font-light' dangerouslySetInnerHTML={{ __html: formattedDesc }} />
        <div className='grid grid-cols-4 gap-5'>
          {features.map((feature, index) => {
            return (
              <div key={`feature-${index}`}>
                <img src={feature.imageUrl} alt={feature.name} className='w-10 h-10 object-cover block mb-2'/>
                <p className='font-semibold text-secondary'>{feature.qty}<span className='text-gray-400 font-light'> {feature.name} </span></p>
              </div>
            )
          })}
        </div>
    </Fade>
  )
}
