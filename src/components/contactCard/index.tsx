"use client";
import Image from "next/image";
import DefaultImageUser from "@src/images/user_6813762.png";
import { ContactResponse } from "@/src/services/apis/blib";
import { useRouter } from "next/navigation";
import { useState } from "react";

type CardProps = Partial<ContactResponse>;

export default function ContactCard({
  identity,
  name,
  lastMessageDate,
  photoUri = "",
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  return (
    <li
      className="py-3 sm:py-4 cursor-pointer hover:bg-slate-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        router.push(`/contato/${identity}`);
      }}
      style={{
        backgroundColor: isHovered ? "rgb(203, 213, 225)" : "transparent",
        transition: "  transform 0.3s ease-in-out",
        cursor: "pointer",
      }}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0 mx-4">
          <div className="min-h-16 min-w-16 rounded-full bg-red-700">
            <Image
              src={photoUri || DefaultImageUser}
              alt={name + " image"}
              width={75}
              height={75}
              className="rounded-full" // just an example
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="mx-4" style={{ margin: "1rem" }}>
          <p
            className="text-base font-bold max-w-40 text-gray-900 truncate dark:text-white"
            style={{
              maxWidth: "240px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </p>
          <p
            className="text-sm text-gray-500 truncate dark:text-gray-400"
            style={{
              maxWidth: "240px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {lastMessageDate ? new Date(lastMessageDate).toLocaleString() : ""}
          </p>
        </div>
      </div>
    </li>
  );
}
