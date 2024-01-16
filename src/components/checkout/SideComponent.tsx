import  { useState } from 'react'
import { useSelector } from 'react-redux'



const renderCountView = (val: number) => {
    return <div className='circle text-white flex items-center justify-center mr-3'>
        {val}
    </div>
}

const SideComponent = ({address, setAddress, contact, setContact, setIsSave}:any) => {
    const [open, setOpen] = useState(1)
    const {auth:{user}} = useSelector((state: any) => state)
    console.log("🚀 ~ SideComponent ~ user:", user)
    
    console.log("+++++", address, contact)
    const [error, setError] = useState<any>({})
    const handleChange = (name: string, value: string) => {
        setAddress({ ...address, [name]: value })
        setError({ ...error, [name]: "" })
    }
    const onAddress = () => {
        let err: any = {}
        if (!address?.city) {
            err = { ...err, city: "Please enter city" }
        }
        if (!contact) {
            err = { ...err, contact: "Please enter contact" }
        }
        if (!address?.address) {
            err = { ...err, address: "Please enter address" }
        }
        if (!address?.pincode) {
            err = { ...err, pincode: "Please enter pincode" }
        }
        if (!address?.country) {
            err = { ...err, country: "Please enter country" }
        }
        if (Object.keys(err).length > 0) {
            setError(err)
            return
        }
        setIsSave(true)
        setOpen(2)
    }

    return (
        <div>

            <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto ">
                <div className="pb-5">
                    <div className="group">
                        <summary className=" flex items-center font-medium cursor-pointer " onClick={() => setOpen(1)}>
                            {renderCountView(1)}
                            <span> Shipping</span>

                        </summary>
                        {open === 1 ? <div className='mt-2'>
                            <div className="px-5 pb-5">
                                <input placeholder="Contact No" type  ="tel"  maxLength={13} value={contact} onChange={(e) =>{
                                    setContact(e.target.value)
                                    setError({...error,contact:""})
                                }} className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                                {error?.address && <p className="text-red-500 text-xs mt-2">{error?.contact}</p>}

                                <input placeholder="Address" value={address?.address} onChange={(e) => handleChange("address", e.target.value)} className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                                {error?.address && <p className="text-red-500 text-xs mt-2">{error?.address}</p>}

                                <input placeholder="City" value={address?.city} onChange={(e) => handleChange("city", e.target.value)} className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                                {error?.city && <p className="text-red-500 text-xs mt-2">{error?.city}</p>}

                                <div className="flex">
                                    <div className="flex-grow w-1/4 pr-2"><input type="number" value={address?.pincode} onChange={(e) => handleChange("pincode", e.target.value)} placeholder="Pincode" className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                                    {error?.pincode && <p className="text-red-500 text-xs mt-2">{error?.pincode}</p>}
                                    </div>

                                    <div className="flex-grow"><input value={address?.country} onChange ={(e) => handleChange("country", e.target.value)} placeholder="Country" className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                                    {error?.country && <p className="text-red-500 text-xs mt-2">{error?.country}</p>}
                                    
                                    </div>

                                </div>
                                   

                            </div>
                            <div className='flex justify-end px-5'>
                                <button onClick={() => onAddress()} type="button" className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">

                                    <span className="pl-2 mx-1">Save</span>
                                </button>

                            </div>
                        </div> : null}
                    </div>
                </div>
                <div className="py-5">
                    <div className="group">
                        <summary className="flex items-center font-medium cursor-pointer " onClick={() => setOpen(2)}>
                            {renderCountView(2)}
                            <span> Payment</span>

                        </summary>
                        {open === 2 ? <div className='mt-6'>
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                                <div className="w-full flex mb-3 items-center">
                                    <div className="w-32">
                                        <span className="text-gray-600 font-semibold">Name</span>
                                    </div>
                                    <div className="flex-grow ">
                                        <span>{`${user?.firstname||""} ${user?.lastname||""}`}</span>
                                    </div>
                                </div>
                                <div className="w-full flex mb-3 items-center">
                                    <div className="w-32">
                                        <span className="text-gray-600 font-semibold">Contact No</span>
                                    </div>
                                    <div className="flex-grow ">
                                        <span>{`${user?.mobile||contact||""} `}</span>
                                    </div>
                                </div>
                                <div className="w-full flex items-center">
                                    <div className="w-32">
                                        <span className="text-gray-600 font-semibold">Billing Address</span>
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <span>{`${address?.address||""}, ${address?.city||""}, ${address?.pincode||""}, ${address?.country||""}`}</span>
                                    </div>
                                </div>
                            </div>
                        </div> : null}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SideComponent