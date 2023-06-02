import React from "react";
import Hero from "../asset/Hero.png";
import {AiOutlineArrowRight} from 'react-icons/ai';
export default function Home() {
  return (
    <div
      name="Home"
      className=" w-full h-screen flex flex-col items-center bg-gradient-to-b from-black to-slate-800 justify-center mb-0"
    >
      <div className="md:space-x-12 max-w-screen-lg px-10 lg:px-0 mx-auto flex justify-center  items-center h-full text-white flex-col md:flex-row">
        <div className="">
          <h1 className="md:text-4xl  text-xl font-normal pt-14 md:pt-0">
            I'm a Full Stack Web & App Developer{" "}
          </h1>
          <p className="text-slate-400 md:py-6 text-xs md:text-lg py-5">
            I am currently a student of MNIT JAIPUR.<br></br>
            My name is Ajaj Alam.<br></br>I have 1 year of exprience bulding and
            desgining Application.
          </p>
          
            <a href="/AJAJ_ RESUME.pdf" download={true} target="_blank" rel="noreferrer" className="flex items-center group py-1.5 px-3 w-24 rounded-lg bg-gradient-to-r from-cyan-500 text-sm to-blue-500 mb-4">
              Resume
              <span className="pl-1 group-hover:translate-x-1 ease-linear duration-300">
                <AiOutlineArrowRight />
              </span>
            </a>
        </div>
        <div className="sm:w-72 mt-4 md:mt-0 h-80 md:h-80  md:w-72 hover:">
          <img
            className="rounded-xl w-full h-full md:w-full"
            src={Hero}
            alt="My profile  "
          />
        </div>
      </div>
    </div>
  );
}
