import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const handle = (await params).handle
    const client = await clientPromise;
    const db = client.db("bittree")
    const collection = db.collection("links")

    // If the handle is already claimed, you cannot create the bittree
    const item = await collection.findOne({ handle: handle })
    if (!item) {
        return notFound()
    }

    return (
        <div className="min-h-screen bg-linear-to-b from-purple-500 to-purple-300 flex justify-center px-4 py-14 sm:py-20">
            <div className="flex flex-col items-center gap-4 w-full max-w-md">

                <img
                    src={item.pic}
                    alt={item.handle}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white shadow-lg profile-pop"
                />

                <span className="font-bold text-xl sm:text-2xl text-white drop-shadow-sm profile-pop" style={{ animationDelay: "0.1s" }}>
                    @{item.handle}
                </span>

                {item.desc && (
                    <span className="text-center text-white/90 text-sm sm:text-base max-w-xs profile-pop" style={{ animationDelay: "0.15s" }}>
                        {item.desc}
                    </span>
                )}

                <div className="links flex flex-col w-full gap-3 mt-4">
                    {item.links.map((linkItem, index) => (
                        <Link key={index} href={linkItem.linktext} target="_blank" rel="noopener noreferrer">
                            <div
                                className="link-pop bg-white/95 hover:bg-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 py-4 px-4 shadow-md hover:shadow-xl rounded-full flex justify-center items-center font-medium text-purple-900 w-full"
                                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                            >
                                {linkItem.link}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}