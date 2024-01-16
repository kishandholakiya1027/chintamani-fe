import useApi from "@/hooks/useApi";
import { apiPath } from "@/lib/api-path";
import { EMAIL_REGEX, PHONE_REGEX } from "@/lib/constant";
import { showToast } from "@/lib/utils";
import {  useState } from "react";
import { Link } from "react-router-dom";

interface IError {
  name?: string
  email?: string
  phone_number?: string
  comment?: string

}


const ContactUs = () => {
  const { apiAction } = useApi()
  const [params, setParams] = useState({
    name: "",
    email: "",
    phone_number: "",
    comment: "",
  })

  const [error, setError] = useState<IError>({})

  const handleSubmit = async (e: any) => {
    e?.preventDefault()
    let err: IError = {}
    if (!params.name) {
      err = { ...err, name: "Name is required" }

    }
    if (!params.email) {
      err = { ...err, email: "Email is required" }

    }
    if (!params.phone_number) {
      err = { ...err, phone_number: "Phone number is required" }

    }
    if (!params.comment) {
      err = { ...err, comment: "Comment is required" }

    }
    if (!EMAIL_REGEX.test(params.email)) {
      err = { ...err, email: "Email is not valid" }

    }
    if (!PHONE_REGEX.test(params.phone_number)) {
      err = { ...err, phone_number: "Phone number is not valid" }

    }
    if (Object.keys(err).length > 0) {
      setError(err)
      return
    }

    const data = await apiAction({ method: "post", url: `${apiPath?.contactUs?.create}`, data: params })
    if (data) {
      showToast("Thank you for contacting us!")
    }
  }

  const handleChange = (name: string, value: string) => {
    setParams({ ...params, [name]: value })
    setError({ ...error, [name]: "" })
  }

  return (
    <section className="w-full">
      <div className="flex flex-col items-start">
        <div className="flex flex-wrap w-full items-stretch justify-center">
          <div className="p-[20px] flex flex-nowrap flex-col items-start">
            <div>
              <div className="px-0 py-[75px] flex w-full flex-row items-stretch flex-wrap border-b-[1px]">
                <button className="text-sm font-poppins text-[#767676] font-semibold mr-1">
                  <Link to={"/"}>Home</Link>
                </button>{" "}
                <span className="text-sm text-[#767676]">/ </span>{" "}
                <button className="text-sm font-poppins text-[#767676] font-normal">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start py-[75px] px-[20px] container">
        <div className="w-full flex items-stretch justify-center flex-wrap">
          <div className="p-[20px] flex flex-nowrap flex-col items-start">
            <div className="flex flex-nowrap flex-col items-start">
              <h4 className="text-[20px] font-poppins font-bold text-[#404040]">
                ADDRESS
              </h4>
              <div className="text-[#404040] text-base font-normal font-poppins">
                Keas 69 Str. 15234, Chalandri Athens, Greece
              </div>
            </div>
            <div className="flex flex-nowrap flex-col items-start">
              <h4 className="text-[20px] font-poppins font-bold text-[#404040]">
                PHONES
              </h4>
              <div className="text-[#404040] text-base font-normal font-poppins">
                Support: +1 (647) 321-4620
                <br />
                Whatsapp : +44 7425 380174
                <br />
                Contact No : +91 93278 12738
              </div>
            </div>
            <div className="flex flex-nowrap flex-col items-start">
              <h4 className="text-[20px] font-poppins font-bold text-[#404040]">
                EMAIL ADDRESSES
              </h4>
              <Link to={""} className="text-[#000000] font-semibold text-base">
                Support: info@chintamanigems.com
                <br />
              </Link>
              <div className="text-[#404040] font-normal text-base">
                Sales manager: manager@example.com <br />
              </div>
              <div className="text-[#404040] font-normal text-base">
                Director: admin@example.com
              </div>
            </div>
          </div>
          <div className="p-[20px] flex flex-nowrap flex-col items-start">
            <div className="flex flex-nowrap flex-col items-start">
              <h3 className="text-[24px] font-poppins font-bold text-[#404040]">
                QUICK CONTACT <br />
              </h3>
              <div className="flex flex-nowrap flex-col items-start">
                <div>
                  <div>
                    <div className="absolute overflow-hidden h-[1px] w-[1px] m-[-1px] clip-[1px] clip-path-inset-[50%]">
                      <p
                        role="status"
                        aria-live="polite"
                        aria-atomic="true"
                      ></p>
                      <ul></ul>
                    </div>
                    <form action="" onSubmit={(e) => handleSubmit(e)}>
                      <div>
                        <p className="py-[16px]">
                          <label
                            htmlFor=""
                            className="text-[13px] font-semibold text-[#404040]"
                          >
                            {" "}
                            Name: <br />
                          </label>
                          <span className="relative">
                            <input
                              type="text"
                              name="your-name"

                              onChange={(e) => handleChange("name", e.target.value)}
                              className="bg-[#fff] border-[1px] h-[38px] border-[#ccc] rounded-[19px] text-[#777] w-full mt-[8px] outline-none px-[12px]"
                            />
                            {error?.name && <p className="text-xs mt-2 text-red-500">{error?.name}</p>}
                          </span>
                        </p>
                        <p className="py-[16px]">
                          <label
                            htmlFor=""
                            className="text-[13px] font-semibold text-[#404040]"
                          >
                            {" "}
                            Email Address:
                            <br />
                          </label>
                          <span className="relative">
                            <input
                              type="email"
                              name="your-email"

                              onChange={(e) => handleChange("email", e.target.value)}
                              className="bg-[#fff] border-[1px] h-[38px] border-[#ccc] rounded-[19px] text-[#777] w-full mt-[8px] outline-none px-[12px]"
                            />
                            {error?.email && <p className="text-xs mt-2 text-red-500">{error?.email}</p>}

                          </span>
                        </p>
                        <p className="py-[16px]">
                          <label
                            htmlFor=""
                            className="text-[13px] font-semibold text-[#404040]"
                          >
                            {" "}
                            Phone Number:
                            <br />
                          </label>
                          <span className="relative">
                            <input
                              type="tel"
                              maxLength={13}
                              name="your-phone"

                              onChange={(e) => handleChange("phone_number", e.target.value)}
                              className="bg-[#fff] border-[1px] h-[38px] border-[#ccc] rounded-[19px] text-[#777] w-full mt-[8px] outline-none px-[12px]"
                            />
                            {error?.phone_number && <p className="text-xs mt-2 text-red-500">{error?.phone_number}</p>}

                          </span>
                        </p>
                        <p className="py-[16px]">
                          <label
                            htmlFor=""
                            className="text-[13px] font-semibold text-[#404040]"
                          >
                            {" "}
                            Comment:
                            <br />
                          </label>
                          <span className="relative">
                            <textarea
                              onChange={(e) => handleChange("comment", e.target.value)}
                              aria-rowspan={10}
                              aria-colspan={40}
                              name="your-comment"

                              className="bg-[#fff] shadow-none border-[1px] border-[#ddd] text-[13px] text-[#666] overflow-auto rounded-[19px] outline-none px-[10px] py-[5px] h-[109px] mt-[8px] w-full mb-[5px] "
                            />
                            {error?.comment && <p className="text-xs text-red-500">{error?.comment}</p>}

                          </span>
                        </p>
                        <p className="py-[16px]">
                          <button

                            onSubmit={handleSubmit}
                            className="bg-[#211c50] text-[#fff] cursor-pointer block font-bold text-[13px] h-[38px] uppercase rounded-[19px] text-center px-[20px]"
                          >Submit</button>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
