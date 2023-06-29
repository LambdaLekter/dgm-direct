export default function ChatsListItem({chatUser: user}) {
    return (
        <div className="chat-item">
            {user.username}
        </div>
    )
}