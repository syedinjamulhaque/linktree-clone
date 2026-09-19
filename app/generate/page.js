'use client'
import { Suspense, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';

const GenerateInner = () => {
    const searchParams = useSearchParams()
    const [links, setLinks] = useState([{ link: "", linktext: "" }])
    const [handle, setHandle] = useState(searchParams.get('handle') || "")
    const [pic, setPic] = useState("")
    const [desc, setDesc] = useState("")

    const handleChange = (index, link, linktext) => {
        setLinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i === index) {
                    return { link, linktext }
                }
                return item
            })
        })
    }

    const lastLink = links[links.length - 1]
    const canAddLink = lastLink.link.trim() !== "" && lastLink.linktext.trim() !== ""

    const addLink = () => {
        if (!canAddLink) {
            toast.warn("Fill in the current link before adding another")
            return
        }
        setLinks(links.concat([{ link: "", linktext: "" }]))
    }

    const submitLinks = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic,
            "desc": desc
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("/api/add", requestOptions);
        const result = await r.json();

        if (result.success) {
            toast.success(result.message)
            setLinks([{ link: "", linktext: "" }])
            setHandle("")
            setPic("")
            setDesc("")
        } else {
            toast.error(result.message)
        }
    }

    return (
        <>
            <ToastContainer />
            <main className="min-h-0 flex-1 overflow-y-auto bg-[#e9c0e9] lg:overflow-hidden">
                <div className="mt-6 mx-auto grid min-h-full w-full max-w-7xl grid-cols-1 lg:h-full lg:grid-cols-2">
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
                                        value={handle}
                                        onChange={(e) => { setHandle(e.target.value) }}
                                        className="mt-3 w-full rounded-xl border border-transparent bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-rose-600 focus:ring-2 focus:ring-rose-200"
                                        type="text"
                                        placeholder="Choose a handle"
                                    />
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        Step 2: Add links
                                    </h2>

                                    {links && links.map((item, index) => {
                                        return (
                                            <div key={index} className="mt-3 grid gap-3 sm:grid-cols-2">
                                                <input
                                                    value={item.linktext || ""}
                                                    onChange={(e) => { handleChange(index, item.link, e.target.value) }}
                                                    className="min-w-0 rounded-xl border border-transparent bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-rose-600 focus:ring-2 focus:ring-rose-200"
                                                    type="text"
                                                    placeholder="Enter link text"
                                                />

                                                <input
                                                    value={item.link || ""}
                                                    onChange={(e) => { handleChange(index, e.target.value, item.linktext) }}
                                                    className="min-w-0 rounded-xl border border-transparent bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-rose-600 focus:ring-2 focus:ring-rose-200"
                                                    type="url"
                                                    placeholder="Enter link URL"
                                                />
                                            </div>
                                        )
                                    })}

                                    <button onClick={() => { addLink() }}
                                        type="button"
                                        disabled={!canAddLink}
                                        className="mt-3 rounded-full bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-md shadow-slate-900/20 transition hover:bg-slate-800 active:scale-95 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:shadow-none"
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
                                            value={pic}
                                            onChange={(e) => { setPic(e.target.value) }}
                                            className="w-full rounded-xl border border-transparent bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-rose-600 focus:ring-2 focus:ring-rose-200"
                                            type="url"
                                            placeholder="Enter link to your picture"
                                        />

                                        <input
                                            value={desc}
                                            onChange={(e) => { setDesc(e.target.value) }}
                                            className="w-full rounded-xl border border-transparent bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-rose-600 focus:ring-2 focus:ring-rose-200"
                                            type="text"
                                            placeholder="Enter description"
                                        />
                                    </div>

                                    <button
                                        onClick={() => { submitLinks() }}
                                        disabled={pic === "" || handle === "" || links[0].linktext === ""}
                                        type="button"
                                        className="mt-5 w-full rounded-full bg-rose-800 px-6 py-3.5 font-bold text-white shadow-lg shadow-rose-900/30 transition hover:bg-rose-900 active:scale-95 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:shadow-none sm:w-auto"
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

const Generate = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <GenerateInner />
        </Suspense>
    )
}

export default Generate