import Background from "./components/background"
import AuthContextProvider from "./contexts/auth-context-provider"
import Views from "./views/views"

function App() {
  return (
    <>
      <Background />

      <AuthContextProvider>
        <Views />
      </AuthContextProvider>
    </>
  )
}

export default App
