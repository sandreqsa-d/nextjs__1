import React from 'react'
import Question from './Question'
import Image from 'next/image'

const FAQ = () => {
    return (
        <div className='w-full max-w-full lg:w-1/2  mr-27'>
            <h1 className="text-[32px] mb-10.75 font-bold">FAQ</h1>

            <Question questions="How many team members can I invite?" />

            {/*  */}
                <hr style={{backgroundColor: "#E8E8EA", border: "none", height: "1.5px"}}/>
            <div className="flex flex-col mb-4 mt-4.25">

                <div className='flex justify-between mb-2.75'>

                    <p className="font-bold text-[15px]">What is the maximum file upload size?</p>

                    <Image src="/Arrow.svg" alt="arrow" width={10} height={6} style={{ transform: "rotate(180deg)" }} />

                </div>


                <p className='text-[#787887] text-[13px] w-full'>No more than 2GB. All files in your account must fit your allotted storage space.

                </p>
            </div>


            {/*  */}

                <hr style={{backgroundColor: "#E8E8EA", border: "none", height: "1.5px"}}/>
            <Question questions="How do I reset my password?" />
                <hr style={{backgroundColor: "#E8E8EA", border: "none", height: "1.5px"}}/>
            <Question questions="Can I cancel my subscription?" />
                <hr style={{backgroundColor: "#E8E8EA", border: "none", height: "1.5px"}}/>
            <Question questions="Do you provide additional support?" />
            <hr style={{backgroundColor: "#E8E8EA", border: "none", height: "1.5px"}}/>
        </div>
    )
}

export default FAQ