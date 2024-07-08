import React from "react"
import { FaEnvelope, FaLock } from "react-icons/fa"

export default function Input({ children, inputFor, onChange, value }) {
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
        <input
          autoComplete={inputFor}
          className="border px-3 py-2 rounded-lg w-full"
          id={inputFor}
          onChange={(event) => {
            onChange(event.target.value)
          }}
          type="text"
          value={value}
        />
      </div>
    </div>
  )
}
