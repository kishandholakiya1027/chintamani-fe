import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {  toast } from 'react-toastify';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const showToast =(msg:string) => {
  toast(msg);
}
export const showErrorToast =(msg:string) => {
  toast.error(msg);
}

export const convertObjectToURL = (obj: any) => {
  return Object.entries(obj)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      // If the property is an array, format it as an array in the string
      return `${key}=${JSON.stringify(value)}`;
    } else {
      // Otherwise, include the property as key=value
      return `${key}=${value}`;
    }
  })
  .join('&');
//   let urlString = "";
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//         urlString += key + "=" + obj[key] + "&";
//     }
// }

// return  urlString.slice(0, -1);
}

export const formatPhoneNumber = (value: string, data: any): string => {
  const numericPhoneNumber = value?.replace(/\D/g, '');

  const startsWithCountryCode = numericPhoneNumber?.startsWith(data?.dialCode);

  const finalNumericPhoneNumber = startsWithCountryCode
    ? numericPhoneNumber.slice(data?.dialCode?.length)
    : numericPhoneNumber;

  const formattedPhoneNumber = `+${data?.dialCode} ${finalNumericPhoneNumber}`;

  return formattedPhoneNumber;
};