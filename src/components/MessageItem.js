import React, {useState} from "react";
import {showTime} from "../utils";
import CustomContextMenu from "./CustomContextMenu";

export default function MessageItem({message, side}) {
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
        console.log("Messaggio eliminato:", message._id);
        // TODO: Gestire la cancellazione del messaggio, prendendo l'_id del messaggio
        setShowContextMenu(false);
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
