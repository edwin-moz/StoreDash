export default function AuthLayout({ children }) {
  return (
    <div className="flex flex-col h-[100vh] md:items-center justify-center">
      {children}
    </div>
  )
}
