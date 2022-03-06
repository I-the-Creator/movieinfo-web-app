import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

//reducers
import queryMoviesReducer from "store/queryMovies/reducer";
import queryMoviesAllReducer from "store/queryMoviesAll/reducer";
import searchMoviesReducer from "store/SearchMovies/reducer"

const routeReducer = combineReducers({
  queryMoviesReducer,
  queryMoviesAllReducer,
  searchMoviesReducer,
});

const store = createStore(
  routeReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;