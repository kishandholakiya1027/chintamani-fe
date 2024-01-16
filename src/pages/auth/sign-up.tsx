import AuthWrapper from '@/components/auth/AuthWrapper'
import useApi from '@/hooks/useApi'
import { apiPath } from '@/lib/api-path'
import { EMAIL_REGEX } from '@/lib/constant'
import { showToast } from '@/lib/utils'
import { handleLogin } from '@/redux/reducer/auth'
import{ ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

interface IError {
    email?: string
    password?: string
    firstname?: string
    lastname?: string
    otp?: string
}

interface IForm {
    email?: string
    password?: string
    firstname?: string
    lastname?: string
    otp?: string

}

const SignUp = () => {
    const [formData, setFormData] = useState<IForm>({})
    const [error, setError] = useState<IError>({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { apiAction } = useApi()
    const handleSubmit = async () => {
        let err: IError = {}
        if (!formData?.password) {
            err = { ...err, password: "Password is required" }
        }
        if (!formData?.firstname) {
            err = { ...err, firstname: "First name is required" }
        }
        if (!formData?.lastname) {
            err = { ...err, lastname: "Last name is required" }
        }
        if (!formData?.otp) {
            err = { ...err, otp: "OTP is required" }
        }
        if (!formData?.email) {
            err = { ...err, email: "Email is required" }
        }
        if (formData?.email && !EMAIL_REGEX.test(formData?.email)) {
            err = { ...err, email: "Email is not valid" }
        }

        if (Object.keys(err).length > 0) {
            setError(err)
            return
        }
        const data = await apiAction({ method: "post", url: `${apiPath?.auth?.register}`, data: formData })
        if (data) {
            showToast("Registered successfully")
            dispatch(handleLogin(data?.data))
            navigate("/")

        }
    }

    const handleEmailValidation = () => {
        let err: IError = {}

        if (!formData?.email) {
            err = { ...err, email: "Email is required" }
        }
        if (formData?.email && !EMAIL_REGEX.test(formData?.email)) {
            err = { ...err, email: "Email is not valid" }
        }

        if (Object.keys(err).length > 0) {
            setError({ ...error, ...err })
            return false
        }
        return true

    }

    const sendOtp = async () => {
        if (handleEmailValidation())
            await apiAction({ method: "post", url: `${apiPath?.auth?.emailVerification}`, data: { email: formData?.email } }).then(async (data) => {
                console.log("🚀 ~ awaitapiAction ~ data:", data)
                if (data?.Otp && !data?.error) {
                    showToast("OTP sent successfully !.Please check your mail")


                } else {
                    let resendData = await apiAction({ method: "post", url: `${apiPath?.auth?.resendOTP}`, data: { email: formData?.email } })
                    if (resendData && !data?.error) {
                        showToast("OTP sent successfully .Please check your mail !")
                    }
                    // showErrorToast(data?.message)
                }
            })
    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setError({ ...error, [e.target.name]: "" })
    }


    return (
        <AuthWrapper>
            <div className="row-span-4 row-start-2 text-4xl">
                Sign up
                <div className="pt-10 pr-20">
                    <label className="text-sm font-sans font-medium">
                        First name
                    </label>
                    <input
                        type="text"
                        name="firstname"
                        onChange={(e) => handleOnChange(e)}
                        placeholder="Enter your first name"
                        className="w-full bg-[#211c50] py-3 px-6 border hover: border-gray-500 rounded shadow text-base font-sans" />
                    {error?.firstname && <p className="text-red-500 text-xs mt-2">{error?.firstname}</p>}
                </div>
                <div className=" pr-20">
                    <label className="text-sm font-sans font-medium">
                        Last name
                    </label>
                    <input
                        type="text"
                        name="lastname"
                        onChange={(e) => handleOnChange(e)}
                        placeholder="Enter your last name"
                        className="w-full bg-[#211c50] py-3 px-6 border hover: border-gray-500 rounded shadow text-base font-sans" />
                    {error?.lastname && <p className="text-red-500 text-xs mt-2">{error?.lastname}</p>}
                </div>
                <div className=" pr-20">
                    <label className="text-sm font-sans font-medium">
                        Email
                    </label>
                    <div className='relative'>
                        <input
                            type="text"
                            name="email"
                            onChange={(e) => handleOnChange(e)}
                            placeholder="Enter your email"
                            className="w-full bg-[#211c50] py-3 px-6 border hover: border-gray-500 rounded shadow text-base font-sans" />
                        {formData?.email ? <div className='absolute top-3 right-4 text-[14px]   '>
                            <button onClick={() => sendOtp()} className='text-center  px-3 bg-[#605b98] flex items-center h-[30px] hover:bg-[#393376] rounded-md text-white'>Send OTP</button>
                        </div> : null}
                    </div>
                    {error?.email && <p className="text-red-500 text-xs mt-2">{error?.email}</p>}
                </div>
               <div className=" pr-20">
                    <label className="text-sm font-sans font-medium">
                        OTP
                    </label>
                    <input
                        type="text"
                        name="otp"
                        onChange={(e) => handleOnChange(e)}
                        placeholder="Enter your otp"
                        className="w-full bg-[#211c50] py-3 px-6 border hover: border-gray-500 rounded shadow text-base font-sans" />
                    {error?.otp && <p className="text-red-500 text-xs mt-2">{error?.otp}</p>}
                </div> 
                <div className="pt-2 pr-20">
                    <label className="text-sm font-sans font-medium">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => handleOnChange(e)}
                        placeholder="Enter your password"
                        className=" w-full bg-[#211c50] py-3 px-6 border hover: border-gray-500 rounded shadow text-base font-sans" />
                    {error?.password && <p className="text-red-500 text-xs mt-2">{error?.password}</p>}

                    {/* <a href="" className="text-sm font-sans font-medium text-gray-600 underline">
                        Forgot password?
                    </a> */}
                </div>
                <div className="text-sm font-sans font-medium w-full pr-20 pt-10">
                    <button
                        onClick={handleSubmit}
                        type="button"
                        className="text-center w-full py-4 bg-[#605b98] hover:bg-[#393376] rounded-md text-white">
                        SIGN UP
                    </button>
                </div>
            </div>
            <div className='flex text-sm font-sans font-medium text-gray-400 mt-2 gap-1'>
                Don´t have an account?
                <Link to="/login" className='underline'>
                    Sign In
                </Link>
            </div>

        </AuthWrapper>
    )
}

export default SignUp