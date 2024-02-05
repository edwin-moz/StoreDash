import { useState } from "react"
import { sendMessage } from "../managers/chat"
export const ChatBar = ({ loggedInUser }) => {
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    // handle function to set message
    const handleSetMessage = (event) => {
        setMessage(event.target.value)
    }
    // handle function to send message
    const handleSendMessage = () => {
        sendMessage(message).then((data) => {
            const copy = [...messages]
            const messageObject = {
                userMessage: message,
                openAiMessage: data.choices[0].message.content
            }
            copy.push(messageObject)
            setMessages(copy)
            setMessage("")
        })
    }
    return (
        <div className="bg-stone-100 border bottom-0 drop-shadow-md fixed flex-col hidden md:flex right-10 rounded-t-lg w-[20rem]">
            <div className="border-b-2 cursor-pointer p-2" onClick={() => setShowMessage(!showMessage)}>
                <p className="text-lg">Messages</p>
            </div>
            {showMessage && (
                <div className="flex flex-col">
                    <ul className="flex flex-col gap-3 h-[15rem] overflow-y-scroll">
                        {messages.map((message, index) => (
                            <li className="flex flex-col gap-1 p-1 w-full" key={index}>
                                <div className="bg-blue-500 max-w-[15rem] px-3 py-1 rounded-l-md rounded-t-md self-end">
                                    <p className="text-white">{message.userMessage}</p>
                                </div>
                                <div className="flex gap-2 justify-end items-center">
                                    <p>{loggedInUser.firstName[0]}. {loggedInUser.lastName}</p>
                                    <img className="bg-gray-500 h-4 rounded-full scale-x-[-1] w-4" src="https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg" alt="" />
                                </div>
                                <div className="bg-gray-500 max-w-[15rem] px-3 py-1 rounded-r-md rounded-t-md">
                                    <p className="text-white">{message.openAiMessage}</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <img className="bg-gray-500 h-4 rounded-full scale-x-[-1] w-4" src="https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg" alt="" />
                                    <p>G. Chad</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="border-t-2 flex gap-3 px-3 py-2">
                        <textarea className="px-2 rounded-lg w-full" rows={2} onChange={handleSetMessage} value={message} />
                        <div className="self-end">
                            <button className="bg-green-500 px-3 py-3 rounded-full text-white" onClick={handleSendMessage}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-white dark:text-black"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}