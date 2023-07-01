import React, {useState, useEffect, useRef} from "react";
import {Dropdown} from "react-bootstrap";

export default function CustomContextMenu({position, onCopy, onDelete, onClose, state, setState}) {
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setState(false)
                onClose()
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <>
            <div style={{position: "fixed", top: position.y, left: position.x, zIndex: 1}} ref={menuRef}>
                {state && (
                    <Dropdown.Menu show ref={menuRef}>
                        <Dropdown.Item onClick={onCopy}>Copia messaggio</Dropdown.Item>
                        <Dropdown.Item onClick={onDelete}>Elimina messaggio</Dropdown.Item>
                    </Dropdown.Menu>
                )}
            </div>
        </>
    )
}
