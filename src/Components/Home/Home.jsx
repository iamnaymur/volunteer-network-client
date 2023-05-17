import React, { useState } from "react";
import AllEvents from "./AllEvents";

const Home = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex flex-col space-y-10 mt-7 ">
      <div>
        <h1 className="text-4xl bold text-center">
          I grow by helping people in need.
        </h1>
      </div>

      <AllEvents searchText={searchText} setSearchText={setSearchText}></AllEvents>
    </div>
  );
};

export default Home;
