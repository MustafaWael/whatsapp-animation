const ChatItem = () => {
  return (
    <div className="p-4 bg-blue-900">
      <div className="flex gap-x-4 items-center">
        {/* avatar */}
        <div className="w-14 h-14 shrink-0 rounded-full bg-blue-300"></div>

        <div className="w-full">
          {/* detais */}
          <div className="flex flex-col gap-y-2 ">
            <div className="flex justify-between">
              {/* name */}
              <div className="w-12 h-2 bg-blue-300 rounded-md"></div>
              {/* date */}
              <div className="w-14 h-2 bg-blue-300 rounded-md"></div>
            </div>
            {/* message */}
            <div className="w-40 h-2 bg-blue-300 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
