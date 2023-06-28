export default function ButtonBar({setSelectedTab}) {
    const getHandler = (tab) => {
        return () => { setSelectedTab(tab) }
    }

    return <div id="button-bar">
        <button onClick={getHandler("C")}>Chat</button>
        <button onClick={getHandler("F")}>Amici</button>
        <button onClick={getHandler("N")}>Notifiche</button>
    </div>
}