import { initialState } from './filter.data';
import { Action, State } from './filter.type';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: true, error: false };
    case 'SET_ERROR':
      return { ...state, loading: false, error: true, countries: [] };
    case 'SET_COUNTRIES':
      return { ...state, loading: false, countries: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};
