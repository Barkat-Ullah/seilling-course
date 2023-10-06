// import {bannerImg} from '../../assets/banner.jpg'


const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="">
          <img
            src= "https://i.ibb.co/k4rFsqd/banner.jpg"
            className=" max-w-sm rounded-lg shadow-2xl w-[600px] h-[400px] "
          />
          </div>
          <div>
            <h1 className="text-5xl font-bold">A learning platform that 
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
