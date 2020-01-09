import InitialState from "./initialState";
const searchReducer = (state = "", action) => {
  switch (action.type) {
    case "FILTER":
      return [
        ...InitialState.filter(item => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return item.title.match(regex);
        })
      ];
    case "CLEAR":
      return (state = "");
    default:
      return state;
  }
};
export default searchReducer;
