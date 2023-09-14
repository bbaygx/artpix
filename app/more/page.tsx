import Link from 'next/link'
import React from 'react'

interface PageProps {
    name: string
    link: string
}

const MorePages: PageProps[] = [
    { name: 'waifu', link: '/sfw/waifu' },
    { name: 'neko', link: '/sfw/neko' },
    { name: 'blush', link: '/sfw/blush' },
    { name: 'awoo', link: '/sfw/awoo' },
    { name: 'cry', link: '/sfw/cry' },
    { name: 'cuddle', link: '/sfw/cuddle' },
    { name: 'hug', link: '/sfw/hug' },
    { name: 'megumin', link: '/sfw/megumin' },
    { name: 'shinobu', link: '/sfw/shinobu' },
    { name: 'smile', link: '/sfw/smile' },
    { name: 'bully', link: '/sfw/bully' },
    { name: 'pat', link: '/sfw/pat' },
]

const page = () => {
    return (
        <div className='flex justify-center items-center '>
            <div className="my-36 mx-12 md:mx-24 p-10 border rounded-md">
                <h1 className='text-center font-semibold pb-6 text-3xl'>Pages</h1>
                <p>Here are all the different pages you can explore.</p>
                <ul className='grid  grid-cols-2 md:grid-cols-4 gap-4 py-6 justify-items-center'>
                    {MorePages.map((page, i) => (
                            <Link href={page.link} key={i}>
                                <li className='py-2 px-3 border shadow-lg hover:bg-gray-600 hover:text-white duration-200 text-sm border-zinc-600 rounded-lg font-semibold uppercase'>
                                {page.name}
                                </li>
                            </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default page