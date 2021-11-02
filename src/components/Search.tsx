
import React, {useCallback, useContext, useEffect, useMemo, useState} from "react";
import {ApiEnv} from "../config";
import {ActionType, StateContext} from "../store/reducer/GlobalState";

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const {dispatch} = useContext(StateContext);



  const onSearch = useCallback((searchValue: string): void => {
    dispatch({
      type: ActionType.SEARCH_MOVIES_REQUEST,
      loading: true
    })
    fetch(`${ApiEnv.endpoint}?s=${searchValue}`, {
      mode: 'cors',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: ActionType.SEARCH_MOVIES_SUCCESS,
            payload: jsonResponse.Search
          })
        } else {
          dispatch({
            type: ActionType.SEARCH_MOVIES_FAILURE,
            errorMessage: jsonResponse.Error,
          })
        }
        return
      });
  }, [dispatch]);

  const resetInputField = () => {
    setSearchValue("")
  }


  const callSearchFunction = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      e.preventDefault();
      onSearch(searchValue);
      resetInputField();
    }, [onSearch, searchValue])


  const handleSearchInputChanges = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    }, [])


  useEffect(() => {
    onSearch('SpiderMan');
  }, [onSearch]);


  const memoResult = useMemo(() => {
    return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    );
  }, [callSearchFunction, handleSearchInputChanges, searchValue])




  return memoResult;
}

export default Search;