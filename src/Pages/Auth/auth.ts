import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "http://localhost/final/";

const loginUser = async (data: { phone: string; password: string }) => {
   const response = await axios.post(
      `${BASE_URL}login/`,
      {
         phoneNumber: data.phone,
         password: data.password,
      },
      {
         headers: { "Content-Type": "application/json" },
         withCredentials: true,
      }
   );

   return response.data;
};

export const useLogin = () => {
   return useMutation({
      mutationFn: loginUser,
      onSuccess: () => {
         console.log("ورود انجام شد");
      },
      onError: () => {
         console.log("ورود انجام نشد");
      },
   });
};

const registerUser = async (data: {
   fullName: string;
   phone: string;
   email: string;
   password: string;
}) => {
   console.log(data);
   const response = await axios.post(
      `${BASE_URL}signup.php/`,
      {
         fullName: data.fullName,
         phoneNumber: data.phone,
         email: data.email,
         password: data.password,
      },
      {
         headers: { "Content-Type": "application/json" },
         withCredentials: true,
      }
   );
   return response.data;
};

export const useRegister = () => {
   return useMutation({
      mutationFn: registerUser,
      onSuccess: () => {
         console.log("ثبت نام موفقیت آمیز بود");
      },
      onError: () => {
         console.log("ثبت نام انجام نشد");
      },
   });
};
