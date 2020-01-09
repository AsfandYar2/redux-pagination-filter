import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Alert from "./components/Alert";
import Job from "./components/Jobs";
import Search from "./components/Search";

// Redux
import { Provider } from "react-redux";
import store from "./store";
store.subscribe(() => console.log("store in index ", store.getState()));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Alert />
        {/* <Search /> */}
        <Job />
      </div>
    </Provider>
  );
}

export default App;
