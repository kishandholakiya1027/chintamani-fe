import React from 'react'

const Loader = () => {
    return (
        <div className='relative  bg-white'>
            {/* <div className="absolute  z-50 h-full w-full flex justify-center loader mt-6 ">
            <div className="  flex items-center justify-center h-16">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-slate-500"></div>
                <span className="ml-2">Loading...</span>
            </div>


        </div> */}
            <div className="absolute z-50 right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                <div className="border-t-transparent border-solid animate-spin  rounded-full border-[#211c50] border-[3px] h-10 w-10"></div>
            </div>

        </div>
    )
}

export default Loader