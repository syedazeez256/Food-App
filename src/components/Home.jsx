import React from "react";

const Home = () => {
  return (
    <div>
      <div className="sm:flex flex-col justify-center items-center z-20">
        <h2 className="sm:capitalize absolute sm:left-32 left-8 top-40 text-white sm:text-7xl w-4/12 capitalize z-10 text-5xl">
          the <span className="text-orange-400">best </span>foods{" "}
          <span className="text-orange-400">delivered</span>{" "}
        </h2>
        <div
          className={`sm:w-10/12 sm:h-[70vh] mt-2 bg-[url('https://images.pexels.com/photos/1788852/pexels-photo-1788852.jpeg?auto=compress&cs=tinysrgb&w=600')] rounded-lg bg-cover relative z-0 mx-auto w-11/12 h-[40vh]`}
        >
          <div className="absolute top-0 bg-gradient-to-r from-black to-black w-full h-full opacity-60 rounded-lg"></div>
        </div>
      </div>
      <div className="flex justify-center items-center text-yellow-900 h-auto">
        <div className="grid grid-cols-1 gap-2 w-full sm:mx-16 md:mx-20 lg:mx-28 xl: h-auto sm:grid-cols-2">
          <div
            className={`bg-[url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600')] rounded-lg mt-2 bg-cover relative sm:w-full h-40 w-11/12 mx-auto`}
          >
            <div className="absolute top-0 bg-gradient-to-r from-black to-black sm:w-full h-full opacity-30 rounded-lg"></div>
          </div>{" "}
          <div
            className={`bg-[url('https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600')] rounded-lg mt-2 bg-cover relative sm:w-full h-40 w-11/12 mx-auto`}
          >
            <div className="absolute top-0 bg-gradient-to-r from-black to-black sm:w-full h-full opacity-30 rounded-lg"></div>
          </div>
          <div
            className={`bg-[url('https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600')] rounded-lg mt-2 bg-cover relative sm:mx-auto sm:w-full h-40 w-11/12 mx-auto`}
          >
            <div className="absolute top-0 bg-gradient-to-r from-black to-black sm:w-full h-full opacity-30 rounded-lg"></div>
          </div>
          <div
            className={`bg-[url('https://images.pexels.com/photos/765082/pexels-photo-765082.jpeg?auto=compress&cs=tinysrgb&w=600')] rounded-lg mt-2 bg-cover relative sm:w-full h-40 w-11/12 mx-auto`}
          >
            <div className="absolute top-0 bg-gradient-to-r from-black to-black sm:w-full h-full opacity-30 rounded-lg"></div>
          </div>
          <div
            className={`bg-[url('https://images.pexels.com/photos/3209101/pexels-photo-3209101.jpeg?auto=compress&cs=tinysrgb&w=600')] rounded-lg mt-2 bg-cover relative sm:w-full sm:mx-auto h-40 w-11/12 mx-auto`}
          >
            <div className="absolute top-0 bg-gradient-to-r from-black to-black sm:w-full h-full opacity-30 rounded-lg"></div>
          </div>
          <div
            className={`bg-[url('https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600')] rounded-lg mt-2 bg-cover relative sm:mx-auto sm:w-full h-40 w-11/12 mx-auto`}
          >
            <div className="absolute top-0 bg-gradient-to-r from-black to-black sm:w-full h-full opacity-30 rounded-lg"></div>
          </div>
          <div
            className={`bg-[url('https://images.pexels.com/photos/4057754/pexels-photo-4057754.jpeg?auto=compress&cs=tinysrgb&w=600')] rounded-lg mt-2 bg-cover relative mx-auto sm:w-full h-40 w-11/12 mx-auto`}
          >
            <div className="absolute top-0 bg-gradient-to-r from-black to-black sm:w-full h-full opacity-30 rounded-lg"></div>
          </div>
          <div
            className={`bg-[url('https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600')] rounded-lg mt-2 bg-cover relative sm:w-full h-40 w-11/12 mx-auto`}
          >
            <div className="absolute top-0 bg-gradient-to-r from-black to-black sm:w-full h-full opacity-30 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
