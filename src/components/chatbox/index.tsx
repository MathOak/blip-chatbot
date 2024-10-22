import { MessageResponse } from "@/src/services/apis/blib";
import BotMessage from "./messages/bot";
import UserMessage from "./messages/user";
import Image from "next/image";
import backImage from "@src/images/left-arrow.png";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  messageList: MessageResponse[];
}

export default function ChatBox({ messageList }: Props) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      {" "}
      <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
        <p className="text-lg font-semibold">Admin Bot</p>
        <div
          className="cursor-pointer text-right rounded p-4"
          style={{
            borderRadius: "4px",
            backgroundColor: isHovered ? "rgb(203, 213, 225)" : "transparent",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            router.push(`/`);
          }}
        >
          <Image
            src={backImage}
            alt="back button"
            width={20} /* style={{marginRight: '1rem'}} */
          />
        </div>
      </div>
      <div
        id="chatbox"
        className="p-4 h-80 overflow-y-auto"
        style={{ maxHeight: "28rem", overflow: "auto" }}
      >
        {messageList &&
          messageList.map((message: MessageResponse) => {
            if (typeof message.content !== "string") return;
            if (message.direction === "received") {
              return <BotMessage key={message.id} content={message.content} />;
            }
            if (message.direction === "sent") {
              return <UserMessage key={message.id} content={message.content} />;
            }
            return;
          })}
      </div>
    </>
  );
}
