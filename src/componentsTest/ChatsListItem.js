export default function ChatsListItem({chatUser: user}) {
    return (
        <div className="chat-item">
            <p>{user.username}</p>
        </div>
    )
}