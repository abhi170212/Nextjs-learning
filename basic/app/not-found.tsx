"use client"

import { useRouter } from "next/navigation"

export default function NotFoundPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-green-600 flex flex-col justify-center items-center gap-1">
      
      <p className="text-white text-xl font-semibold">
        Page is not Here !!
      </p>

      <button
        onClick={() => router.push("/")}
        className="bg-white text-green-600 px-6 py-3 rounded-lg border-2 border-green-200 hover:bg-green-100 hover:cursor-pointer transition"
      >
        Home
      </button>

    </div>
  )
}