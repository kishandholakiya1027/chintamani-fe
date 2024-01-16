import  { ChangeEvent, useState } from 'react';
import useApi from '@/hooks/useApi';
import { apiPath } from '@/lib/api-path';
import { showToast } from '@/lib/utils';
import { useSelector } from 'react-redux';

interface IError {
  old_pass?: string;
  new_pass?: string;
  confirm_pass?: string;
}

interface IForm {
  old_pass?: string;
  new_pass?: string;
  confirm_pass?: string;
}

const Setting = () => {
  const { token } = useSelector((state: { auth: any }) => state.auth)

  const [formData, setFormData] = useState<IForm>({});
  const [error, setError] = useState<IError>({});
  const { apiAction } = useApi();

  const handleSubmit = async () => {
    let err: IError = {};

    if (!formData?.old_pass) {
      err = { ...err, old_pass: "Old password is required" };
    }
    if (!formData?.new_pass) {
      err = { ...err, new_pass: "New password is required" };
    }
    if (!formData?.confirm_pass) {
      err = { ...err, confirm_pass: "Confirm password is required" };
    } else if (formData?.new_pass !== formData?.confirm_pass) {
      err = { ...err, confirm_pass: "Passwords do not match" };
    }

    if (Object.keys(err).length > 0) {
      setError(err);
      return;
    }

    const data = await apiAction({
      method: "post",
      url: `${apiPath?.auth?.changePassword }`,
      data: formData,
      headers: { Authorization: `Bearer ${token}` },
    });

    if (data) {
      showToast("Password updated successfully");
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };

  return (
    <>
      <div className="row-span-4 row-start-2 md:text-4xl text-2xl">
        Update Password
        <div className="">
          <label className="text-sm font-sans font-medium">Old Password</label>
          <input
            type="password"
            name="old_pass"
            onChange={(e) => handleOnChange(e)}
            placeholder="Enter your old password"
            className="w-full py-3 px-6 border hover: border-gray-500 rounded shadow text-base font-sans"
          />
          {error?.old_pass && (
            <p className="text-red-500 text-xs mt-2">{error?.old_pass}</p>
          )}
        </div>
        <div className="">
          <label className="text-sm font-sans font-medium">New Password</label>
          <input
            type="password"
            name="new_pass"
            onChange={(e) => handleOnChange(e)}
            placeholder="Enter your new password"
            className="w-full py-3 px-6 border hover: border-gray-500 rounded shadow text-base font-sans"
          />
          {error?.new_pass && (
            <p className="text-red-500 text-xs mt-2">{error?.new_pass}</p>
          )}
        </div>
        <div className="">
          <label className="text-sm font-sans font-medium">Confirm Password</label>
          <input
            type="password"
            name="confirm_pass"
            onChange={(e) => handleOnChange(e)}
            placeholder="Confirm your new password"
            className="w-full py-3 px-6 border hover: border-gray-500 rounded shadow text-base font-sans"
          />
          {error?.confirm_pass && (
            <p className="text-red-500 text-xs mt-2">{error?.confirm_pass}</p>
          )}
        </div>
        <div className="text-sm font-sans font-medium w-full pt-10">
          <button
            onClick={handleSubmit}
            type="button"
            className="text-center w-full py-4 bg-[#605b98] hover:bg-[#211c50] rounded-md text-white"
          >
            UPDATE PASSWORD
          </button>
        </div>
      </div>
    </>
  );
};

export default Setting;
