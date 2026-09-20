'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const navigation = ['Templates', 'Marketplace', 'Discover', 'Pricing', 'Learn']

const Navbar = () => {
  const pathname = usePathname();
  const showNavbar = ["/", "/generate"].includes(pathname);
  return (
    <>
      {showNavbar && <header className="absolute inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full bg-white/50 backdrop-blur-3xl px-4 py-3 shadow-sm sm:px-5 lg:px-7">
          <div className="flex min-w-0 items-center gap-6 lg:gap-10">
            <Link href="/" aria-label="Linktree home" className="shrink-0">
              <div className="flex items-center gap-1 text-black">
                <span className="text-5xl font-bold leading-none tracking-wide sm:text-4xl">
                  BitTree
                </span>
              </div>
            </Link>

            <ul className="hidden items-center gap-5 text-sm font-medium text-gray-800 xl:flex">
              {navigation.map((item) => (
                <li key={item}>
                  <Link href="/" className="transition-colors hover:text-black">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden items-center gap-3 xl:flex">
            <button className="rounded-full bg-gray-100 px-5 py-3 text-sm font-semibold transition-colors hover:bg-gray-200">
              Log in
            </button>
            <button className="rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black">
              Sign up free
            </button>
          </div>

          <details className="group relative xl:hidden">
            <summary
              aria-label="Open navigation menu"
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-colors hover:bg-gray-200"
            >
              <svg className="h-5 w-5 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-5 w-5 group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
              </svg>
            </summary>

            <div className="absolute right-0 top-14 w-[min(20rem,calc(100vw-2rem))] rounded-3xl bg-white p-3 shadow-xl ring-1 ring-black/5">
              <div className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <Link key={item} href="/" className="rounded-2xl px-4 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-100">
                    {item}
                  </Link>
                ))}
              </div>
              <div className="mt-3 grid gap-2 border-t border-gray-100 pt-3 sm:grid-cols-2">
                <button className="rounded-full bg-gray-100 px-4 py-3 text-sm font-semibold transition-colors hover:bg-gray-200">
                  Log in
                </button>
                <button className="rounded-full bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-black">
                  Sign up free
                </button>
              </div>
            </div>
          </details>
        </nav>
      </header>}
    </>
  )
}

export default Navbar