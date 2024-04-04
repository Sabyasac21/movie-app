import React from "react";
import '../Styles/horizontalView.css';

function HorizontalView() {
  return (
    <div className="h-[40vh]">
    <div className="max-w-full absolute top-[150%]  md:top-[100%] bg-transparent  bg-red-50 flex justify-end">
      <div className="w-4/5">
        <div className="w-4/5  flex justify-between text-white py-4">
          <span >Recommended Shows</span>
          <span>See All </span>
        </div>


        <div className="flex gap-12 px-4 overflow-auto scrollbar">
          <div className="relative">
            <div className=" z-0 h-[15rem] w-48">
              <img className="h-full w-full rounded-lg" src="https://tse4.explicit.bing.net/th?id=OIP.tdmqmePT2aM8PWO9FW1gZwHaKv&pid=Api&P=0&h=180" />
            </div>
            <div className="flex absolute bottom-0 bg-yellow-0">
              <div >
                <p className="text-white">Movie Name</p>
                <p className="text-gray-300">Address</p>
              </div>
              <div>
                <p>Movie Name</p>
                <p>Address</p>
              </div>
            </div>
          </div>
          <div className=" relative">
            <div className=" z-0 h-[15rem] w-48">
              <img className="h-full w-full rounded-lg" src="https://tse4.explicit.bing.net/th?id=OIP.tdmqmePT2aM8PWO9FW1gZwHaKv&pid=Api&P=0&h=180" />
            </div>
            <div className="flex absolute bottom-0 bg-yellow-0">
              <div >
                <p className="text-white">Movie Name</p>
                <p className="text-gray-300">Address</p>
              </div>
              <div>
                <p>Movie Name</p>
                <p>Address</p>
              </div>
            </div>
          </div>
          <div className=" relative">
            <div className=" z-0 h-[15rem] w-48">
              <img className="h-full w-full rounded-lg" src="https://tse4.explicit.bing.net/th?id=OIP.tdmqmePT2aM8PWO9FW1gZwHaKv&pid=Api&P=0&h=180" />
            </div>
            <div className="flex absolute bottom-0 bg-yellow-0">
              <div >
                <p className="text-white">Movie Name</p>
                <p className="text-gray-300">Address</p>
              </div>
              <div>
                <p>Movie Name</p>
                <p>Address</p>
              </div>
            </div>
          </div>
          <div className=" relative">
            <div className=" z-0 h-[15rem] w-48">
              <img className="h-full w-full rounded-lg" src="https://tse4.explicit.bing.net/th?id=OIP.tdmqmePT2aM8PWO9FW1gZwHaKv&pid=Api&P=0&h=180" />
            </div>
            <div className="flex absolute bottom-0 bg-yellow-0">
              <div >
                <p className="text-white">Movie Name</p>
                <p className="text-gray-300">Address</p>
              </div>
              <div>
                <p>Movie Name</p>
                <p>Address</p>
              </div>
            </div>
          </div>
          <div className=" relative">
            <div className=" z-0 h-[15rem] w-48">
              <img className="h-full w-full rounded-lg" src="https://tse4.explicit.bing.net/th?id=OIP.tdmqmePT2aM8PWO9FW1gZwHaKv&pid=Api&P=0&h=180" />
            </div>
            <div className="flex absolute bottom-0 bg-yellow-0">
              <div >
                <p className="text-white">Movie Name</p>
                <p className="text-gray-300">Address</p>
              </div>
              <div>
                <p>Movie Name</p>
                <p>Address</p>
              </div>
            </div>
          </div>
          <div className=" relative">
            <div className=" z-0 h-[15rem] w-48">
              <img className="h-full w-full rounded-lg" src="https://tse4.explicit.bing.net/th?id=OIP.tdmqmePT2aM8PWO9FW1gZwHaKv&pid=Api&P=0&h=180" />
            </div>
            <div className="flex absolute bottom-0 bg-yellow-0">
              <div >
                <p className="text-white">Movie Name</p>
                <p className="text-gray-300">Address</p>
              </div>
              <div>
                <p>Movie Name</p>
                <p>Address</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    
  );
}

export default HorizontalView;
