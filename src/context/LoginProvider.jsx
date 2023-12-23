import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

export const LoginContext = createContext()




const LoginProvider = ({children}) => {

const [user,setUser] = useState("")
const navigate = useNavigate()

const login = (info)=>{

  setUser(info)
  navigate("/dashboard")

}


  return (

    <LoginContext.Provider value={{user,login}} >

{children}
    </LoginContext.Provider>

  )
}

export default LoginProvider