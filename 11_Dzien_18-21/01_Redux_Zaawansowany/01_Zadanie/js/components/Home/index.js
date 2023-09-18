import React from "react";
import LastRecipes from "./LastRecipes";
import LastProducts from "./LastProducts";

const Home = () => {
  return (
    <div className="columns">
      <div className="column is-one-third">
        <LastRecipes/>
      </div>
      <div className="column is-one-third">
        <LastProducts/>
      </div>
    </div>

  );
};

export default Home;