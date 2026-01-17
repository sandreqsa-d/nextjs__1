import FAQ from '@/component/FAQ'
import Image from '@/component/Image'
import React from 'react'

const Main = () => {
    return (
        <div className='flex flex-col lg:flex-row m-auto bg-white pb-20.75 pt-16.25 
  px-6       
  sm:px-8    
  lg:px-0    
  rounded-[23px] gap-21.75'>

            <Image />
            <FAQ />
        </div>
    )
}

export default Main