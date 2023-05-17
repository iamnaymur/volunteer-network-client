import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";

const AllRegistered = () => {
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const { user } = useContext(AuthContext);
  // console.log(user)
  useEffect(() => {
    fetch(`http://localhost:5000/registeredEvents/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setRegisteredEvents(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/registeredEvents/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = registeredEvents.filter(
            (event) => event._id !== id
          );
          setRegisteredEvents(remaining);
        }
      });
  };
  return (
    <div>
      <div className="grid grid-cols-3 mx-auto container mt-10">
        {registeredEvents.map((event) => (
          <div key={event._id}>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img src={event.photoUrl} alt="Shoes" />
              </figure>
              <div className="card-body">
                <p>{event.description}</p>
                <p>{event.date}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="btn btn-primary"
                  >
                    Cancel?
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRegistered;
