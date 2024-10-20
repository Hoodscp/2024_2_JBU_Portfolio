import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="font-[family-name:var(--font-geist-mono)] sticky top-0 left-0 right-0">
      <nav className="bg-black py-4 px-8 border-double border-b-8 border-white">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-gray-500 hover:text-gray-300 mr-4">
                [My Web]
              </div>
            </Link>
            <Link href="/">
              <div className="text-white hover:text-gray-300 mr-4">Web</div>
            </Link>
            <Link href="/scp">
              <div className="text-white hover:text-gray-300 mr-4">SCP</div>
            </Link>
            <Link href="/video">
              <div className="text-white hover:text-gray-300 mr-4">Video</div>
            </Link>
            <Link href="/repos">
              <div className="text-white hover:text-gray-300 mr-4">Repos</div>
            </Link>
          </div>
          <div className="flex items-center font-bold"></div>
        </div>
      </nav>
    </div>
  )
}
