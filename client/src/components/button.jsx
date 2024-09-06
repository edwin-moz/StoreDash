export default function Button({ children, onClick }) {
  return (
    <div className="my-3 md:self-end">
      <button
        className="button-primary w-full"
        onClick={(event) => {
          console.log("here")
          event.preventDefault()
          onClick()
        }}
      >
        {children}
      </button>
    </div>
  )
}
