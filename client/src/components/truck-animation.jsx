import { GiTruck } from "react-icons/gi"
import { motion } from "framer-motion"
import React from "react"

export default function TruckAnimation() {
  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: -999 }}
      transition={{ duration: 4 }}
    >
      <p className="hidden md:block text-emerald-600">
        <GiTruck size={36} />
      </p>
    </motion.div>
  )
}
