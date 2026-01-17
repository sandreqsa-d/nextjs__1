import React from 'react'
import Image from 'next/image'

const ImageComponent = () => {
  return (
    <div className='mt-[60px]'>
      <Image 
        src="/womann.svg" 
        alt="womanImg" 
        width={500} 
        height={350}
      />
    </div>
  )
}

export default ImageComponent