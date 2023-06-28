import {useNavigate} from "react-router-dom"
import Cookies from "universal-cookie"

export default function ButtonBar({setSelectedTab, setLoggedUser}) {
    const navigate = useNavigate()
    const cookies = new Cookies()

    const getHandler = (tab) => {
        return () => { setSelectedTab(tab) }
    }

    const logout = () => {
        cookies.remove("username")
        setLoggedUser("")
        navigate("/login")
    }

    return <div id="button-bar">
        <button onClick={getHandler("C")}>Chat</button>
        <button onClick={getHandler("F")}>Amici</button>
        <button onClick={getHandler("N")}>Notifiche</button>
        <button onClick={logout}>Logout</button>
    </div>
}