export default function MessageItem({message, side}) {

    const showTime = () => {
        let d = new Date(message.time)
        let h = d.getHours();
        let m = d.getMinutes();
        if (m <= 9) {
            m = "0" + m;
        }
        if (h <= 9) {
            h = "0" + h;
        }
        d = h + ":" + m;
        return d
    }

    return (
        <div className={"message-item-" + side}>
            <div className="msg-author">{message.author}</div>
            <div className="message-content">{message.text}</div>
            <div className="message-timestamp-right">{showTime()}</div>
        </div>
    )
}