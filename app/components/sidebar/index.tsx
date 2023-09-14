"use client"

import Link from 'next/link'
import React, { ReactElement } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BiSolidMask } from 'react-icons/bi'
import { TfiMoreAlt } from 'react-icons/tfi'

type SideArr = {
    icons: ReactElement,
    title: string,
    link: string,
}

const SidebarArr: SideArr[] = [
    {
        icons: <AiFillHome size={25} />,
        title: 'Home',
        link: '/'
    },
    {
        icons: <BiSolidMask size={25} />,
        title: 'NSFW',
        link: '/nsfw'
    },
    {
        icons: <TfiMoreAlt size={25} />,
        title: 'More',
        link: '/more'
    },
]

const styles = {
    card: 'item flex gap-5 p-3 items-center mb-6 text-gray-700 rounded-md hover:bg-gray-300 justify-start duration-300'
}

function Sidebar({ children}: {
    children: React.ReactNode
}) {


    return (
        <div className='h-screen flex bg-white'>
            
                <aside className="w-0 md:w-64 duration-200 p-6 shadow-xl overflow-y-auto">
                    {SidebarArr.map((item, i) => (
                        <Link key={i} href={item.link} className={styles.card}>
                            {item.icons}
                            <span className='pl-4'>{item.title}</span>
                        </Link>
                    ))}
                </aside>
            <main className='w-full overflow-y-auto px-4'>
                {children}
            </main>
        </div>
    )
}

export default Sidebar





