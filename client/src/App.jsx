import Background from "./components/background"
import AuthContextProvider from "./contexts/auth-context-provider"
import DistributorContextProvider from "./contexts/distributor-context-provider"
import Views from "./views/views"

function App() {
    return (
        <>
            <Background />

            <AuthContextProvider>
                <DistributorContextProvider>
                    <Views />
                </DistributorContextProvider>
            </AuthContextProvider>
        </>
    )
}

export default App
