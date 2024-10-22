"use client";
import ChatBox from "@/src/components/chatbox";
import { MessageResponse, apiBlib } from "@/src/services/apis/blib";
import { cookieUtils } from "@/src/utils/cookies";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Contato() {
  const router = useRouter();
  const { id: contact_id } = useParams();
  const [messageList, setMessageList] = useState<MessageResponse[]>([]);

  const handleGetMessages = async () => {
    if (
      !(await apiBlib.checkKey(
        cookieUtils.getCookie(process.env.cookieKey!) || ""
      ))
    )
      router.push("/login");
    const messageList = await apiBlib.getContactMessage(contact_id as string);
    setMessageList(messageList);
  };
  useEffect(() => {
    handleGetMessages();
  }, [contact_id]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <ChatBox messageList={messageList} />
      </div>
    </div>
  );
}
