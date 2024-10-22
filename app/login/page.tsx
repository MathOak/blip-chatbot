"use client";
import LoginInputComponent from "@/src/components/inputs/login/";
import { apiBlib } from "@/src/services/apis/blib";
import { cookieUtils } from "@/src/utils/cookies";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
export default function Login() {
  const router = useRouter();
  const handleConnectBot = async (
    event: FormEvent<HTMLFormElement> | undefined
  ) => {
    try {
      if (!event) return;
      event.preventDefault();
      const formData = new FormData(event.currentTarget);

      const key = formData.get("key") as string;
      cookieUtils.setCookie(process.env.cookieKey!, key, {
        expires: new Date(Date.now() + 3600000),
      });

      const valid = await apiBlib.checkKey(key);
      await apiBlib.getContacts();

      if (!valid) throw new Error("Key inválida");

      if (valid) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      return;
    }
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-xl">
        <h2 className="text-lg font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleConnectBot}>
          <div className="bg-white shadow-md w-full rounded-m p-8 space-y-4 ">
            <LoginInputComponent
              id="key"
              key="key"
              name="key"
              label="Bot Key"
              type="text"
              required
            />
            <div className="text-slate-50 hover:text-slate-100">
              <button
                className="w-full text-sm bg-emerald-500 font-bold hover:bg-emerald-600 rounded-sm min-h-8"
                type="submit"
              >
                Entrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
