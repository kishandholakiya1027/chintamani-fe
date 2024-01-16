import AuthWrapper from '@/components/auth/AuthWrapper'
import useApi from '@/hooks/useApi'
import { apiPath } from '@/lib/api-path'
import { EMAIL_REGEX } from '@/lib/constant'
import { showToast } from '@/lib/utils'
import  { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

interface IError {
    email?: string
    password?: string
    otp?: string

}

interface IForm {
    email?: string
    password?: string
    new_pass?: string
    confirm_pass?: string
    otp?: string

}
const Forgotpassword = () => {
    const [formData, setFormData] = useState<IForm>({})
const navigate =  useNavigate()
    const [showOTPField, setShowOTPField] = useState<boolean>(false)
    const [verified, setVerified] = useState<boolean>(false)

    const [error, setError] = useState<IForm>({})
    const { apiAction } = useApi()

    const onForgotPassword = async () => {
        let err: IError = {}

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
        const data = await apiAction({ method: "post", url: `${apiPath?.auth?.forgotPassword}`, data: { email: formData?.email } })
        console.log("🚀 ~ onForgotPassword ~ data:", data)
        if (data?.data?.Otp) {
            showToast("OTP sent successfully .Please check your mail")

            setShowOTPField(true)

            // dispatch(handleLogin(data?.data))
            // navigate("/")

        }
    }

    const handleValidation = () => {
        let err: IForm = {}

        if (!formData?.email) {
            err = { ...err, email: "Email is required" }
        }
        if (formData?.email && !EMAIL_REGEX.test(formData?.email)) {
            err = { ...err, email: "Email is not valid" }
        }

        if (!formData?.otp ) {
            err = { ...err, otp: "OTP is required" }
        }
        if (!formData?.new_pass) {
            err = { ...err, new_pass: "New password is required" }
        }
        if (!formData?.confirm_pass) {
            err = { ...err, confirm_pass: "Confirm password is required" }
        }
        if (formData?.new_pass !== formData?.confirm_pass && formData?.confirm_pass) {
            err = { ...err, confirm_pass: "Password does not match" }
        }
        console.log("🚀 ~ handleValidation ~ err:", err)
        if (Object.keys(err).length > 0) {
            setError(err)
            return false
        }
        return true
    }

    const VerifyOtp = async () => {
        let err: IError = {}

        // if (!formData?.otp) {
        //     err = { ...err, email: "OTP is required" }
        // }

        if (!formData?.email) {
            err = { ...err, email: "Email is required" }
        }
        if (formData?.email && !EMAIL_REGEX.test(formData?.email)) {
            err = { ...err, email: "Email is not valid" }
        }
        if (!formData?.otp ) {
            err = { ...err, otp: "OTP is required" }
        }

        if (Object.keys(err).length > 0) {
            setError(err)
            return
        }
        const data = await apiAction({ method: "post", url: `${apiPath?.auth?.verifyOTP}`, data: { email: formData?.email, otp: formData?.otp } })
        console.log("🚀 ~ VerifyOtp ~ data:", data)
        if (!data?.data?.error) {
            setVerified(data?.data?.ForgetPasswordToken)
            showToast("Verified  successfully!")
          
            // dispatch(handleLogin(data?.data))
            // navigate("/")

        }
    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setError({ ...error, [e.target.name]: "" })
    }

    const handleSubmit = async () => {
        if (handleValidation()) {
            const data = await apiAction({ method: "post", url: `${apiPath?.auth?.createPassword}`, data: { new_pass: formData?.new_pass, confirm_pass: formData?.confirm_pass },headers: { "Authorization": `Bearer ${verified}` } })
            console.log("🚀 ~ VerifyOtp ~ data:", data)
            if (!data?.data?.error) {
                showToast("Your password changed  successfully!")
                navigate("/login")
            }
        }
    }

    return (
        <AuthWrapper>
            <div className="row-span-4 row-start-2 text-4xl">
                Forgot Password
                <div className="pt-10 pr-20">
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
                        <div className='absolute top-3 right-4 text-[14px]   '>
                            <button onClick={() => onForgotPassword()} className='text-center  px-3 bg-[#605b98] flex items-center h-[30px] hover:bg-[#393376] rounded-md text-white'>Send OTP</button>
                        </div>
                    </div>
                    {error?.email && <p className="text-red-500 text-xs mt-2">{error?.email}</p>}
                </div>
                <div className=" pr-20">
                    <label className="text-sm font-sans font-medium">
                        OTP
                    </label>
                    <div className='relative'>
                        <input
                            type="text"
                            name="otp"
                            readOnly={!showOTPField}
                            onChange={(e) => handleOnChange(e)}
                            placeholder="Enter your otp"
                            className="w-full bg-[#211c50] py-3 px-6 border hover: border-gray-500 rounded shadow text-base font-sans" />
                        {error?.otp && <p className="text-red-500 text-xs mt-2">{error?.otp}</p>}
                        <div className='absolute top-3 right-4 text-[14px]   '>
                            <button onClick={() => VerifyOtp()} className='text-center  px-3 bg-[#605b98] flex items-center h-[30px] hover:bg-[#393376] rounded-md text-white'>Verify</button>
                        </div>

                    </div>
                </div>
                <div className="pt-2 pr-20">
                    <label className="text-sm font-sans font-medium">
                        New Password
                    </label>
                    <input
                        type="password"
                        name="new_pass"
                        onChange={(e) => handleOnChange(e)}
                        placeholder="Enter your new password"
                        className=" w-full bg-[#211c50] py-3 px-6 border hover: border-gray-500 rounded shadow text-base font-sans" />
                    {error?.new_pass && <p className="text-red-500 text-xs mt-2">{error?.new_pass}</p>}


                </div>
                <div className=" pr-20">
                    <label className="text-sm font-sans font-medium">
                        Confirm  Password
                    </label>
                    <input
                        type="password"
                        name="confirm_pass"
                        onChange={(e) => handleOnChange(e)}
                        placeholder="Enter your confirm_pass"
                        className=" w-full bg-[#211c50] py-3 px-6 border hover: border-gray-500 rounded shadow text-base font-sans" />
                    {error?.confirm_pass && <p className="text-red-500 text-xs mt-2">{error?.confirm_pass}</p>}


                </div>
                <div className="text-sm font-sans font-medium w-full pr-20 pt-10">
                    <button
                        onClick={() => handleSubmit()}
                        type="button"
                        // disabled={!formData?.otp || !formData?.email}
                        className="text-center w-full py-4 bg-[#605b98] hover:bg-[#393376] rounded-md text-white">
                        Change Password
                    </button>
                </div>

            </div>
            <div className='flex text-sm font-sans font-medium text-gray-400 mt-2 gap-1'>
                <Link to={"/login"} className='underline'>
                    Back to Sign In
                </Link>
              
            </div>
        </AuthWrapper>
    )
}

export default Forgotpassword