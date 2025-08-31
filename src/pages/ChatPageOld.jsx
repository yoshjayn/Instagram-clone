import { useState } from "react";

const ChatPage=()=>{
 
    const [chat, setChat] = useState([{"id":123, "text":"Hello, How are you?", "sender":"Anku Goa"},
                                      {"id":124, "text":"I am good Anku, How are you?", "sender":"Yashu di"}])

    const [newMessage, setNewMessage] = useState("")
    return(
        <div className="flex">
            {/* <p>hello this is a chat page</p> */}
            <div className="border 1px w-120 h-screen">
chat list

            </div>
            <div className="flex flex-col flex-1">
{/* Type here... */}
<div className="flex-grow border-2">
    {/* old chat here */}
    {chat.map(value=>{
    return(
        <div key={value.id}>{value.sender} : {value.text}</div>
    )
})}
    </div>
<div className="flex">
<input  placeholder='enter new message...' />
<button className="border-2" onClick={()=>setChat(...chat,newMessage)}>Send</button>
</div>
            </div>
        </div>
    )
}

export default ChatPage;