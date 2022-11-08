//Actions
const CHECK_STATUS = "redux/categories/";


//Reducer
const categories = (state=[], action) => {
  switch (action.type){
    case CHECK_STATUS: 
      return 'Under construction';

    default:
      return state;
  }
}

//Action Creators

const checkStatusAction = (book) => {
  return {type:CHECK_STATUS};
}

export default categories;
export {CHECK_STATUS, checkStatusAction};