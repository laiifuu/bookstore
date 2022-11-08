// Actions
const CHECK_STATUS = 'redux/categories/';

// Reducer
export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';

    default:
      return state;
  }
}

// Action Creators

const checkStatusAction = () => ({ type: CHECK_STATUS });

export { CHECK_STATUS, checkStatusAction };
