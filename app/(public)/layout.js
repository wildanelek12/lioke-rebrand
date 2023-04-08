<<<<<<< Updated upstream:app/(public)/layout.js
import '../globals.css'
=======
"use client"
import './globals.css'
>>>>>>> Stashed changes:app/layout.js
import Link from 'next/link'
import Image from 'next/image'
<<<<<<< Updated upstream:app/(public)/layout.js
import Fonts from '@/constants/fonts'
=======
import { RecoilRoot } from 'recoil'


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: "fallback", // <--
})

>>>>>>> Stashed changes:app/layout.js

export default function RootLayout({ children }) {

  return (
<<<<<<< Updated upstream:app/(public)/layout.js
    <html lang="en">
      <head />
      <body className={[Fonts.className, "font-montserrat"].join(' ')}>
        <nav className="flex items-center px-16 py-6 text-white bg-white shadow-md">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={1200}
              height={1200}
              className="self-center object-contain w-32 mr-8"
            />
          </Link>
          <div className='flex-row flex-1 space-x-12'>
            <Link href={"/project "} className="text-base font-medium text-[#6E6F70]">Home</Link>
            <Link href={"/project"} className="text-base font-medium text-[#6E6F70]">Pricing</Link>
            <Link href={"/project"} className="text-base font-medium text-[#6E6F70]">About</Link>
          </div>
          <div className='flex flex-row space-x-3'>
            <Image
              className='w-10 h-10 rounded-full'
              src="https://picsum.photos/id/237/400/400"
              alt="Picture of the author"
              width={32}
              height={32}
            />
            <button className='px-4 py-2 text-sm font-medium text-white rounded-md bg-secondary '>Logout</button>
          </div>
        </nav>
=======
    <>

      <body className={`${montserrat.variable}  font-sans`}>
>>>>>>> Stashed changes:app/layout.js
        <div >
          <RecoilRoot>
            {children}
          </RecoilRoot>
        </div>
      </body>
    </>
  )
}
