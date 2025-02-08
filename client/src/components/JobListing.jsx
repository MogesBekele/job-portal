import React from "react";

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
                {searchFilter.title && <span>{searchFilter.title}</span>}
                {searchFilter.location && <span>{searchFilter.location}</span>}
              </div>
            </>
          )}
      </div>
    </div>
  );
};

export default JobListing;
