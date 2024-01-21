import { useEffect, useState } from "react"
import { Views } from "./views/views"
import { tryGetLoggedInUser } from "./managers/authentication"

function App() {
  // state
  const [loggedInUser, setLoggedInUser] = useState();
  // handlers
  const handletryGetLoggedInUser = () => {
    tryGetLoggedInUser().then((data) => {
      setLoggedInUser(data)
    })
  }
  // use effect
  useEffect(() => { handletryGetLoggedInUser() }, [])
  // if logged in user is undefined
  if (loggedInUser === undefined) {
    return
  }
  // component return
  return (
    <div className="App">
      <Views loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
    </div>
  )
}

export default App;
