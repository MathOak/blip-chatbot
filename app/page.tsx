"use client";
import ContactCard from "@/src/components/contactCard";
import { apiBlib, ContactResponse } from "@/src/services/apis/blib";
import { cookieUtils } from "@/src/utils/cookies";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [showingContacts, setShowingContacts] = useState<number>(10);
  const [contacts, setContacts] = useState<ContactResponse[] | []>([]);
  const [showingContactsList, setShowingContactsList] = useState<
    ContactResponse[] | []
  >([]);

  const handleGetContacts = async () => {
    if (
      !(await apiBlib.checkKey(
        cookieUtils.getCookie(process.env.cookieKey!) || ""
      ))
    )
      router.push("/login");
    const list = await apiBlib.getContacts();
    setContacts(list);
    const initialShowingContact = list.length < 10 ? list.length : 10;
    setShowingContacts(initialShowingContact);
  };

  useEffect(() => {
    handleGetContacts();
  }, []);

  useEffect(() => {
    setShowingContactsList(contacts.slice(0, showingContacts));
  }, [showingContacts, contacts]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Contatos
          </h3>
          <div className="text-sm font-medium">
            <input
              type="number"
              className="border w-10 text-right"
              max={contacts.length}
              min={0}
              value={showingContacts}
              onChange={(e) => {
                setShowingContacts(Number(e.target.value));
              }}
            />
            /{contacts.length}
          </div>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {showingContactsList &&
              showingContactsList.map((contact: ContactResponse) => {
                return (
                  <ContactCard
                    key={contact.identity}
                    identity={contact.identity}
                    name={contact.name}
                    email={contact.email}
                    lastMessageDate={contact.lastMessageDate}
                    photoUri={contact.photoUri}
                  />
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
