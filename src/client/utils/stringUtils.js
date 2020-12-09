export const justYear = (fullDateString) => {
 return fullDateString.slice(0,4)
};

export const checkAndSplitMsg = (message) => {
  let text = 'No Moovies. \n Please try \n a different query.';
  if (message === 'Request failed with status code 422') {
    text = 'No Moovies. \n Please provide \n a search query!'
  }
  return text.split('\n')
};