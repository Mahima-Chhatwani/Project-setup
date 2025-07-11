import React from "react";
import { LayoutDashboard, CalendarCheck, Heart,Star, MessageSquare, Wallet, CreditCard, Settings, } from "lucide-react"
import { Link } from "react-router-dom";
import { useState } from "react";
import { Send, Video, Phone } from "lucide-react";


// Section 1
const messagesItems = [
    {name: <Link to="/userdashboard">Dashboard</Link>, icon: <LayoutDashboard size={20} />, },
    {name: <Link to="/mybookings">My Bookings</Link>, icon: <CalendarCheck size={20} />},
    {name: <Link to="/reviews">Reviews</Link>, icon: <Star size={20} />,},
    {name: <Link to="/wishlist">Wishlist</Link>, icon: <Heart size={20} />, },
    {name: <Link to="/messages">Messages</Link>, icon: <MessageSquare size={20} />, active:true},
    {name: <Link to="/mywallet">My Wallet</Link>, icon: <Wallet size={20} />},
    {name: <Link to="/payments">Payments</Link>, icon: <CreditCard size={20} />},
    {name: <Link to="/setting">Setting</Link>, icon: <Settings size={20} />},
];

// Section 2
const users = [
     {
    id: 1,
    name: "Mark Williams",
    lastMessage: "Have you called them?",
    time: "2 min",
    online: true,
    avatar: "/images/users/mark.jpg",
    messages: [
      { from: "user", text: "Hello. What can I do for you?", time: "8:30 AM" },
      { from: "contact", text: "I'm just looking around. Will you tell me something about yourself?", time: "8:35 AM" },
      { from: "contact", text: "Are you there? That time!", time: "8:40 AM" },
      { from: "contact", images: ["/images/cars/ferrari.jpg", "/images/team.jpg"], time: "8:41 AM" },
      { from: "user", text: "Where?", time: "8:42 AM" },
      { from: "contact", text: "OK, my name is Limingqiang. I like singing, playing basketball and so on.", time: "8:42 AM" },
    ]
  },
  {
    id: 2,
    name: "Elizabeth Sosa",
    lastMessage: "I'll call you later",
    time: "8:01 PM",
    online: true,
    avatar: "/images/users/elizabeth.jpg"
  },
  {
    id: 3,
    name: "Michael Howard",
    lastMessage: "Thank you",
    time: "7:30 PM",
    online: false,
    avatar: "/images/users/michael.jpg"
  },

]


const Messages =()=>{

    // Section 2
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      selectedUser.messages.push({ from: "user", text: newMessage, time: "Now" });
      setNewMessage("");
    }
  };

    return(
        <>
        <section>
            <div className="bg-white shadow-sm p-4 rounded--md flex flex-wrap gap-6 justify-start md:justify-between items-center">
               {messagesItems.map((item, idx)=>(
                <button key={idx} className={`flex flex-col items-center text-sm font-medium transition ${
                item.active
                ? "text-white bg-orange-500 px-4 py-2 rounded"
                : "text-gray-600 hover:text-orange-500"
                }`}>
            <div className="mb-1">{item.icon}</div>
            {item.name}
                </button>
               ))}
            </div>
         </section>

         <section>
             <div className="flex h-screen">
      {/* Left: Chat List */}
      <aside className="w-full md:w-1/3 border-r p-4 bg-gray-50">
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        <input
          type="text"
          placeholder="Search"
          className="w-full px-3 py-2 mb-4 rounded-md border border-gray-300"
        />
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className={`flex items-center justify-between gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded-md ${
                selectedUser.id === user.id ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <div className="flex items-center gap-3">
                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-medium">{user.name}</h4>
                  <p className="text-sm text-gray-500">{user.lastMessage}</p>
                </div>
              </div>
              <div className="text-xs text-gray-400">{user.time}</div>
            </li>
          ))}
        </ul>
      </aside>
 {/* Right: Chat Window */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b px-6 py-4 flex justify-between items-center bg-white">
          <div className="flex items-center gap-3">
            <img src={selectedUser.avatar} alt={selectedUser.name} className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="font-semibold">{selectedUser.name}</h3>
              <span className="text-xs text-green-500">online</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <Phone className="cursor-pointer" />
            <Video className="cursor-pointer" />
          </div>
        </div>

 {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
          {selectedUser?.messages?.map((msg, index) => (
            <div key={index} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-xs px-4 py-2 rounded-lg ${msg.from === "user" ? "bg-blue-500 text-white" : "bg-white border"}`}>
                {msg.text && <p>{msg.text}</p>}
                {msg.images && (
                  <div className="flex gap-2 mt-1">
                    {msg.images.map((img, i) => (
                      <img key={i} src={img} alt="media" className="w-20 h-20 object-cover rounded" />
                    ))}
                  </div>
                )}
                <div className="text-right text-xs text-gray-400 mt-1">{msg.time}</div>
              </div>
            </div>
          ))}
        </div>
 {/* Input Box */}
        <div className="border-t p-4 bg-white flex items-center">
          <input
            type="text"
            className="flex-1 px-4 py-2 border rounded-md mr-2"
            placeholder="Type something..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            onClick={handleSend}
            className="bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600"
          >
            <Send size={20} />
          </button>
        </div>
      </main>
    </div>

         </section>
        </>
    )
}

export default Messages