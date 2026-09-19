'use client'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Generate = () => {
    // const addLink = () => {
    //     const myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");

    //     const raw = JSON.stringify({
    //         "link": "https://www.facebook.com/codewithharry",
    //         "linktext": "Facebook",
    //         "action": "add",
    //         "handle": "codewithharry"
    //     });

    //     const requestOptions = {
    //         method: "POST",
    //         headers: myHeaders,
    //         body: raw,
    //         redirect: "follow"
    //     };

    //     fetch("http://localhost:3000/api/generate", requestOptions)
    //         .then((response) => response.text())
    //         .then((result) => console.log(result))
    //         .catch((error) => console.error(error));
    // }

    const notify = () => {
        toast.success('Wow so easy!')
    }

    return (
        <>
            <button
                type="button"
                onClick={() => toast.success('Toast is working!')}
                className="relative z-[60] mt-24 h-10 w-24 border bg-yellow-500 text-black"
            >
                Notify!
            </button>
            <ToastContainer position="top-center" autoClose={3000} />

            <main className="min-h-0 flex-1 overflow-y-auto bg-[#e9c0e9] lg:overflow-hidden">
                <div className="mx-auto grid min-h-full w-full max-w-7xl grid-cols-1 lg:h-full lg:grid-cols-2">
                    <section className="min-w-0 p-6 mt-16 sm:p-8 lg:overflow-y-auto lg:px-12 lg:py-10">
                        <div className="mx-auto max-w-xl">
                            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                Create your Bittree
                            </h1>

                            <div className="mt-8 space-y-7">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        Step 1: Claim your handle
                                    </h2>

                                    <input
                                        className="mt-3 w-full rounded-xl border border-transparent bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
                                        type="text"
                                        placeholder="Choose a handle"
                                    />
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        Step 2: Add links
                                    </h2>

                                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                                        <input
                                            className="min-w-0 rounded-xl border border-transparent bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
                                            type="text"
                                            placeholder="Enter link text"
                                        />

                                        <input
                                            className="min-w-0 rounded-xl border border-transparent bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
                                            type="url"
                                            placeholder="Enter link URL"
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        className="mt-3 rounded-full bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-700"
                                    >
                                        + Add link
                                    </button>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        Step 3: Add picture and description
                                    </h2>

                                    <div className="mt-3 space-y-3">
                                        <input
                                            className="w-full rounded-xl border border-transparent bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
                                            type="url"
                                            placeholder="Enter link to your picture"
                                        />

                                        <input
                                            className="w-full rounded-xl border border-transparent bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
                                            type="text"
                                            placeholder="Enter description"
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        className="mt-5 w-full rounded-full bg-pink-700 px-6 py-3.5 font-bold text-white transition hover:bg-pink-800 sm:w-auto"
                                    >
                                        Create your BitTree
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <aside className="flex max-h-screen items-center justify-center p-6 sm:p-10 lg:min-h-0 lg:p-12">
                        <img
                            className="h-auto max-h-screen w-full max-w-sm object-contain lg:max-h-full lg:max-w-md"
                            src="/generate.png"
                            alt="Generate your links"
                        />
                    </aside>
                </div>
            </main>
        </>
    )
}

export default Generate