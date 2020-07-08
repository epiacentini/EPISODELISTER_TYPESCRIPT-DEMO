import React, { useReducer } from 'react';
import { IState, IACtion, IEpisode } from './interfaces';

const initialState: IState = {
  episodes: [],
  favorites: [],
};

export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IACtion): IState {
  switch (action.type) {
    case 'REMOVE_FAVORITE':
      return { ...state, favorites: action.payload };
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    default:
      return state;
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] };
  }
}

export function StoreProvider(
  props: JSX.ElementChildrenAttribute
): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
