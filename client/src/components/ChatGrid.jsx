import ChatBar from "./ChatBar";

const Chats = [
  {
    id: 1,
    name: "Shivam Kumar",
    msg: "Hello",
  },
  {
    id: 2,
    name: "Aayush Kashyap",
    msg: "Hi",
  },
  {
    id: 3,
    name: "Vivek Kumar",
    msg: "Hey",
  },
  {
    id: 4,
    name: "Ramamnadna",
    msg: "Hey",
  },
];

function ChatGrid() {
  return (
    <div className="flex flex-col gap-3 border border-red-300 h-screen w-1/4 ">
      {Chats.map((c) => (
        <div>
          {console.log(c)}
          <ChatBar {...c} />
        </div>
      ))}
    </div>
  );
}

export default ChatGrid;
