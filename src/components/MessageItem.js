import {showTime} from "../utils";

export default function MessageItem({message, side}) {
    return (
        <div className={"message-item-" + side}>
            <div className={"msg-author-" + side}>{message.author}</div>
            <div className="message-content">{message.text}</div>
            <div className={"message-timestamp-" + side}>{showTime(message.time)}</div>
        </div>
    )
}