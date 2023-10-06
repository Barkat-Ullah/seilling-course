

const Course = ({course}) => {
    console.log(course);
    const {_id, author, image, title ,price ,description, paragraph } = course
    return (
        <div>
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
                        <h2>{author.name}</h2>
                    </div>
                <p className=" text-slate-400">Price: {price}</p>
                </div>
              </header>
              <p>
              
              </p>
            </div>

            <div className="flex justify-end p-6 pt-0">
              <button className="inline-flex items-center justify-center w-full h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-[#3BBCA7] hover:bg-[#309382] focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>Details</span>
              </button>
            </div>
          </div>
        </div>
    );
};

export default Course;