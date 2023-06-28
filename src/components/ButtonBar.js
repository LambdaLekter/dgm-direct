import {useNavigate} from "react-router-dom";

export default function ButtonBar({setSelectedTab, setLoggedUser}) {
    const navigate = useNavigate()

    const getHandler = (tab) => {
        return () => { setSelectedTab(tab) }
    }

    const logout = () => {
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