import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center '>
        <div className="my-36 mx-24 p-10 border rounded-md">
           <h1 className='text-center font-semibold pb-6 text-3xl'>Pages</h1>
           <p>Here are all the different pages you can explore.</p>
           <ul className='grid grid-cols-4 py-6 justify-items-center'>
            <li className='py-2 px-3 border shadow-lg hover:bg-gray-600 hover:text-white duration-200 text-sm border-zinc-600 rounded-lg font-semibold uppercase'>
                <Link href="sfw/waifu">Waifu</Link>
            </li>
            <li className='py-2 px-3 border shadow-lg hover:bg-gray-600 hover:text-white duration-200 text-sm border-zinc-600 rounded-lg font-semibold uppercase'>
                <Link href="sfw/neko">Neko</Link>
            </li>
           </ul>
        </div>
    </div>
  )
}

export default page