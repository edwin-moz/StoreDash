import { useEffect, useState } from "react"
import { Views } from "./views/views"
import { tryGetLoggedInUser } from "./managers/authentication"
function App() {
  // state
  const [loggedInUser, setLoggedInUser] = useState();
  // handlers
  const handletryGetLoggedInUser = () => {
    tryGetLoggedInUser().then(setLoggedInUser)
  }
  // use effect
  useEffect(() => {
    handletryGetLoggedInUser()
  }, [])
  // if logged in user is undefined
  if (loggedInUser === undefined) {
    return
  }
  // component return
  return (
    <div>
      <div className="bg-stone-100 fixed top-0 bottom-0 left-0 right-0 -z-[999]"></div>
      <Views loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} handletryGetLoggedInUser={handletryGetLoggedInUser} />
    </div>
  )
}

export default App;