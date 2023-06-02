import React,{useState} from 'react';
import {AiOutlineMenu ,AiOutlineClose } from "react-icons/ai";
// import {gsap} from 'gsap'
import {Link} from 'react-scroll';
export default function Navbar(){
    const links=[
        {
            id:1,
            link:'Home'
        },
        {
            id:2,
            link:'About'
        },
        {
            id:3,
            link:'Portfolio'
        },
        {
            id:4,
            link:'Experience'
        },
        {
            id:5,
            link:'Contact'
        }
    ]
    const [humberger,sethumberger]=useState(true);
    function humbergerClick(){
        sethumberger(!humberger);
    }
    return(
        <>
        <div className='flex justify-between  h-20 w-full items-center px-5 py-5 bg-gray-900 fixed'>
            <h1 className='font-signature font-medium text-3xl text-white'>Ajaj alam</h1>
            <div className='font-medium text-3xl text-white block md:hidden hover:cursor-pointer ease-linear duration-500 transition z-20' onClick={humbergerClick}>{humberger?(< AiOutlineMenu/>):<AiOutlineClose/>}</div>
            <ul className='hidden md:flex'>
                {
                    links.map(({id,link})=><li key={id} className='text-slate-400 hover:scale-110 hover:text-white duration-300 ease-linear px-7 cursor-pointer'><Link to={link} smooth duration={500}>{link}</Link></li>
                    )
                }
            </ul>
            {!humberger &&(
                <ul className='z-10 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-slate-400 bg-gray-900'>
                {
                        links.map(({id,link})=><li key={id} className='text-slate-400  py-5 text-2xl hover:scale-110 hover:cursor-pointer hover:text-white duration-300 ease-linear '>
                            <Link onClick={()=>{
                                sethumberger(!humberger);
                            }} to={link} smooth duration={500}>{link}</Link>

                            </li>
                        )
                    }
                </ul>
            )
            }
        </div>
        </>
    )
}