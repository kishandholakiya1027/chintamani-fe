import  { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const [formData, setFormData] = useState<any>({})
    const [error, setError] = useState<any>({})
    const { user } = useSelector((state: any) => state.auth)

    useEffect(() => {
        setFormData(user)
    }, [user])

    console.log("🚀 ~ Profile ~ user:", user)
    const handleChange = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value })
        setError({ ...error, [name]: "" })
    }
const onAddress = () => {
    
}

    return (
        <div>
            <div className="px-5 pb-5">

                <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                    <div className="w-full flex items-center">
                        <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                            <img src={formData?.image} className='object-fill h-full' alt="" />
                        </div>
                        <button onClick={() => { }} type="button" className="flex ml-2 text-xs items-center px-6 py-2.5 font-medium tracking-wide text-white capitalize   bg-[#211c50] rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">

                            <span className="pl-2 mx-1">Upload</span>
                        </button>
                    </div>
                </div>

                <div className="flex">

                    <div className="flex-grow w-1/4 pr-2">

                        <input placeholder="First Name" type="string" value={formData?.firstname} onChange={(e) => handleChange("formData", e.target.value)} className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                        {error?.formData && <p className="text-red-500 text-xs mt-2">{error?.contact}</p>}
                    </div>

                    <div className="flex-grow">

                        <input placeholder="Last Name" value={formData?.lastname} onChange={(e) => handleChange("formData", e.target.value)} className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                        {error?.formData && <p className="text-red-500 text-xs mt-2">{error?.formData}</p>}

                    </div>

                </div>

                <input placeholder="Email" value={formData?.email} onChange={(e) => handleChange("city", e.target.value)} className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                {error?.city && <p className="text-red-500 text-xs mt-2">{error?.city}</p>}

                <input placeholder="Mobile" type="tel" maxLength={13} value={formData?.mobile} onChange={(e) => handleChange("mobile", e.target.value)} className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                {error?.formData && <p className="text-red-500 text-xs mt-2">{error?.mobile}</p>}

                <input placeholder="Address" value={formData?.Address} onChange={(e) => handleChange("city", e.target.value)} className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                {error?.city && <p className="text-red-500 text-xs mt-2">{error?.city}</p>}



                <div className='flex justify-end px-5 my-6'>
                    <button onClick={() => onAddress()} type="button" className="flex items-center px-6 py-2.5 font-medium tracking-wide text-white capitalize   bg-[#211c50] rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">

                        <span className="pl-2 mx-1">Save</span>
                    </button>

                </div>
            </div>

        </div>
    )
}

export default Profile