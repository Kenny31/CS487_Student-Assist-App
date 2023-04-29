import React from 'react'
import Logo from "../images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { Route, Routes, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div>
        <div style={{ margin: "100px" }}>
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="px-6 py-4">
                <div className="flex justify-center mx-auto">
                    <img className="object-scale-down h-20 w-20" src={Logo} alt="" />
                </div>

                <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
                    Student Assist App
                </h3>

                <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
                    Please enter your email address
                </p>

                <form>
                    <div className="w-full mt-4">
                    <input
                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        type="email"
                        placeholder="Email Address"
                        aria-label="Email Address"
                    />
                    </div>

                    <div className="flex items-center justify-between mt-4">

                    <NavLink
                        to="/"
                        className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                        Send Reset Password Email
                    </NavLink>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword