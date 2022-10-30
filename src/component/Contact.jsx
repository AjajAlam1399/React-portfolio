import React from "react";

const Contact = () => {
  return (
    <div name="Contact" className="bg-gradient-to-b from-black to-slate-800 py-24  text-white  w-full h-screen md:px-12 lg:px-0 px-8 ">
      <div className="md:max-w-screen-lg md:mx-auto">
        <div>
          <p className="text-4xl border-b-2 w-[8.2rem] mb-4">Contact</p>
          <p className="mb-6">Submit the form to get in touch with me</p>
        </div>
        <form action="https://getform.io/f/8362ee64-be9f-474d-b93e-a3d0cd034e26" method="POST" autoComplete="off" >
        <div className="md:max-w-screen-sm md:mx-auto">
          <div className="w-full relative  flex justify-center  my-8">
            <input name="name"
              type="text"
              placeholder=" "
              id="user_name"
              className="w-5/6 bg-inherit px-3 py-2 border rounded-md   input-text  "
            />
            <label
              htmlFor="user_name"
              className="absolute  sm:left-[4.4rem] top-2 input-label left-12  text-slate-300"
            >
              Enter your name
            </label>
          </div>
          <div className="w-full  flex justify-center  h-fit relative my-8">
            <input name="email"
              type="email"
              placeholder=" "
              id="user_name"
              className="w-5/6 bg-inherit px-3 py-2 border rounded-md  input-text"
            />
            <label
              htmlFor="user_name"
              className="absolute  sm:left-[4.4rem] top-2 input-label left-12 text-slate-300"
            >
              Enter your Email
            </label>
          </div>
          <div className="w-full  flex relative justify-center my-8">
            <textarea name="message" id=""  rows="5" className="bg-inherit border px-3 py-2 w-5/6  rounded-md input-text" placeholder=" "></textarea>
            <label htmlFor="" className="absolute sm:left-[4.4rem] left-12 top-2 input-label text-slate-300">Enter your message</label>
          </div>
          <div className="flex justify-center items-center">
            <button type="submit" className="py-1.5 px-3 rounded-lg bg-gradient-to-r from-cyan-500 text-sm to-blue-500 mb-4 hover:scale-105 duration-300 ease-linear ">Let's Talk</button>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
