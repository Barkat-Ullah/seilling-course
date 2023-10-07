import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import { Link } from "react-router-dom";


const Course = ({course}) => {

  useEffect(()=>{
    AOS.init();
  },[])

    console.log(course);
    const {_id, author, image, title ,price ,description, paragraph } = course
    return (
        <div  data-aos="fade-up"
        data-aos-anchor-placement="center-bottom" >
         <div className="mt-10 overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
            <figure>
              <img
                src={image}
                alt="card image"
                className="aspect-video w-full"
              />
            </figure>

            <div className="p-6">
              <header className="mb-4">
                <h3 className=" text-xl font-medium text-[#3BB]">
                 {title}
                </h3>
                <p className="text-slate-700 mt-2">{paragraph}</p>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                        <img className="w-12 h-12 rounded-full" src={author.img} alt="" />
                        <h2 className="text-slate-600">{author.name}</h2>
                    </div>
                <p className=" text-slate-600">Price: {price}</p>
                </div>
              </header>
            
              <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-[#3BB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <span className="mx-2">Easy to Use</span>
                    </p>
                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-[#3BB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <span className="mx-2">Clean and Simple Layout</span>
                    </p>

            </div>
            <Link to={`/course/${_id}`}>
            <div className="flex justify-end p-6 pt-0">
             <button className="inline-flex items-center justify-center w-full h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-[#3BBCA7] hover:bg-[#309382] focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>Details</span>
              </button>
            </div>
            </Link>
          </div>
        </div>
    );
};

export default Course;