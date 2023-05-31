import React from "react";
import { AiFillLinkedin,AiOutlineMail } from "react-icons/ai";
import { BsTwitter, BsGithub, BsFillPersonLinesFill } from "react-icons/bs";
export default function SocialLinks() {
  const link = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <AiFillLinkedin size={30} />
        </>
      ),
      href:'https://www.linkedin.com/in/ajaj-alam-96b672212/',
      style:'rounded-tr-md '
    },
    {
      id: 2,
      child: (
        <>
          Github
          <BsGithub size={30} />
        </>
      ),
      href:'https://github.com/AjajAlam1399',
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <AiOutlineMail size={30} />
        </>
      ),
      href:'mailto:2020umt1399@mnit.ac.in',
    },
    {
        id: 4,
        child: (
          <>
            Twitter
            <BsTwitter size={30} />
          </>
        ),
        href:'https://twitter.com/iamAjajAlam',
      },
    {
      id: 5,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href:'/AJAJ_ RESUME.pdf',
      style:'rounded-br-md',
      download:true,
    },
   
  ];
  return (
    <div className="hidden lg:flex flex-col top-[33%] left-0 fixed text-white ">
      <ul>
        {
            link.map(({id,child,href,style,download})=><li key={id} className= {" w-40  h-13 py-1.5 flex items-center px-4 ml-[-100px] hover:ml-0 ease-linear duration-300  bg-gray-500 "+ style}  >
            <a href={href} download={download} target="_blank" rel="noreferrer" className="flex justify-between items-center w-full">
                {child}
            </a>
          </li>
            
            )
        }
      </ul>
    </div>
  );
}
