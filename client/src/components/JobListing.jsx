import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const JobListing = () => {
  const { isSearched, searchFilter } = useContext(AppContext);
  return (
    <div>
      <div>
        {isSearched &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              <h3>Current Search</h3>
              <div>
                {searchFilter.title &&(
                   <span>
                    {searchFilter.title}
                    <img className="cursor-pointer" src={assets.cross_icon} alt="" />
                    
                    </span>)}
                {searchFilter.location && (
                  <span>
                    {searchFilter.location}

                  </span>)}
              </div>
            </>
          )}
      </div>
    </div>
  );
};

export default JobListing;
