import AuthWrapper from "@/components/auth/AuthWrapper";
import Loader from "@/components/common/Loader";
import useApi from "@/hooks/useApi";
import { apiPath } from "@/lib/api-path";
import { EMAIL_REGEX } from "@/lib/constant";
import { showErrorToast, showToast } from "@/lib/utils";
import { handleLogin } from "@/redux/reducer/auth";
import { postCartData } from "@/redux/reducer/cart";
import { AppDispatch } from "@/redux/store";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface IError {
  email?: string;
  password?: string;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<IError>({});
  const [password, setPassword] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { apiAction, loader } = useApi();

  const cartProduct = useSelector((state: any) => state.cart?.cartProduct);

  const handleSubmit = async () => {
    let err: IError = {};
    if (!email) {
      err = { ...err, email: "Email is required" };
    }
    if (!password) {
      err = { ...err, password: "Password is required" };
    }
    if (email && !EMAIL_REGEX.test(email)) {
      err = { ...err, email: "Email is not valid" };
    }

    if (Object.keys(err).length > 0) {
      setError(err);
      return;
    }
    try {
      const data = await apiAction({
        method: "post",
        url: `${apiPath?.auth?.login}`,
        data: { email, password },
      });
      if (data?.data?.qurey?.role === 1) {

        showToast("Login  successfully!");

		const dispatchPromises: any[] = [];



        cartProduct?.forEach((element: any) => {
			dispatchPromises.push(
			  dispatch(
				postCartData({
				  userid: data?.data?.qurey?.id,
				  quantity: element?.quantity,
				  productid: element?.product?.id,
				  token: data?.data?.accessToken
				})
			  )
			);
		  });

		  await Promise.all(dispatchPromises);

		  
		  await dispatch(handleLogin(data?.data));
		  navigate("/");
      } else {
        showErrorToast("Failed to login. Please try again later.");
      }
    } catch (error) {
      showErrorToast("Something went wrong!");
    }
  };

  return (
    <div className="relative h-screen">
      {createPortal(
        <>
          {loader && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Loader colors={"border-[#fff]"} />
            </div>
          )}
        </>,
        document.body
      )}
      <AuthWrapper>
        <div className="row-span-4 row-start-2 text-4xl">
          Sign In
          <div className="pt-10 xl:pr-20 lg:pr-0 md:pr-0 pr-0">
            <label className="text-sm font-sans font-medium">Email</label>
            <input
              type="text"
              name="username"
              onChange={(e) => {
                setError({ ...error, email: "" });
                setEmail(e.target.value);
              }}
              placeholder="Enter your email"
              className="w-full bg-[#211c50] py-3 px-6 border hover: border-gray-500 rounded shadow text-base font-sans"
            />
            {error?.email && (
              <p className="text-red-500 text-xs mt-2">{error?.email}</p>
            )}
          </div>
          <div className="pt-2 xl:pr-20 lg:pr-0 md:pr-0 pr-0">
            <label className="text-sm font-sans font-medium">Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => {
                setError({ ...error, password: "" });
                setPassword(e.target.value);
              }}
              placeholder="Enter your password"
              className=" w-full bg-[#211c50] py-3 px-6 border hover: border-gray-500 rounded shadow text-base font-sans"
            />
            {error?.password && (
              <p className="text-red-500 text-xs mt-2">{error?.password}</p>
            )}
            <Link
              to={"/forgot-password"}
              className="text-sm font-sans font-medium text-gray-600 underline"
            >
              Forgot password?
            </Link>
          </div>
          <div className="text-sm font-sans font-medium w-full xl:pr-20 lg:pr-0 md:pr-0 pr-0 pt-10">
            <button
              onClick={handleSubmit}
              type="button"
              className="text-center w-full py-4 bg-[#605b98] hover:bg-[#393376] rounded-md text-white"
            >
              SIGN IN
            </button>
          </div>
        </div>
        <div className="flex text-sm font-sans font-medium text-gray-400 mt-2 gap-1">
          Don´t have an account?
          <Link to={"/sign-up"} className="underline">
            Sign up
          </Link>
          {/* <a href="/sign-up" className=" underline">
            </a> */}
        </div>
      </AuthWrapper>
    </div>
  );
};

export default Login;
