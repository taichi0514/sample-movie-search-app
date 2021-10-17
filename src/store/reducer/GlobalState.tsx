import React, {useReducer} from "react";
import {MovieTypes} from "../../types/movie";

const initialState = {
  loading: false,
  movies: [],
  errorMessage: ""
}

interface State {
  loading: boolean
  movies: MovieTypes[]
  errorMessage: string
}

interface StateContextType {
  state: State
  dispatch: React.Dispatch<SearchActionType>
}

export const StateContext = React.createContext({} as StateContextType)

export enum ActionType {
  SEARCH_MOVIES_REQUEST = "SEARCH_MOVIES_REQUEST",
  SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS",
  SEARCH_MOVIES_FAILURE = "SEARCH_MOVIES_FAILURE"
}

interface RequestSearchType {type: ActionType.SEARCH_MOVIES_REQUEST, loading: boolean}
interface SuccessSearchType {type: ActionType.SEARCH_MOVIES_SUCCESS, payload: MovieTypes[]}
interface FailureSearchType {type: ActionType.SEARCH_MOVIES_FAILURE, errorMessage: string}

type SearchActionType = RequestSearchType | SuccessSearchType | FailureSearchType

const reducer = (state: State, action: SearchActionType): State => {
  switch (action.type) {
    case ActionType.SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ActionType.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload
      }
    case ActionType.SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.errorMessage,
      }
    default:
      return state
  }
}

export const GlobalState: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{state, dispatch}}>
      {props.children}
    </StateContext.Provider>
  )
}
