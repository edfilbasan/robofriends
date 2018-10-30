import React from "react";

export const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="p2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="🤖Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
