import React from "react";
import { connect } from "react-redux";
import { setSearch } from "../actions/search";

const Search = ({ setSearch }) => {
  const onChange = e => {
    console.log("change", e.target.value);
    if (e.target.value !== "") {
      setSearch(e.target.value);
    } else {
      setSearch("");
    }
  };
  return (
    <div>
      <form>
        <input
          type="Search"
          placeholder="Filter Products..."
          onChange={onChange}
        ></input>
      </form>
      {/* {console.log("serch is", setSearch("z"))} */}
    </div>
  );
};

export default connect(null, { setSearch })(Search);
