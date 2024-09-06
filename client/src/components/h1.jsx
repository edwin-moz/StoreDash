import { motion } from "framer-motion"

export default function H1({ children }) {
  return (
    <motion.h1
      animate={{ x: 0 }}
      initial={{ x: -210 }}
      className="font-bold text-4xl text-gray-950 tracking-wide"
    >
      {children}
    </motion.h1>
  )
}
