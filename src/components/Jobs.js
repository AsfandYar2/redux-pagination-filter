import React, { useState } from "react";
import JobItem from "./JobItem";
import { connect } from "react-redux";

const Jobs = ({ jobs, search }) => {
  const [state, setstate] = useState({ start: 0, end: 5 });
  const next = () => {
    let lenth = jobs.length;
    if (!(state.end >= lenth)) {
      setstate({
        ...state,
        start: state.start + 5,
        end: state.end + 5
      });
    }
  };
  const prev = () => {
    if (!(state.start <= 0))
      setstate({ ...state, start: state.start - 5, end: state.end - 5 });
  };
  const numb = nmbr => {
    if (nmbr === 1) {
      setstate({ ...state, start: 0, end: 5 });
    }
    if (nmbr === 2) {
      setstate({ ...state, start: 5, end: 10 });
    }
    if (nmbr === 3) {
      setstate({ ...state, start: 10, end: 15 });
    }
    if (nmbr === 4) {
      setstate({ ...state, start: 15, end: 20 });
    }
  };
  return (
    <div>
      {console.log(jobs)}
      {search !== ""
        ? search.map((job, index) => {
            if (index >= state.start && index < state.end) {
              return <JobItem key={job.id} job={job} />;
            }
          })
        : jobs.map((job, index) => {
            if (index >= state.start && index < state.end) {
              return <JobItem key={job.id} job={job} />;
            }
          })}

      {/* {jobs &&
        jobs.map((job, index) => {
          if (index >= state.start && index < state.end) {
            return <JobItem key={job.id} job={job} />;
          }
        })} */}
      <button onClick={prev}>Prev</button>
      <button onClick={() => numb(1)}>1</button>
      <button onClick={() => numb(2)}>2</button>
      <button onClick={() => numb(3)}>3</button>
      <button onClick={() => numb(4)}>4</button>
      <button onClick={next}>Next</button>
      {console.log("serch array is in Jobs", search)}
    </div>
  );
};

const mapStateToProps = state => ({
  alerts: state.alert,
  jobs: state.job,
  search: state.search
});

export default connect(mapStateToProps)(Jobs);
