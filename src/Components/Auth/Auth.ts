import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";

const baseUrl = "http://127.0.0.1:8000/accounts/";

const loginUser = async (data: { phone: string; password: string }) => {
    const response = await axios.post(`${baseUrl}login/`, {
        phone_number: data.phone,
        password: data.password,
    }, {
        headers: { "Content-Type": "application/json" },
    });

    return response.data;
};

export const useLogin = () => {
    return useMutation({
        mutationFn: loginUser,
        onSuccess: () => {
            Swal.fire({
                title: "ورود موفقیت آمیز بود",
                icon: "success",
                confirmButtonText: "باشه",
            });
        },
        onError: (error: any) => {
            Swal.fire({
                title: "خطا در ورود به حساب",
                text: error.response?.data?.message || "مشکلی پیش آمده است.",
                icon: "error",
                confirmButtonText: "باشه",
            });
        },
    });
};

const registerUser = async (data: { fullName: string; phone: string; email: string; password: string }) => {
    const response = await axios.post(`${baseUrl}register/`, {
        full_name: data.fullName,
        phone_number: data.phone,
        email: data.email,
        password: data.password,
    }, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
    });
    return response.data;
};

export const useRegister = () => {
    return useMutation({
        mutationFn: registerUser,
        onSuccess: () => {
            Swal.fire({
                title: "ثبت نام موفقیت آمیز بود",
                icon: "success",
                confirmButtonText: "باشه",
            });
        },
        onError: (error: any) => {
            Swal.fire({
                title: "خطا در ثبت نام",
                text: error.response?.data?.message || "مشکلی پیش آمده است.",
                icon: "error",
                confirmButtonText: "متوجه شدم",
            });
        },
    });
};

const verifyCode = async (code: string) => {
    const response = await axios.post(`${baseUrl}verify_code/`, { code }, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
    });
    return response.data;
};

export const useRegisterWithCode = () => {
    return useMutation({
        mutationFn: verifyCode,
        onSuccess: () => {
            Swal.fire({
                title: "ثبت نام با موفقیت انجام شد",
                icon: "success",
                confirmButtonText: "تأیید",
            });
        },
        onError: (error: any) => {
            Swal.fire({
                title: "خطا در ثبت نام",
                text: error.response?.data?.message || "مشکلی پیش آمده است.",
                icon: "error",
                confirmButtonText: "متوجه شدم",
            });
        },
    });
};
