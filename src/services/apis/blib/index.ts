
import { blipConnection } from "./config"

const checkKey = async (key: string) => {
  try {
    if (!key) return false
    await blipConnection.post(`/commands`, JSON.stringify({
      "id": "1",
      "method": "get",
      "uri": "/contact"
    }), {
      headers: {
        Authorization: `Key ${key}`, "Content-Type": "application/json"

      },
    })
    return true
  } catch (error) {
    console.error(error);
    return false
  }
}
const getContacts = async (): Promise<ContactResponse[] | []> => {
  try {
    const { data } = await blipConnection.post(`/commands`, JSON.stringify({
      "id": "1",
      "method": "get",
      "uri": "/contacts"
    }), {
      headers: {
        "Content-Type": "application/json"
      },
    })

    const list = data?.resource?.items || []

    return list
  } catch (error) {
    console.error(error);
    return []
  }
}
const getContactMessage = async (contactId: string): Promise<MessageResponse[] | []> => {
  try {
    const { data } = await blipConnection.post(`/commands`, JSON.stringify({
      "id": "1",
      "method": "get",
      "to": "postmaster@msging.net",
      "uri": `/threads/${contactId}`
    }), {
      headers: {
        "Content-Type": "application/json"
      },
    })

    const list: [] = data?.resource?.items || []

    return list.reverse()
  } catch (error) {
    console.error(error);
    return []
  }
}


export interface ContactResponse {
  identity: string
  name: string
  address: string
  city: string
  email: string
  phoneNumber: string
  photoUri: string
  cellPhoneNumber: string
  gender: string
  timezone: number
  culture: string
  extras: object
  isPending: boolean
  sharePresence: boolean
  shareAccountInfo: boolean
  group: boolean
  lastMessageDate: Date
  taxDocument: string
  source: string
}

export interface MessageResponse {
  content: string | object
  date: Date | string
  direction: "sent" | "received"
  id: string
  metadata: object
  status: string
  type: string
}


// "name": "Tester 22-10-24 10:30:12",
// "group": "Testers",
// "lastMessageDate": "2024-10-22T13:47:26.140Z",
// "lastUpdateDate": "2024-10-22T13:30:12.113Z",
// "identity": "7b5f257f-6c75-4c88-9dc5-97523a15035a.teste638651275724717495@0mn.io",
// "extras": {
//     "isTestersGroup": "True",
//     "typeOfCompile": "flow"
// },
// "source": "0mn.io"

export const apiBlib = { checkKey, getContacts, getContactMessage }