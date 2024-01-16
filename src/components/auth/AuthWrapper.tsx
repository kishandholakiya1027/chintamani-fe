import  { ReactNode } from 'react'

interface Props {
    children: ReactNode
  
}

const AuthWrapper = ({children}:Props) => {
    return (
        <div className="bg-gray-100  bg-[#211c50] h-screen overflow-y-auto  flex justify-center items-center ">
            <div className="w-1/2 hidden  h-screen lg:block">
                <img src="/assests/Images/BgFooter.png" alt="Placeholder Image" className="object-cover  w-full h-screen" />
            </div>
            <div className="lg:p-36 text-white md:p-52 sm:20 p-8 h-[100vh] overflow-y-auto  w-full bg-[#211c50] lg:w-1/2">
                {children}
            </div>
        </div>
    )
}

export default AuthWrapper