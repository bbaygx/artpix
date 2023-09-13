"use client"

import React, { useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'

function Navbar() {



    return (
        <header className='bg-white'>
            <nav className="navbar bg-base-100 px-6">
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">ArtPix</a>
                </div>
                <div className="flex-none ">
                    <button className='p-2 hover:bg-zinc-100 rounded-lg'>
                        <AiFillGithub size={30}/>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
