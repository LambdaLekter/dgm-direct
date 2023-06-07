
export default function MessageBar({submitHandler}) {
    return <div id="message-bar">
        <form action="" onSubmit={submitHandler}>
            <input type="text" />
            <button>Send</button>
        </form>
    </div>
}