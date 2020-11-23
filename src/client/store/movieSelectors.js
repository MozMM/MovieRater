

export const isLoadingSelector = (state) => state.moviesReducer.isLoading;

export const movieResultsSelector = (state) => state.moviesReducer.movieResults;

export const movieErrorSelector = (state) => state.moviesReducer.errorMsg;
