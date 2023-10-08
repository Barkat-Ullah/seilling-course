import { Link, useLoaderData, useParams } from "react-router-dom";

const CourseDetails = () => {
  const datas = useLoaderData();
  const { id } = useParams();
  const data = datas?.find((course) => course._id === id);
  console.log(data);
  return (
    <div className="space-y-3 mb-10">
      <img className="w-full h-[80vh]" src={data.image} alt="" />
    <div className="flex flex-col">
    <h2 className="text-xl font-medium text-[#3BB]">{data.title}</h2>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <span className="font-bold text-slate-800">
          Courses by made : {data.author.name}
        </span>
        <div className="rating">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2  text-[#3BB]"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2  text-[#3BB]"
            checked
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2  text-[#3BB]"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2  text-[#3BB]"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2  text-[#3BB]"
          />
        </div>
      </div>
      <p className="font-bold text-slate-700 ">{data.description}</p>
    </div>
    <Link to="/services">
    <button className="inline-flex items-center justify-center mt-2 h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-[#3BBCA7] hover:bg-[#309382] focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
        <span>See Others</span>
      </button>
    </Link>
    </div>

  );
};

export default CourseDetails;
