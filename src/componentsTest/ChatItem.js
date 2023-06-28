
export default function ChatItem({chatUser: user}) {
    return <div className="chat-item">
        <p>{user.username}</p>
    </div>
}
