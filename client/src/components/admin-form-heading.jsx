import React from "react"

export default function AdminFormHeading({ formTitle, onClick }) {
  return (
    <>
      <p className="font-semibold text-xl">{formTitle}</p>

      <button
        className="border border-emerald-600 h-[2rem] hover:bg-emerald-700/20 px-5 rounded-full text-emerald-800 transition"
        onClick={onClick}
      >
        Clear fields
      </button>
    </>
  )
}
