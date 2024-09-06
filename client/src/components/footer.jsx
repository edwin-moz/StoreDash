import { useState } from "react"
import { SocialIcon } from "react-social-icons"
import { useAuthContext } from "../lib/hooks"

const socials = [
  "https://twitter.com",
  "https://facebook.com",
  "https://instagram.com",
  "https://discord.com",
  "https://github.com",
  "https://slack.com",
  "https://snapchat.com",
  "https://youtube.com",
]

export const Footer = () => {
  const { user } = useAuthContext()

  const [email, setEmail] = useState({})
  // handle function for email
  const handleEmailForm = (event) => {
    const copy = { ...email }
    const { name, value } = event.target
    if (name === "email") {
      copy[name] = value
    } else if (name === "message") {
      copy[name] = value
    }
    setEmail(copy)
  }
  if (user?.roles.includes("Admin")) {
    return
  }

  return (
    <footer className="flex flex-col">
      <div className="bg-emerald-900 flex flex-wrap gap-10 justify-around p-10">
        <div className="self-center">
          <p className="font-bold text-4xl text-white italic tracking-widest">
            StoreDash
          </p>
          <p className="text-white">505 Deaderick Street</p>
          <p className="text-white">Nashville, TN 37243</p>
        </div>
        <div className="self-center">
          <p className="text-sm text-white">
            &copy; 2024 StoreDash. All Rights Reserved.
          </p>
        </div>
        <form
          action="https://formsubmit.co/conquerxhacks@gmail.com"
          target="_blank"
          className="flex flex-col gap-5 flex-grow max-w-[30rem]"
          method="POST"
        >
          <div className="flex flex-wrap">
            <p className="text-white text-lg">
              Want to sell your products?{" "}
              <span className="text-blue-400 text-lg"> Contact us here</span>
            </p>
          </div>
          <input
            autoComplete="email"
            className="bg-white border-2 border-white focus:bg-stone-100 focus:border-2 focus:border-blue-500 h-10 outline-none px-3 rounded-md"
            id="email"
            name="email"
            onChange={handleEmailForm}
            placeholder="Your email"
            type="email"
            value={email.email || ""}
          />
          <textarea
            className="bg-white border-2 border-white focus:bg-stone-100 focus:border-2 focus:border-blue-500 h-32 outline-none p-3 rounded-md"
            id="message"
            name="message"
            onChange={handleEmailForm}
            placeholder="Your message"
            value={email.message || ""}
          />
          <button
            className="active:scale-95 active:translate-y-1 bg-emerald-700 font-semibold h-[3rem] md:w-[8rem] px-5 rounded-full shadow-md shadow-black/50 self-end text-white tracking-wider transition w-full"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
      <div className="flex flex-wrap items-center gap-5 h-[20vh] px-10">
        {socials.map((social) => (
          <SocialIcon key={social} url={social} />
        ))}
      </div>
    </footer>
  )
}
