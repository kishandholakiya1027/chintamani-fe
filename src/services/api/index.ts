import { showErrorToast, showToast } from "@/lib/utils";
import { handleLogout } from "@/redux/reducer/auth";
import axios from "axios";
import { useDispatch } from "react-redux";

export const BASE_URL = import.meta.env.VITE_API_BASE_URL

interface AxiosParams {
    baseURL?: string;
    headers?: any;
    method?: "get" | "post" | "patch" | "put" | "delete";
    data?: any;
    params?: { [key: string]: string };
    url: string;
    isFormData?: boolean;
}

const useApi = async ({
    baseURL = BASE_URL,
    headers = {},
    method = "get",
    data = null,
    params,
    url,
    isFormData = false,
}: AxiosParams) => {
    const dispatch = useDispatch()
    const instance = axios.create({
        baseURL,
    });

    const config = {
        url,
        method,
        data,
        params,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
    };

    if (isFormData) {
        config.headers = {
            ...config.headers,
            "Content-Type": "multipart/form-data",
        };
    }

    //   instance.interceptors.response.use(
    //     (res) => {
    //       return res;
    //     },
    //     (error: AxiosError) => {
    //       const err: any = {
    //         code: error.response?.status || 0,
    //         data: error.response?.data,
    //       };
    //       return Promise.reject(err);
    //     }
    //   );

    return instance.request(config).then(data => {
        if (data?.status === 200) {
            return data?.data
        } else {
            showToast(data?.data?.error || data?.data?.message)
        }
    }).catch(err => {
        if(err?.response?.data?.message === "Invalid authorization token"){
            console.log("🚀 ~ file: index.ts:68 ~ returninstance.request ~ err:", err)
            dispatch(handleLogout())
            return
        }
        showErrorToast(err?.response?.data?.message||err?.message)
    });
};

export default useApi;
