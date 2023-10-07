

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-slate-50 rounded-b-xl ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="">
          <img
            src= "https://i.ibb.co/k4rFsqd/banner.jpg"
            className=" max-w-sm rounded-lg  w-[600px] h-[400px] "
          />
          </div>
          <div>
            <h1 className="text-2xl lg:text-5xl font-bold text-slate-700">A learning platform that 
            <br />
            <span className="text-[#3bbCA7]">helps you to learning </span>faster</h1>
            <p className="py-6">
            World-class training and development programs developed by top teachers
            </p>
            <button className="btn btn-success text-yellow-50">Explore All Courses</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
