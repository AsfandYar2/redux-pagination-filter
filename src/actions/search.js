export const setSearch = msg => dispatch => {
  dispatch({
    type: "FILTER",
    payload: msg
  });
  //   dispatch({
  //     type: "CLEAR"
  //   });
};
