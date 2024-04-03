import React from "react";
import bg from "../Assets/image.png";

function Main() {
  return (
    <div
      className="bg-cover  bg-center bg-no-repeat min-h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" w-4/5 flex flex-col justify-center items-center gap-4 mt-20">
        <h1 className="z-10 top-0 text-5xl text-center text-[#ffff]" style={{lineHeight:'1.5', letterSpacing:'2px'}}>
          Discover Exciting Events Happening Near You - Stay Tuned For Updates!!
        </h1>

        <p className="w-2/3 text-[#989090] pb-24"> 
          On Your Network Note that the development build is not optimized. To
          create a production build, use npm run build.On Your NetworkNote that
          the development build is not optimized.
        </p>
      </div>
    </div>
  );
}

export default Main;
