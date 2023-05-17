import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
const AddEvent = () => {
  const selectedEvent = useLoaderData();

  const [startDate, setStartDate] = useState(new Date());
  // console.log(selectedEvent);
  const { user } = useContext(AuthContext);

  const dateValue = (event) => {
    // console.log(event.target.value);
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const description = form.description.value;
    const photoUrl= form.photoUrl.value;
    const registrationData = {
      name,
      email,
      date,
      description,
      photoUrl,
    };
    // console.log(registrationData);
    fetch("http://localhost:5000/registeredEvents", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(registrationData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success(
            `Registration for ${selectedEvent.eventName} was successfully added`
          );
        }
        console.log(data);
      });
  };

  return (
    <div className="container mx-auto mt-16 ">
      <h1 className="text-4xl bold">Register as a volunteer.</h1>
      <form onSubmit={handleRegistration} className="card-body space-y-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            defaultValue={user?.displayName}
            name="name"
            type="text"
            placeholder="Full Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Email</span>
          </label>
          <input
            defaultValue={user?.email}
            readOnly
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered text-zinc-900/50"
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span>Date:</span>
            <DatePicker
              className="ms-2 bold underline cursor-pointer"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </label>
          <input
            value={startDate}
            name="date"
            onChange={(event) => dateValue(event)}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Event Description</span>
          </label>
          <input
            defaultValue={selectedEvent.description}
            type="text"
            name="description"
            placeholder="Description"
            className="input input-bordered"
          />
        </div>
        <div className="form-control hidden">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            defaultValue={selectedEvent.image}
            type="text"
            name="photoUrl"
            placeholder="photoUrl"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Registration</button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
