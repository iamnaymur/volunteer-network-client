import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllEvents = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [revalid, setRevalid] = useState(false);

  const handleSearching = (event) => {
    if (event === "") {
      setRevalid(!revalid);
      return;
    }
    fetch(`http://localhost:5000/eventSearch/${event}`)
      .then((res) => res.json())
      .then((data) => setAllEvents(data));
  };

  // const handleSearch = () => {};

  useEffect(() => {
    fetch("http://localhost:5000/allEvents")
      .then((res) => res.json())
      .then((data) => setAllEvents(data));
  }, [revalid]);
  return (
    <>
      {/* search field */}
      <div className="form-control ">
        <div className="input-group-lg flex justify-center">
          <input
            onChange={(event) => handleSearching(event.target.value)}
            type="text"
            placeholder="Search…"
            className="input input-bordered w-60"
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* aLL EVENTS */}
      <div className="grid grid-cols-4 container mx-auto gap-16">
        {allEvents.map((event) => (
          <div key={event._id}>
            <div className="card w-96 glass bg-gray-300">
              <figure>
                <img className="w-52 h-64" src={event.image} alt="car!" />
              </figure>
              <div className="card-body bg-blue-300 rounded-lg">
                <h2 className="card-title">{event.eventName}</h2>
                <p className="bold">{event.date}</p>
                <div className="card-actions justify-end ">
                  <Link
                    to={`/addEvent/${event._id}`}
                    className="btn btn-primary"
                  >
                    Join us!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllEvents;
