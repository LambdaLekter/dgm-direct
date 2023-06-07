import MessageItem from "./MessageItem";
import MessageBar from "./MessageBar";

export default function Chat({messages, loggedUser}) {
    return <div id="chat">
        <div id="messages">
            { messages.map( (message, idx) => {
                let side = message.author === loggedUser ? "right" : "left"
                return <MessageItem key={"msg"+idx} message={message} side={side} />
            } ) }
        </div>
        <MessageBar submitHandler={e => e.preventDefault()} />
    </div>
}