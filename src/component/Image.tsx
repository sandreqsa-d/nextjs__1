import React from 'react'
import Image from 'next/image'

const Imagee = () => {
    return (
        <div className='mt-10 flex justify-center  '>
            <Image
                src="/womann.svg"
                alt="womanImg"
                width={700}
                height={500}
                className="lg:-ml-35  lg:mt-0 -mt-80 ml-0 "
            />
        </div>
    )
}

export default Imagee