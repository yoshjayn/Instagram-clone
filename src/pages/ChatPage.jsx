import { useState } from "react";

const ChatPage = () => {

    const [chat, setChat] = useState([{ "id": 123, "text": "Hello, How are you?", "sender": "Anku Goa" },
    { "id": 124, "text": "I am good Anku, How are you?", "sender": "Yashu di" },
    { "id": 125, "text": "I am also fine, Have you talked to Vandana ji?", "sender": "Anku Goa" }])

     const recieveDummy = [{ id: 126, text: "Yes, I spoke with her yesterday.", sender: "Anku Goa" },
    { id: 127, text: "She said she might come to Goa next month.", sender: "Anku Goa" },
    { id: 128, text: "By the way, are you free this weekend?", sender: "Anku Goa" }]

    const [newMessage, setNewMessage] = useState("")
    const [replyIndex, setReplyIndex] = useState(0)

    function handleSend() {
        setChat([...chat, { "id": Date.now(), "text": newMessage, "sender": "Yashu di" }]);
        setNewMessage("")   


        setTimeout(() => {
            // setChat([...chat, { "id": Date.now(), "text": recieveDummy[replyIndex].text, "sender": "Anku Goa" }]);
            // You’re spreading chat from the old closure of handleSend, not the latest state → that’s why your just-typed message gets replaced.
            
            setChat(chat=>[...chat, { "id": Date.now(), "text": recieveDummy[replyIndex].text, "sender": "Anku Goa" }]);
            setReplyIndex(replyIndex+1);
        }, 3000)
    }

   
    return (
        <div className="flex">
            <div className="border 1px w-120 h-screen">
                chat list

            </div>
            <div className="flex flex-col flex-1 ">
                <div className="flex-grow h-0 border-2 overflow-y-auto">
                    {chat.map(value => {
                        return (
                            <div className="p-2" key={value.id}>{value.sender} : {value.text}</div>
                        )
                    })}
                </div>
                <div className="flex">

                    <input placeholder='enter new message...' value={newMessage} onChange={e => setNewMessage(e.target.value)} onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSend()
                        }
                    }} />

                    <button className="border-2 ml-45" onClick={() => handleSend()}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;