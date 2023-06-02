import React from "react";
import first from "../asset/portfolio/1ST.png";
import Movix from '../asset/portfolio/Movix.png'
export default function Portfolio() {
  let img = [
    {
      id: 1,
      pic: Movix,
      Demo:"https://aj-movix-web.netlify.app/",
      Code:"https://github.com/AjajAlam1399/Movix"
    },
    {
      id: 1,
      pic: first,
      Demo:"https://ajajalam1399.github.io/My_first_responsive_website/",
      Code:"https://github.com/AjajAlam1399/My_first_responsive_website"
    },
  ];
  return (
    <div name="Portfolio" className="w-full h-screen bg-gradient-to-b  from-black to-slate-800  py-28">
      <div className="  md:max-w-screen-lg text-white md:mx-auto md:px-12 lg:px-0 px-8">
        <div>
          <p className="text-4xl border-b-2 w-[8.2rem] mb-4">Portfolio</p>
          <p className="mb-6">These are some project and more project Comming soon</p>
        </div>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {
            img.map(({id,pic,Demo,Code})=><li key={id}>
              <img className="rounded-t-lg hover:scale-105 duration-300 ease-linear" src={pic} alt="" />
              <div className="flex justify-center items-center shadow-sm shadow-gray-100 rounded-b-lg">
                <a href={Demo} target="_blank"><button className="w-1/2 px-6 py-3">Demo</button></a>
               
                <a href={Code}target='_blank' rel="noreferrer" > <button className="w-1/2 px-6 py-3">Code</button></a>
              </div>
            </li>
            )
          }
        </ul>
      </div>
    </div>
  );
}
