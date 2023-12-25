import React, { useState } from "react";
import { stats } from "../helper/data";
import { testimonials } from "../helper/data";

const Home = () => {

  const [count,setCount] = useState(0)

const  {name,avatar,title,quote} =testimonials[count]



  return (
    <div className="text-center">
      <h1 className="text-[3rem] text-slate-700 m-5">
        We do our best to make customers always happy
      </h1>
      <h6>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur,
        ipsa.
      </h6>
      <div className="flex w-[100%] flex-wrap text-[1.8rem] ">
        {stats.map((item) => (
          <div className="w-[50%] text-gray-400 ">
            <p className="text-pink-600 font-semibold ">{item.data}</p>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div>
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
           <p className="text-black">What people are saying</p>
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                 {quote}
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <img
                  className="mx-auto h-10 w-10 rounded-full"
                  src={avatar}
                  alt=""
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">
                   {name}
                  </div>
                  <svg
                    viewBox="0 0 2 2"
                    width={3}
                    height={3}
                    aria-hidden="true"
                    className="fill-gray-900"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-gray-600">{title}</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div>
            <ul className="flex justify-center gap-3 mt-4">
            <li onClick={()=>setCount(0)}>
                <button className="bg-slate-400 w-3 h-3 rounded-full"></button>
              </li>
              <li onClick={()=>setCount(1)}>
                <button className="bg-slate-400 w-3 h-3 rounded-full"></button>
              </li>
              <li onClick={()=>setCount(2)}>
                <button className="bg-slate-400 w-3 h-3 rounded-full"></button>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Home;
