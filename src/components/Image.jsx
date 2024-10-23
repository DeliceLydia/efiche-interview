import React from 'react'
import doc from '../assets/doc.png';

const Image = () => {
  return (
    <div className="hidden lg:flex w-1/2 justify-center items-center mt-6 mb-6">
      <img
        src={doc}
        alt="Medical Experience"
        className="w-full h-[calc(100vh-3rem)] max-w-[80%] rounded-3xl -mr-16"
      />
    </div>
  )
}

export default Image
