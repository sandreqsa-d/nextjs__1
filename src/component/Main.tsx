import FAQ from '@/component/FAQ'
import Imagee from '@/component/Image'

const Main = () => {
    return (
        <div className='flex flex-col lg:flex-row m-auto bg-white pb-20.75 pt-16.25 px-6 sm:px-8 rounded-[23px] '>
            <Imagee />
            <FAQ />
        </div>
    )
}

export default Main