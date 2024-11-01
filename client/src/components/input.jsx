import React, { useState } from "react"
import { FaEnvelope, FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa"

export default function Input({
  children,
  inputFor,
  inputType,
  onChange,
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
    <div className="flex flex-col">
      <label className="text-gray-950 text-sm" htmlFor={inputFor}>
        {children}
      </label>

      <div className="flex flex-wrap gap-3 items-center md:flex-nowrap">
        {inputFor === "email" && (
          <FaEnvelope className="hidden md:flex text-gray-500" />
        )}
        {inputFor === "password" && (
          <FaLock className="hidden md:flex text-gray-500" />
        )}

        <div className="border flex group items-center overflow-hidden rounded-lg w-full">
          <input
            autoComplete={inputFor}
            className="outline-none pl-3 py-2"
            id={inputFor}
            onChange={(event) => {
              onChange(event.target.value)
            }}
            required
            type={showPassword ? "text" : "password"}
            value={value}
          />

          {inputType === "password" && (
            <button className="px-3" onClick={handlePasswordVisibility}>
              {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
