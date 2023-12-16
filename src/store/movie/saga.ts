import { call, put, takeEvery } from "redux-saga/effects";
import { getMoviesSuccess, setMovieDetail } from "./state";


function* fetchMovie() {
  const movies = yield call(() =>
    fetch("http://localhost:8080/minhsama/api/v1/movies/list")
  );
  const formatMovies = yield movies.json();
  yield put(getMoviesSuccess(formatMovies.data));
  yield put(setMovieDetail(formatMovies.data[0].movies[0]));
}

function* movieSaga() {
  yield takeEvery("movies/getMoviesFetch", fetchMovie);
}

export default movieSaga;
