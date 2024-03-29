import React from "react";
import Html from '../asset/Expreience/html.png';
import Css from '../asset/Expreience/css.png';
import Javascript from '../asset/Expreience/javascript.png';
import Jquery from '../asset/Expreience/Jquery.png';
import ReactPic from '../asset/Expreience/react.png';
import Tailwind from '../asset/Expreience/tailwind.png';
import Bootstrap from '../asset/Expreience/Bootstrap.png';

import github from '../asset/Expreience/github.png';
import ReactNative from '../asset/Expreience/React-Native.png'
import Redux from '../asset/Expreience/Redux.png'
import mysql from '../asset/Expreience/Mysql.png';
import NoodeJs from '../asset/Expreience/Nodejs.png';
import Express from '../asset/Expreience/Express.png';
import MongoDb from '../asset/Expreience/MongoDb.png';
import Sass from '../asset/Expreience/Sass.png';
export default function Experience(){
    let ExpPic=[
        {
            id:1,
            pic:Html,
            name:"HTML",
            shadow:"shadow-orange-600"
            
        },
        {
            id:2,
            pic:Css,
            name:"CSS",
            shadow:"shadow-sky-600"
        },
        {
            id:3,
            pic:Javascript,
            name:"JavaScript",
            shadow:"shadow-amber-300"
        },
        {
            id:14,
            pic:ReactPic,
            name:"ReactJS",
            shadow:"shadow-cyan-400"
            
        },
        {
            id:5,
            pic:ReactNative,
            name:"Native",
            shadow:"shadow-cyan-400",
            text:"text-sm"
            
        },
        {
            id:6,
            pic:Tailwind,
            name:"Tailwind",
            shadow:"shadow-blue-500"
            
        },
        {
            id:7,
            pic:Bootstrap,
            name:"BootStrap",
            shadow:"shadow-indigo-500"
            
        },
        {
            id:8,
            pic:github,
            name:"Github",
            shadow:"shadow-gray-300"
        },
        {
            id:9,
            pic:mysql,
            name:"Mysql",
            shadow:"shadow-blue-800",
            style:"pb-7"
        },
        {
            id:10,
            pic:NoodeJs,
            name:"NodeJs",
            shadow:"shadow-green-700",
            style:"pb-7"
        },
        {
            id:11,
            pic:Express,
            name:"ExpresJs",
            shadow:"shadow-slate-300",
            style:"pb-10"
        },
        {
            id:12,
            pic:MongoDb,
            name:"MongoDb",
            shadow:"shadow-green-400",
            
        },
        {
            id:13,
            pic:Sass,
            name:"Sass",
            shadow:"shadow-pink-600",
            style:"pb-6"
            
        },
        {
            id:15,
            pic:Redux,
            name:"Redux",
            shadow:"shadow-indigo-500",
            style:"pb-6"
            
        },
    ]
    return(
        <div name="Experience" className="bg-gradient-to-t from-black to-slate-800 py-28  text-white">
            <div className="md:max-w-screen-lg md:mx-auto md:px-12 lg:px-0 px-8">
                <div>
                    <div>
                        <p className="text-4xl   border-b-2 w-[9rem] mb-4">Experience</p>
                        <p className="mb-6">These are the technologies i've worked with</p>
                    </div>
                    <ul className="grid sm:grid-cols-3 grid-cols-2 gap-12 items-center ">
                        {
                            ExpPic.map(({id,pic,name,shadow,style,text})=><li key={id}>
                               <div className={" py-3 shadow-md " + shadow +" "+style}>
                                <img src={pic} alt="" className="w-20 mx-auto"/>
                                <div className="w-20 mx-auto flex justify-center">
                                <p className={"mt-3"+text}>{name}</p>
                                </div>
                               </div>
                            </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}