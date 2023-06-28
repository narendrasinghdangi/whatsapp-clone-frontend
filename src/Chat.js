import React from "react";
import "./Chat.css";
import axios from "./axios";
import { Avatar, IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import { useState } from "react";

function Chat({ messages }) {
    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post("/messages/new", {
            message: input,
            name: "rohit",
            timestamp: "10.10pm",
            received: "true"
        });

        setInput("");
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <IconButton>
                    <Avatar />
                </IconButton>
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at....</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>

                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${message.received && "chat__reciever"}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timeStamp">{message.timestamp} </span>
                    </p>
                ))}

            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>

            </div>
        </div>
    );
}

export default Chat;
