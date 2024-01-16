import  { useState } from 'react'
import Profile from './profile'
import Order from './order'
import Setting from './setting'

const Index = () => {
const [activeTab,setActiveTab] = useState("Profile")
    const tabs = [
        "Profile","My Orders","Settings"
    ]


const renderView = () => {
    switch (activeTab) {
        case "Profile":
            return <Profile />
        case "My Orders":
            return <Order />
        case "Settings":
            return <Setting />
        default:
            return <div>Profile</div>
    }
}

  return (
    <div className='container mx-auto'>

       <div className='mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md'>
        {
            tabs?.map((tab:string)=>{
                return <button className={`${activeTab === tab ? "bg-[#211c50] text-white" : "text-gray-500"} flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300`} onClick={()=>setActiveTab(tab)}>
                    {tab}
                </button>
            })
        }
        </div> 
        <div className='my-10'>
            {renderView()}
        </div>


    </div>
  )
}

export default Index