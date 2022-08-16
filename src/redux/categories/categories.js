// Actions
const STATUS = '/src/categories/STATUS';

// Reducer
export default function categoryReducer(state = [], action = {}) {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default: return state;
  }
}

// Action Creators

export function checkStatus(category) {
  return { type: STATUS, category };
}
