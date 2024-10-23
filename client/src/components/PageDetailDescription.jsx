import React from 'react';
import parse from 'html-react-parser';

export default function PageDetailDescription(props) {
  return (
    <div>
        <h2 className='font-semibold text-2xl'>About the place</h2>
        <div className='text-gray-400 font-light'>
            {parse(props.data.description)}
        </div>
    </div>
  )
}
