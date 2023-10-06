

import { useEffect, useState } from "react";
import Course from "../Course/Course";


const Services = () => {

const [courses, setCourses] = useState([]);

  useEffect(()=>{
    fetch('courses.json')
    .then(res=>{
        res.json()
    .then(data=>{
        console.log(data);
        setCourses(data)
    })    
    })
  },[])

  return (
    <div>
      <div className="mt-10 mb-10">
        <h2 className="text-center text-5xl font-bold">
          Top Related Learning Tutorials
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {
                courses.map(course => <Course key={course._id} course={course}></Course>)
            }
        </div>
      </div>
    </div>
  );
};

export default Services;
