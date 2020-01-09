import React from "react";

const JobItem = ({ job }) => {
  const { id, title } = job;
  return (
    <div>
      {console.log(id)}
      <div className="card bg-light" style={{ margin: "6px" }}>
        <ul>
          {id}
          <li>{title}</li>
        </ul>
      </div>
    </div>
  );
};

export default JobItem;
