export default  store => dispatch => action=>{
  console.log(store.getState());
  dispatch(action);
  console.log(store.getState());
};