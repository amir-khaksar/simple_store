import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLogin, useRegister } from "./auth";
import { useNavigate } from "react-router-dom";

type LoginFormInputs = {
    phone: string;
    password: string;
};

type RegisterFormInputs = {
    fullName: string;
    phone: string;
    email: string;
    password: string;
};

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const { mutate: loginMutate } = useLogin();
    const { mutate: registerMutate } = useRegister();

    const {
        register: loginRegister,
        handleSubmit: handleLoginSubmit,
        formState: { errors: loginErrors },
    } = useForm<LoginFormInputs>();

    const {
        register: registerRegister,
        handleSubmit: handleRegisterSubmit,
        formState: { errors: registerErrors },
    } = useForm<RegisterFormInputs>();

    const onLogin: SubmitHandler<LoginFormInputs> = (data) => {
        loginMutate(
            { phone: data.phone, password: data.password },
            {
                onSuccess: () => navigate("/"),
            }
        );
    };

    const onRegister: SubmitHandler<RegisterFormInputs> = (data) => {
        registerMutate(
            {
                fullName: data.fullName,
                phone: data.phone,
                email: data.email,
                password: data.password,
            },
            {
                onSuccess: () => navigate("/auth/otp"),
            }
        );
    };

    return (
        <div className="flex h-screen items-center justify-center bg-cover bg-center transition-colors duration-500 dark:bg-gray-900">
            <div className="relative w-[780px] h-[490px] bg-white dark:bg-gray-800 dark:text-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex w-full h-full relative">
                    {/* Animated Background Section */}
                    <motion.div
                        className={`absolute w-1/2 h-full bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center justify-center text-white transition-all duration-700 ${
                            isLogin ? "left-1/2" : "left-0"
                        }`}
                        animate={{ left: isLogin ? "50%" : "0%" }}
                        transition={{ ease: "easeInOut" }}
                    >
                        <h2 className="text-2xl font-bold mb-4">
                            {isLogin ? "خوش آمدید!" : "به ما بپیوندید!"}
                        </h2>
                        <p className="text-sm mb-4">
                            {isLogin
                                ? "حساب کاربری ندارید؟"
                                : "قبلاً حساب کاربری دارید؟"}
                        </p>
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
                        >
                            {isLogin ? "ثبت نام" : "ورود"}
                        </button>
                    </motion.div>

                    {/* Forms Section */}
                    <div className="w-full h-full flex">
                        {/* Login Form */}
                        <motion.div
                            className={`w-1/2 h-full flex items-center justify-center p-8 transition-all duration-700 ${
                                isLogin ? "left-1/2" : "left-0"
                            }`}
                        >
                            <form
                                onSubmit={handleRegisterSubmit(onRegister)}
                                className="w-full flex flex-col items-center"
                            >
                                <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-8">
                                    ایجاد حساب جدید
                                </h2>

                                <div className="w-5/6 mb-4">
                                    <input
                                        {...registerRegister("fullName", {
                                            required: "نام و نام خانوادگی الزامی است",
                                            minLength: {
                                                value: 3,
                                                message: "نام باید حداقل ۳ حرف باشد",
                                            },
                                        })}
                                        type="text"
                                        placeholder="نام و نام خانوادگی"
                                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                                    />
                                    {registerErrors.fullName && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {registerErrors.fullName.message}
                                        </p>
                                    )}
                                </div>

                                <div className="w-5/6 mb-4">
                                    <input
                                        {...registerRegister("phone", {
                                            required: "شماره موبایل الزامی است",
                                            pattern: {
                                                value: /^09[0-9]{9}$/,
                                                message: "شماره موبایل معتبر نیست",
                                            },
                                        })}
                                        type="number"
                                        placeholder="شماره موبایل"
                                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                                    />
                                    {registerErrors.phone && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {registerErrors.phone.message}
                                        </p>
                                    )}
                                </div>

                                <div className="w-5/6 mb-4">
                                    <input
                                        {...registerRegister("email", {
                                            required: "ایمیل الزامی است",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "آدرس ایمیل معتبر نیست",
                                            },
                                        })}
                                        type="email"
                                        placeholder="آدرس ایمیل"
                                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                                    />
                                    {registerErrors.email && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {registerErrors.email.message}
                                        </p>
                                    )}
                                </div>

                                <div className="w-5/6 mb-6">
                                    <input
                                        {...registerRegister("password", {
                                            required: "رمز عبور الزامی است",
                                            minLength: {
                                                value: 8,
                                                message: "رمز عبور باید حداقل ۸ کاراکتر باشد",
                                            },
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                                                message:
                                                    "رمز عبور باید شامل حروف بزرگ، کوچک و اعداد باشد",
                                            },
                                        })}
                                        type="password"
                                        placeholder="رمز عبور"
                                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                                    />
                                    {registerErrors.password && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {registerErrors.password.message}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-5/6 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                                >
                                    ثبت نام
                                </button>
                            </form>
                        </motion.div>

                        {/* Register Form */}
                        <motion.div
                            className={`w-1/2 h-full flex items-center justify-center p-8 transition-all duration-700 ${
                                !isLogin ? "left-1/2" : "left-0"
                            }`}
                        >
                            <form
                                onSubmit={handleLoginSubmit(onLogin)}
                                className="w-full flex flex-col items-center"
                            >
                                <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-8">
                                    ورود به حساب
                                </h2>

                                <div className="w-5/6 mb-4">
                                    <input
                                        {...loginRegister("phone", {
                                            required: "شماره موبایل الزامی است",
                                            pattern: {
                                                value: /^09[0-9]{9}$/,
                                                message: "شماره موبایل معتبر نیست",
                                            },
                                        })}
                                        type="number"
                                        placeholder="شماره موبایل"
                                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                    />
                                    {loginErrors.phone && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {loginErrors.phone.message}
                                        </p>
                                    )}
                                </div>

                                <div className="w-5/6 mb-6">
                                    <input
                                        {...loginRegister("password", {
                                            required: "رمز عبور الزامی است",
                                            minLength: {
                                                value: 6,
                                                message: "رمز عبور باید حداقل ۶ کاراکتر باشد",
                                            },
                                        })}
                                        type="password"
                                        placeholder="رمز عبور"
                                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                    />
                                    {loginErrors.password && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {loginErrors.password.message}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-5/6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    ورود
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;