import ChatItem from "./ChatItem";
import axios from "axios";

export default function FriendsBar({friends, loggedUser, setFriends}) {
    const onAddFriend = (event) => {
        event.preventDefault()
        let new_friend_input = event.target.firstElementChild
        let body = {
            username: loggedUser,
            newFriend: new_friend_input.value
        }
        axios.post(`http://localhost:3001/api/users/addFriend`, body)
            .then(res => {
                console.log(`Amico aggiunto: ${res.data}`)
                setFriends([friends, res.data])
            })
            .catch(error => {
                console.error(error);
            });
    }

    return <div id="chats-bar">
        <h3> Friends </h3>
        <form onSubmit={onAddFriend}>
            <input type="text" />
            <input type="submit" value="+" />
        </form>
        {friends.map((friend, idx) =>
            <ChatItem key={"friend" + idx} user={friend}/>
        )}
    </div>
}