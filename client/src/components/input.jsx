import React, { useState } from "react"
import { FaEnvelope, FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa"

export default function Input({
    children,
    inputFor,
    inputName,
    inputStyle,
    inputType,
    onChange,
    placeholder,
    value,
}) {
    const [showPassword, setShowPassword] = useState(
        () => inputType !== "password"
    )

    const handlePasswordVisibility = (event) => {
        event.preventDefault()

        setShowPassword(!showPassword)
    }

    return (
        <div className="flex flex-col relative">
            <label className={inputStyle === "inline" ? "label-layout peer-focus:text-gray-950" : "text-gray-950 text-sm"} htmlFor={inputFor}>
                {children}
            </label>

            <div className="flex flex-wrap gap-3 items-center md:flex-nowrap">
                {inputFor === "email" && (
                    <FaEnvelope className={inputStyle === "inline" ? "hidden" : "hidden md:flex text-gray-500"} />
                )}
                {inputFor === "password" && (
                    <FaLock className={inputStyle === "inline" ? "hidden" : "hidden md:flex text-gray-500"} />
                )}

                <div className={inputStyle === "inline" ? "" : "border flex group items-center overflow-hidden rounded-lg w-full"}>
                    <input
                        autoComplete={inputFor}
                        className={inputStyle === "inline" ? "input-layout md:w-auto peer w-full" : "outline-none pl-3 py-2"}
                        id={inputFor}
                        name={inputFor || inputName}
                        onChange={onChange}
                        placeholder={placeholder}
                        required
                        type={showPassword ? "text" : "password"}
                        value={value}
                    />

                    {inputType === "password" && (
                        <button className={inputStyle === "inline" ? "hidden" : "px-3"} onClick={handlePasswordVisibility}>
                            {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
