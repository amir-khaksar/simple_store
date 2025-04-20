import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { RegisterFormInputs, LoginFormInputs } from "../authType";
import { useRegister, useLogin } from "../auth";

export default function AuthPage() {
   const [isLogin, setIsLogin] = useState(false);

   const navigate = useNavigate();

   const { mutate: loginMutate } = useLogin();
   const { mutate: registerMutate } = useRegister();

   const {
      register: Register,
      handleSubmit: handleSubmitRegister,
      formState: { errors: errorsRegister },
      reset: resetRegister,
   } = useForm<RegisterFormInputs>();

   const {
      register: Login,
      handleSubmit: handleSubmitLogin,
      formState: { errors: errorsLogin },
      reset: resetLogin,
   } = useForm<LoginFormInputs>();

   const onSubmitRegister = (data: RegisterFormInputs) => {
      console.log("Register Data:", data);
      registerMutate(
         {
            fullName: data.fullName,
            phone: data.phone,
            email: data.email,
            password: data.password,
         },
         {
            onSuccess: () => navigate("/"),
            onError: (error) => console.log(error) 
         }
      );
      resetRegister();
   };

   const onSubmitLogin = (data: LoginFormInputs) => {
      console.log("Login Data:", data);
      loginMutate(
         { phone: data.phone, password: data.password },
         {
            onSuccess: () => navigate("/"),
         }
      );
      resetLogin();
   };

   return (
      <div className="flex h-screen items-center justify-center bg-muted">
         <div className="relative w-[780px] h-[490px] bg-card text-card-foreground rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex w-full h-full relative">
               {/* Animated Section */}
               <motion.div
                  className="absolute w-1/2 h-full bg-gradient-to-r from-zinc-900 to-gray-800 flex flex-col items-center justify-center text-white"
                  animate={{ left: isLogin ? "50%" : "0%" }}
                  transition={{ ease: "easeInOut", duration: 0.7 }}
               >
                  <h2 className="text-2xl font-bold mb-4">
                     {!isLogin ? "Welcome Back!" : "Create Account"}
                  </h2>
                  <p className="text-sm mb-4">
                     {!isLogin
                        ? "Don't have an account?"
                        : "Already registered?"}
                  </p>
                  <Button
                     onClick={() => setIsLogin(!isLogin)}
                     variant="outline"
                     className="text-black bg-white hover:bg-gray-100"
                  >
                     {!isLogin ? "Sign Up" : "Sign In"}
                  </Button>
               </motion.div>

               {/* Forms Container */}
               <div className="w-full h-full flex">
                  {/* Register Form */}
                  <motion.div className="w-1/2 h-full flex items-center justify-center p-8">
                     <form
                        onSubmit={handleSubmitRegister(onSubmitRegister)}
                        className="w-full flex flex-col items-center"
                     >
                        <h2 className="text-2xl font-bold mb-8">
                           Create Account
                        </h2>

                        <div className="w-5/6 mb-4">
                           <Input
                              type="text"
                              className="py-6"
                              placeholder="Full Name"
                              {...Register("fullName", {
                                 required: "Full name is required",
                              })}
                           />
                           {errorsRegister.fullName && (
                              <p className="text-red-500 text-sm mt-1">
                                 {errorsRegister.fullName.message}
                              </p>
                           )}
                        </div>

                        <div className="w-5/6 mb-4">
                           <Input
                              type="tel"
                              className="py-6"
                              placeholder="Phone Number"
                              {...Register("phone", {
                                 required: "Phone number is required",
                                 pattern: {
                                    value: /^[0-9]{11}$/,
                                    message: "Invalid phone number",
                                 },
                              })}
                           />
                           {errorsRegister.phone && (
                              <p className="text-red-500 text-sm mt-1">
                                 {errorsRegister.phone.message}
                              </p>
                           )}
                        </div>

                        <div className="w-5/6 mb-4">
                           <Input
                              type="email"
                              className="py-6"
                              placeholder="Email"
                              {...Register("email", {
                                 required: "Email is required",
                                 pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                 },
                              })}
                           />
                           {errorsRegister.email && (
                              <p className="text-red-500 text-sm mt-1">
                                 {errorsRegister.email.message}
                              </p>
                           )}
                        </div>

                        <div className="w-5/6 mb-6">
                           <Input
                              type="password"
                              className="py-6"
                              placeholder="Password"
                              {...Register("password", {
                                 required: "Password is required",
                                 minLength: {
                                    value: 6,
                                    message:
                                       "Password must be at least 6 characters",
                                 },
                              })}
                           />
                           {errorsRegister.password && (
                              <p className="text-red-500 text-sm mt-1">
                                 {errorsRegister.password.message}
                              </p>
                           )}
                        </div>

                        <Button type="submit" className="w-5/6 py-6">
                           Sign Up
                        </Button>
                     </form>
                  </motion.div>

                  {/* Login Form */}
                  <motion.div className="w-1/2 h-full flex items-center justify-center p-8">
                     <form
                        onSubmit={handleSubmitLogin(onSubmitLogin)}
                        className="w-full flex flex-col items-center"
                     >
                        <h2 className="text-2xl font-bold mb-8">Sign In</h2>

                        <div className="w-5/6 mb-4">
                           <Input
                              type="tel"
                              className="py-6"
                              placeholder="Phone Number"
                              {...Login("phone", {
                                 required: "Phone number is required",
                                 pattern: {
                                    value: /^[0-9]{11}$/,
                                    message: "Invalid phone number",
                                 },
                              })}
                           />
                           {errorsLogin.phone && (
                              <p className="text-red-500 text-sm mt-1">
                                 {errorsLogin.phone.message}
                              </p>
                           )}
                        </div>

                        <div className="w-5/6 mb-6">
                           <Input
                              type="password"
                              className="py-6"
                              placeholder="Password"
                              {...Login("password", {
                                 required: "Password is required",
                                 minLength: {
                                    value: 6,
                                    message:
                                       "Password must be at least 6 characters",
                                 },
                              })}
                           />
                           {errorsLogin.password && (
                              <p className="text-red-500 text-sm mt-1">
                                 {errorsLogin.password.message}
                              </p>
                           )}
                        </div>

                        <Button type="submit" className="w-5/6 py-6">
                           Login
                        </Button>
                     </form>
                  </motion.div>
               </div>
            </div>
         </div>
      </div>
   );
}
