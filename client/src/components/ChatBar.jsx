function ChatBar(props) {
  console.log(props.id);
  console.log(props.name);
  console.log(props.msg);
  return (
    <div className="bg-slate-300 w-full flex flex-row justify-around items-center py-3 ">
      <div>
        <img className="border border-red-600 h-10 w-11" src="" alt="" />
      </div>
      <div className="border border-red-500" key={props.id}>
        <p className="text-xl">{props.name}</p>
        <p className="text-xs">{props.msg}</p>
      </div>
    </div>
  );
}

export default ChatBar;
