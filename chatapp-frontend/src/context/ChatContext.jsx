import { createContext, useContext, useState } from "react";

const ChatContext = createContext();
const defaultRoom = {
  id: "",          // Unique identifier for the room (Mongo DB ID)
  roomId: "",      // The human-readable ID of the room
  messages: []     // List of messages in the room
};
export const ChatProvider = ({ children }) => {
  const [room, setRoom] = useState(defaultRoom);
  const [roomId, setRoomId] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [connected, setConnected] = useState(false);

  return (
    <ChatContext.Provider
      value={{
        room,
        setRoom,
        roomId,
        setRoomId,
        currentUser,
        connected,
        setCurrentUser,
        setConnected,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

const useChatContext = () => useContext(ChatContext);
export default useChatContext;
