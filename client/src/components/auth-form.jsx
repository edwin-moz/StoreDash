import { motion } from "framer-motion"
import RequiredField from "./required-field"

export default function AuthForm({ children, formHeader }) {
    return (
        <motion.form
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 4 }}
            className="flex flex-col gap-3 md:bg-white md:border md:rounded-lg p-8 md:shadow-md"
        >
            <p className="font-bold text-2xl">{formHeader}</p>

            <RequiredField />

            {children}
        </motion.form>
    )
}
