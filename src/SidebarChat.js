import React from "react";
import "./SidebarChat.css";
import { IconButton, Avatar } from "@mui/material";

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <IconButton>
                <Avatar />
            </IconButton>
            <div className="sidebarChat__info">
                <h2>Rooom Name</h2>
                <p>hey, i am new on whatsapp</p>
            </div>
        </div>
    );
}

export default SidebarChat;
