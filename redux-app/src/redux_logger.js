export default  store => dispatch => action=>{
  console.log(store.getState().number);
  dispatch(action);
  console.log(store.getState().number)
};