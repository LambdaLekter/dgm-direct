
export default function MessageItem({message, side}) {
    return <div className={"message-item "+side}>
        <div className="msg-author">{message.author}</div>
        <div>{message.text}</div>
    </div>
}