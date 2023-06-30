import {showTime} from "../utils";

export default function MessageItem({message, side}) {
    return (
        <div className={"message-item-" + side}>
            <div className="msg-author">{message.author}</div>
            <div className="message-content">{message.text}</div>
            <div className="message-timestamp-right">{showTime(message.time)}</div>
        </div>
    )
}