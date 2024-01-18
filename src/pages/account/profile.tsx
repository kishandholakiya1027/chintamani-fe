import Loader from "@/components/common/Loader";
import useApi from "@/hooks/useApi";
import { apiPath } from "@/lib/api-path";
import { setUser } from "@/redux/reducer/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { formatPhoneNumber } from "@/lib/utils";
import { PHONE_CODE_REGEX } from "@/lib/constant";

const Profile = () => {
  const { loader, apiAction } = useApi();
  const [formData, setFormData] = useState<any>({});
  const [error, setError] = useState<any>({});
  const { user, token } = useSelector((state: any) => state.auth);
  const [imageFile, setImageFile] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleImageChange = (file: any) => {
    setImageFile(file);
  };

  const updateUser = async () => {
    let updatedFormData: any = {
      image: formData?.image,
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      mobile: formData.mobile,
      Address: formData.Address,
      userid: user.id,
    };
    const formdata = new FormData();
    if (imageFile) {
      formdata.append("image", imageFile);

      const response = await apiAction({
        method: "post",
        url: `${apiPath?.image?.uploadImage}`,
        data: formdata,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (response) {
        updatedFormData = { ...updatedFormData, image: response?.data?.image };
        setFormData({ ...formData, image: response?.data?.image });
        setImageFile(null);
      }
    }

    // debugger
    // urlencoded.append('image', formData?.image);
    // urlencoded.append('firstname', updatedFormData.firstname);
    // urlencoded.append('lastname', updatedFormData.lastname);
    // urlencoded.append('email', updatedFormData.email);
    // urlencoded.append('mobile', updatedFormData.mobile);
    // urlencoded.append('Address', updatedFormData.Address);
    // urlencoded.append('userid', user.id);

    try {
      const response = await apiAction({
        method: "patch",
        url: `${apiPath?.auth?.updateUser}`,
        data: updatedFormData,
        headers: {
          Authorization: `Bearer ${token}`,
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      if (response) {
        dispatch(setUser(response?.data));
        toast.success("User Updated Successfully");
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const OnSubmit = () => {
    let err = {};
    if (!PHONE_CODE_REGEX.test(formData?.mobile)) {
      err = { ...err, mobile: "Phone number is not valid" };
    }
    if (Object.keys(err).length > 0) {
      setError(err);
      return
    }
    updateUser();
  };

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const handleCountryChange = (value:any, data:any) => {
    const formattedPhoneNumber = formatPhoneNumber(value, data);
    handleChange("mobile", formattedPhoneNumber);
  }

  return (
    <div>
      <div className="px-5 pb-5">
        <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
          <div className="w-full flex items-center">
            <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
              <img
                src={
                  imageFile ? URL.createObjectURL(imageFile) : formData?.image
                }
                className="object-fill w-full h-full"
                alt=""
              />
            </div>
            <label
              htmlFor="profileImage"
              className="flex ml-2 text-xs items-center px-6 py-2.5 font-medium tracking-wide text-white capitalize bg-[#211c50] rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900 transition duration-300 transform active:scale-95 ease-in-out"
            >
              <span className="pl-2 mx-1">Upload</span>
              <input
                type="file"
                id="profileImage"
                className="hidden"
                accept="image/*"
                onChange={(e: any) => handleImageChange(e.target.files[0])}
              />
            </label>
          </div>
        </div>
        {/* <Loader /> */}

        {loader ? <Loader /> : null}

        <div className="flex">
          <div className="flex-grow w-1/4 pr-2">
            <input
              placeholder="First Name"
              type="text"
              value={formData?.firstname}
              onChange={(e) => handleChange("firstname", e.target.value)}
              className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            />
            {error?.firstname && (
              <p className="text-red-500 text-xs mt-2">{error?.firstname}</p>
            )}
          </div>

          <div className="flex-grow">
            <input
              placeholder="Last Name"
              type="text"
              value={formData?.lastname}
              onChange={(e) => handleChange("lastname", e.target.value)}
              className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            />
            {error?.lastname && (
              <p className="text-red-500 text-xs mt-2">{error?.lastname}</p>
            )}
          </div>
        </div>

        <input
          placeholder="Email"
          type="text"
          value={formData?.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
        />
        {error?.email && (
          <p className="text-red-500 text-xs mt-2">{error?.email}</p>
        )}

        <div className="flex">
          <div className="w-full mt-2">
            <PhoneInput
              placeholder="Enter phone number"
              value={formData?.mobile?.replace(/\D/g, "") || null}
              countryCodeEditable={false}
              onChange={(value: any, data: any) =>
                handleCountryChange(value, data)
              }
              country="us"
              inputStyle={{
                width: "100%",
                fontSize: "1rem",
                border: "none",
                borderRadius: "0.5rem",
                backgroundColor: "rgb(229 231 235)",
                height: "44px",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
              }}
              buttonStyle={{
                borderRadius: "0.5rem",
              }}
              inputClass="text-black placeholder-gray-600 w-full px-4 py-2.5text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            />
            {error?.mobile && (
              <p className="text-red-500 text-xs mt-2">{error?.mobile}</p>
            )}
          </div>
        </div>

        <input
          placeholder="Address"
          type="text"
          value={formData?.Address}
          onChange={(e) => handleChange("Address", e.target.value)}
          className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
        />
        {error?.Address && (
          <p className="text-red-500 text-xs mt-2">{error?.Address}</p>
        )}

        <div className="flex justify-end  my-6">
          <button
            onClick={() => OnSubmit()}
            type="button"
            className="flex items-center px-6 py-2.5 font-medium tracking-wide text-white capitalize   bg-[#211c50] rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
          >
            <span className="pl-2 mx-1">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
