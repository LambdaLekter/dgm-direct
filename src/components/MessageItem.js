import React, {useState} from "react";
import {showTime} from "../utils";
import CustomContextMenu from "./CustomContextMenu";
import '../style/MessageItem.css'
import axios from "axios";

export default function MessageItem({message, side, messages, setMessages}) {
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [contextMenuPosition, setContextMenuPosition] = useState(null);

    const handleContextMenu = (e) => {
        e.preventDefault();
        setShowContextMenu(true);
        setContextMenuPosition({x: e.clientX, y: e.clientY});
    };

    const handleCopy = () => {
        let textFromMessage = message.text
        navigator.clipboard.writeText(textFromMessage)
            .then(() => {
                console.log("Testo copiato nella clipboard: ", textFromMessage);
            })
            .catch((error) => {
                console.error("Error: ", error);
            });
        setShowContextMenu(false);
    };

    const handleDelete = () => {
        console.log(message)

        // TODO: Gestire la cancellazione del messaggio, prendendo l'_id del messaggio
        axios.post("http://localhost:3001/api/messages/deleteMessage", { messageId: message._id })
            .then((res) => {
                console.log("Messaggio eliminato:", message._id);

                const updatedMessages = messages.filter((msg) => msg._id !== message._id);
                setMessages(updatedMessages);
            })
            .catch((error) => {
                console.error("Errore durante l'eliminazione del messaggio:", error);
            });

        handleCloseContextMenu();
    };

    const handleCloseContextMenu = () => {
        setShowContextMenu(false);
    };

    return (
        <>
            <div
                className={"message-item-" + side}
                onContextMenu={handleContextMenu}
            >
                <div className={"msg-author-" + side}>{message.author}</div>
                <div className="message-content">{message.text}</div>
                <div className={"message-timestamp-" + side}>
                    {showTime(message.time)}
                </div>
            </div>
            {contextMenuPosition &&
                (<CustomContextMenu
                    side={side}
                    position={contextMenuPosition}
                    onCopy={handleCopy}
                    onDelete={handleDelete}
                    onClose={handleCloseContextMenu}
                    state={showContextMenu}
                    setState={setShowContextMenu}
                />)
            }
        </>
    );
}
