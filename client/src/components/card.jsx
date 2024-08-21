export default function Card({ children }) {
  return (
    <li className="bg-white border p-5 rounded-lg shadow-md min-w-[20rem]">
      {children}
    </li>
  )
}
