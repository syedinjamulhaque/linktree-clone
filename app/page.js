"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const [text, setText] = useState("")

  const createTree = () => {
    if (text.trim() === "") return
    router.push(`/generate?handle=${text}`)
  }

  return (
    <main>
      <section className="min-h-screen overflow-hidden bg-[#d2e823] px-5 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:flex lg:items-center lg:px-10 lg:py-24 xl:px-16">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div className="order-2 flex flex-col items-center gap-5 text-center lg:order-1 lg:items-start lg:text-left">
            <h1 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl md:text-6xl xl:text-7xl">
              A link in bio
              <br />
              built for you.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-gray-700 sm:text-lg lg:text-xl">
              Join 70M+ people using Linktree for their link in bio. One link to
              help you share everything you create, curate and sell from your
              Instagram, TikTok, Twitter, YouTube and other social media profiles.
            </p>

            <form
              className="mt-1 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center"
              action="#"
              onSubmit={(e) => { e.preventDefault(); createTree() }}
            >
              <label htmlFor="linktree-handle" className="sr-only">
                Choose your Linktree handle
              </label>
              <input
                id="linktree-handle"
                value={text}
                onChange={(e) => { setText(e.target.value) }}
                className="min-w-0 flex-1 rounded-xl border border-transparent bg-white px-4 py-4 text-base text-gray-900 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20"
                type="text"
                placeholder="linktr.ee/yourname"
              />
              <button
                type="submit"
                disabled={text.trim() === ""}
                className="shrink-0 rounded-full bg-green-600 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2 focus:ring-offset-[#d2e823] disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:bg-gray-400 sm:px-7"
              >
                Get started for free
              </button>
            </form>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <img
              src="/home.png"
              alt="Linktree profile page preview"
              className="h-auto w-full max-w-60 sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
            />
          </div>
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center bg-red-700">
        <div className="text-center text-4xl font-bold text-white sm:text-6xl">
          Future Updates...
        </div>
      </section>
    </main>
  )
}