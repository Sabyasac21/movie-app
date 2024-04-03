import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function Upcoming() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  async function getMovies(pageNumber) {
    try {
      const response = await fetch(
        `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${pageNumber}&type=upcoming`
      );
      const data = await response.json();
      console.log(data);
      setMovies(prev=>[...prev, ...data.events]);
      setTotalPages(data.totalPages);
      setPage(pageNumber + 1);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchMoreData = () => {
    if (page <= totalPages) {
      getMovies(page);
    }
  };

  useEffect(() => {
    getMovies(page);
  }, []);
  useEffect(() => {
    console.log(movies);
  }, [movies]);
  return (
    <div className="w-[100vw] flex flex-col  justify-center items-center p-8 ">
      <div className="md:w-3/4 px-0 py-4 text-3xl md:text-lg font-bold">
        {" "}
        Upcoming Events
      </div>
      <InfiniteScroll
        className="w-[90vw] md:w-[80vw]"
        dataLength={movies.length}
        next={fetchMoreData}
        hasMore={page <= totalPages}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
      <div className="scrollableDiv md:w-full w-full grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-4">
      
        {movies.map((event) => (
          <div className="relative flex bg-red-100 justify-center border rounded-lg items-center mb-4">
            <div className=" z-0 h-[15rem] w-full">
              <img
                className="h-full w-full rounded-lg"
                src={event.imgUrl}
                alt="image not working..."
              />
            </div>
            <div className="flex absolute bottom-0 bg-yellow-0 w-full px-2 justify-between border rounded-b-lg border-red-900">
              <div className="">
                <p className="text-black font-bold">
                  {event.eventName.split(" ").slice(0, 3).join(" ")}
                </p>
                <p className="text-[#989090] text-sm">{event.cityName}</p>
              </div>
              <div className="text-left">
                <p className="text-[10px]  text-[#989090]  h-1/2 flex justify-center items-center">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-[10px]  text-[#989090]  h-1/2 flex justify-start items-center">
                  {event.weather}
                </p>
              </div>
            </div>
          </div>
        ))}
         
      </div>
      </InfiniteScroll>
    </div>
  );
}

export default Upcoming;
