import React from "react";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";

const Alert = ({ setAlert, alerts }) => {
  const handleAlert = () => {
    setAlert("redux alert", "a");
  };
  return (
    <div>
      <button onClick={handleAlert}>button</button>
      {alerts !== null &&
        alerts.length > 0 &&
        alerts.map(alert => (
          <div className="alert alert-danger">{alert.msg}</div>
        ))}
      <h1>here is alert</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps, { setAlert })(Alert);
